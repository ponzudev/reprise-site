// App Store の URL から QR コードの SVG を作る（macOS の Core Image を使うので、追加のパッケージは要らない）。
//
//   swift scripts/qr.swift <URL> <出力する .svg>
//
// 書き出す前に、同じマス目の絵を読み取って元の URL に戻ることを確かめる（戻らなければ書き出さない）。
//
// 見た目は public/assets/appstore-qr.svg（日本語のトップ）に合わせている: 紺（#162944）・白地・まわりに 1 マスの余白。
import CoreImage
import Foundation

let arguments = CommandLine.arguments
guard arguments.count == 3 else {
    FileHandle.standardError.write("使い方: swift scripts/qr.swift <URL> <出力する .svg>\n".data(using: .utf8)!)
    exit(1)
}
let text = arguments[1]
let output = arguments[2]

let filter = CIFilter(name: "CIQRCodeGenerator")!
filter.setValue(text.data(using: .utf8)!, forKey: "inputMessage")
filter.setValue("M", forKey: "inputCorrectionLevel")
let image = filter.outputImage!

// Core Image の QR コードは 1 マス 1 ピクセルで、まわりに 1 マスの余白が付いている。
let context = CIContext()
let size = Int(image.extent.width)
var pixels = [UInt8](repeating: 0, count: size * size * 4)
context.render(image, toBitmap: &pixels, rowBytes: size * 4, bounds: image.extent,
               format: .RGBA8, colorSpace: CGColorSpaceCreateDeviceRGB())
// ビットマップの行の向きに左右されないよう、読み取りで確かめる（下）。ここでは上の行から順に読む。
func isDark(_ x: Int, _ y: Int) -> Bool { pixels[(y * size + x) * 4] < 128 }

var path = ""
for y in 0..<size {
    var x = 0
    var cursor = 0
    var first = true
    while x < size {
        guard isDark(x, y) else { x += 1; continue }
        var run = 0
        while x + run < size, isDark(x + run, y) { run += 1 }
        if first {
            path += "M\(x) \(y).5h\(run)"
            first = false
        } else {
            path += "m\(x - cursor) 0h\(run)"
        }
        cursor = x + run
        x += run
    }
}
let svg = """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \(size) \(size)" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h\(size)v\(size)H0z"/><path stroke="#162944" d="\(path)"/></svg>

"""

// 書き出した絵（パスと同じマス目）を拡大して読み取り、元の URL に戻ることを確かめる。
let scale = 8
let big = size * scale
var check = [UInt8](repeating: 255, count: big * big * 4)
for y in 0..<size {
    for x in 0..<size where isDark(x, y) {
        for dy in 0..<scale {
            for dx in 0..<scale {
                let i = ((y * scale + dy) * big + x * scale + dx) * 4
                check[i] = 0x16; check[i + 1] = 0x29; check[i + 2] = 0x44
            }
        }
    }
}
let rendered = CIImage(bitmapData: Data(check), bytesPerRow: big * 4, size: CGSize(width: big, height: big),
                       format: .RGBA8, colorSpace: CGColorSpaceCreateDeviceRGB())
let detector = CIDetector(ofType: CIDetectorTypeQRCode, context: context, options: [CIDetectorAccuracy: CIDetectorAccuracyHigh])!
let decoded = detector.features(in: rendered).compactMap { ($0 as? CIQRCodeFeature)?.messageString }
guard decoded == [text] else {
    FileHandle.standardError.write("読み取りの確認に失敗しました（読めた内容: \(decoded)）\n".data(using: .utf8)!)
    exit(1)
}

try svg.write(toFile: output, atomically: true, encoding: .utf8)
print("\(output): \(size - 2) マス、読み取り OK（\(text)）")
