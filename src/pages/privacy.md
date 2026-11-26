---
layout: ../layouts/DocLayout.astro
title: プライバシーポリシー
description: Reprise（リプライズ）のプライバシーポリシー。音声・文字起こし・学習記録は端末の中にだけ保存し、サーバーへ送信しません。
---
# Reprise（リプライズ）プライバシーポリシー

最終更新日: 2026-11-27

## 要約

Reprise（リプライズ）が受け取るのは、利用者が自分で送るフィードバックと、アプリの改善のための利用状況（どの機能を何回使ったか。設定でオフにできます）だけです。サーバーを持たず、音声の解析や学習記録はすべて端末内で処理します。フィードバックにも利用状況にも、メールアドレスや名前は含まれません。

通信するのは、利用者が「Podcast から追加」を使うときと、Podcast から作った教材を開いて新しいエピソードを確かめるとき、利用者が「新しいエピソードを自動で取り込む」をオンにした教材の新しい回をアプリを開いたときに取り込むとき、利用者がフィードバックを送ったり返信を見たりするとき、利用状況を送るとき（1 日に 1 回まで）だけです。Podcast の通信は Apple の検索サービスと番組の配信元へ直接行われ、開発者が内容を受け取ることはありません。フィードバックと利用状況は Apple の CloudKit を通して届きます（下記「フィードバック」「利用状況」）。

## 収集する情報

本アプリは、利用者を識別する情報、連絡先、位置情報を収集しません。広告や外部の解析ツールも組み込んでいません。

受け取るのは、利用者が「設定」→「フィードバック」から**自分で送った内容**（下記「フィードバック」）と、**利用状況**（下記「利用状況」）だけです。

## フィードバック

「設定」→「フィードバック」から、開発者へ不具合や要望を送れます。開発者からの返信も同じ画面に表示されます。

- 送られるのは、入力した本文、アプリのバージョン、iOS のバージョンです。**メールアドレス・名前・電話番号は送られません**
- 受け皿には Apple の CloudKit を使います。送るには端末で iCloud にサインインしている必要がありますが、開発者が受け取るのは Apple が付ける匿名の利用者 ID だけで、Apple ID やメールアドレスは開発者に伝わりません
- 送った内容を読めるのは、送った本人と開発者だけです
- 内容は不具合の調査とアプリの改善、返信のためだけに使います。削除を希望する場合は、フィードバックでその旨を送ってください

## 利用状況

アプリをよりよくするため、どの機能をどれくらい使ったかを、1 日に 1 回まとめて開発者へ送ります。「設定」→「利用状況を送る」でいつでもオフにでき、オフにすると、まだ送っていない記録も端末から消します。

- **送るもの**: 操作の種類と回数（例: 教材を取り込んだ・どこから取り込んだか、文を分割した、再生の速度を変えた、購入画面を開いた・どの機能から開いたか・購入したか）、選んだ設定の値、教材とブックマークの数、プランの種類（無料・無料体験・月額・年額）、アプリと iOS のバージョン、表示の言語と学習する言語、App Store の国、インストールした日、インストールごとのランダムな ID
- **送らないもの**: 教材やトラックの名前、文の本文、取り込んだ音声、録音した声、文字起こし、Podcast の番組名・検索語・URL、学習記録（学習時間・再生した文の数）、メールアドレス・名前・Apple ID、支払いの情報
- インストールごとのランダムな ID は、端末の数を数えるためだけに使います。Apple ID とは結び付かず、アプリを削除すると変わります
- 受け皿には Apple の CloudKit を使います。送るのは iCloud にサインインしているときだけで、開発者が受け取るのは Apple が付ける匿名の利用者 ID と上の内容だけです。送れなかった記録は端末に 14 日まで残し、それより古いものは消します
- 利用状況は集計してアプリの改善（どの機能が使われているか、どこで購入につながっているかを知ること）だけに使い、広告やトラッキングには使いません。送られた記録は 180 日で消します

## 端末内に保存される情報

次のものは、利用者の端末の中にだけ保存されます。アプリの外へ送信されることはありません。

- 取り込んだ音声ファイル（Podcast からダウンロードしたエピソード、アプリで録音した音声、文章から読み上げて作った音声を含む）
- 文章から読み上げて作った教材の本文
- 「伝わるかチェック」で録音した自分の声（文ごとに最新の 1 回）と、その書き起こし（回ごと）
- 音声認識で得られた文字起こしと、文ごとの時刻
- 学習記録（学習時間、再生した文の数。トラックごと・日ごとに記録）
- 再生設定（速度、リピートの方法、ポーズの長さなど）

これらはアプリを削除すると端末から消去されます。

学習記録の「共有」を利用者が自分で使ったときに限り、今日の学習（学習時間・再生回数・伝わるかチェックで完璧になった文の数）・連続日数・直近 7 日の日ごとの学習時間・これまでの累計を載せた画像（載せる項目は利用者が選べます）と、同じ内容の短い投稿文を、利用者が共有シートで選んだ共有先（他のアプリ）へ渡します。画像は端末内で作り、教材やトラックの名前、音声、文字起こしは含みません。アプリが自動で共有したり、当方へ送信したりすることはありません。「写真に保存」を使ったときは、その画像を端末の写真に追加します。このために写真への「追加のみ」の許可を求めますが、アプリが写真を読み取ることはありません。共有先での扱いは、その共有先のプライバシーポリシーに従います。

Podcast から作った教材については、番組の RSS フィードの URL、取り込んだエピソードの識別子、教材のアイコンにする番組の画像も端末内に保存します。どの番組を登録しているかの一覧が外部へ送られることはありませんが、各番組の RSS フィードの URL は、その番組の配信元へエピソードの一覧を取りに行く要求に使われます（下記「Podcast 機能の通信」）。

## 音声の扱い

文の自動分割には、Apple が提供する**端末内の音声認識**を使用します。音声データが Apple や当方のサーバーへ送信されることはありません。

ただし、認識に使う言語モデルが端末に未インストールの場合、Apple のシステム機能としてそのモデルのダウンロードが行われることがあります。このダウンロードは Apple のプライバシーポリシーに従って行われ、利用者の音声は含まれません。

「文章から作る」は、iOS に入っている**端末内の音声合成**で文章を読み上げます。文章が外部へ送信されることはありません。

## Podcast 機能の通信

「Podcast から追加」を使ったときと、Podcast から作った教材を開いたときに限り、次の通信を行います。いずれも当方のサーバーは経由しません。

| 通信先 | 送られるもの | いつ |
|---|---|---|
| Apple の検索サービス（iTunes Search API） | 入力した番組名、または Apple Podcasts のリンクに含まれる番組 ID と、端末の地域設定の国コード。「Podcast から追加」を開いたときは、アプリに書いてあるおすすめの番組の ID と国コード（その国のストアに無い番組は US）。利用者の入力ではありません | 番組を検索したとき、Apple Podcasts のリンクを貼り付けたとき、「Podcast から追加」を開いたとき（おすすめの番組の画像と配信元を調べるため） |
| Apple の画像配信サーバー | 番組のアートワーク画像の要求 | 検索結果とおすすめを表示したとき |
| 番組の配信元（RSS フィード・音声ファイル・番組やエピソードの画像を置いているサーバー） | 利用者が指定した、または検索で選んだ RSS フィード、エピソードの音声ファイル、番組とエピソードの画像の要求 | エピソードの一覧を開いたとき（一覧に出すエピソードの画像を含みます）、エピソードを試聴するとき（音声を受け取りながら再生し、端末には保存しません）、エピソードを取り込むとき、Podcast から作った教材を開いて新しいエピソードを確かめるとき、「新しいエピソードを自動で取り込む」をオンにした教材について、アプリを開いたとき・アプリに戻ったとき（30 分に 1 回まで。エピソードの取り込みは Wi‑Fi のときだけ）。番組の画像は教材のアイコンにするため、教材 1 冊につき 1 回だけ取得して端末に保存します |

- 通信には、他の通信と同じく端末の IP アドレスなどの通常の接続情報が含まれます。通信先での扱いは、Apple（<https://www.apple.com/legal/privacy/>）と各配信元のプライバシーポリシーに従います
- アカウント・ログイン・Cookie は使いません。通信の履歴や Cookie を端末に残さない設定で通信します
- 取り込んだ音声・文字起こし・学習記録が送信されることはありません
- 暗号化された通信（https）だけを使います


## 端末の機能へのアクセス

| 機能 | 用途 |
|---|---|
| 音声認識 | 取り込んだ音声を文単位に分割するため、および録音した自分の声を書き起こしてお手本と比べるため（端末内で処理） |
| ミュージックライブラリ | 利用者のライブラリにある DRM のない曲を教材として取り込むため |
| ファイル | 利用者が選んだ、または他のアプリから共有された音声・動画ファイルを取り込むため（動画は音声だけを取り出して保存します） |
| マイク | 利用者が「録音する」で録音した音声を教材として保存するため、および「伝わるかチェック」で自分の声を録音し、読んだ本文が正しく認識されるかを確かめるため。録音は利用者が始めたときだけ行い、端末内に保存します |
| 写真（追加のみ） | 学習記録の共有で「写真に保存」を押したときに、作った画像を写真に追加するため。写真を読み取ることはありません |
| ネットワーク | Podcast の番組を検索し、RSS フィードとエピソードをダウンロードするため（上記「Podcast 機能の通信」）、フィードバックを送り、返信を受け取るため（上記「フィードバック」）、および利用状況を送るため（上記「利用状況」） |

いずれも、取り込みと解析のためにのみ使用します。端末から読み取った内容（音声・曲・ファイル・写真）を外部へ送信することはありません。

## Reprise Premium（定期購読）

Reprise Premium の購入・更新・解約は、Apple の App Store がすべて処理します。本アプリは購読しているかどうかを端末内で Apple に確かめるだけで、支払いの情報を開発者が受け取ることはありません。「利用状況を送る」がオンのときは、プランの種類と、購入画面から購入したか（どの機能から開いた購入画面か、無料体験を始めたか）を利用状況に含めます（上記「利用状況」）。

## 第三者への提供

**ありません。** 本アプリは利用者の情報を第三者へ提供しません。Podcast 機能では上記のとおり Apple の検索サービスと番組の配信元へ直接通信しますが、これは利用者が指定した番組を取得するためのものです。フィードバックと利用状況は Apple の CloudKit に保存されます。広告・トラッキングのための通信や、外部の解析サービスへの通信は行いません。

## 著作権について

利用者が取り込む音声ファイルと Podcast のエピソードの権利は、利用者または原権利者に帰属します。本アプリは取り込まれた内容に関与しません。Podcast は番組ごとの利用条件に従い、個人の学習の範囲でご利用ください。

## 子どものプライバシー

本アプリは年齢を問わず、利用者を識別する情報を収集しません。利用状況（上記）は年齢を問わず同じ内容で、設定でオフにできます。

## 本ポリシーの変更

変更する場合は、このページを更新し、最終更新日を改めます。

## お問い合わせ

reprise.app.support@gmail.com

---

# Reprise Privacy Policy

Last updated: 2026-11-27

## Summary

Reprise receives only feedback you choose to send and usage data that helps improve the app (which features you use and how often; you can turn this off in Settings). It has no server; audio analysis and study records are processed entirely on the device. Neither feedback nor usage data includes your email address or name.

The app communicates over the network only when you use "Add from Podcasts", open study material created from a podcast to check for new episodes, or, for podcast material where you turned on automatic import of new episodes, when you open or return to the app, when you send feedback or read replies, and when it sends usage data (at most once a day). Podcast traffic goes directly to Apple's search service and to the podcast's publisher, and we never receive any of it. Feedback and usage data reach us through Apple's CloudKit (see "Feedback" and "Usage data").

## Information we collect

The app does not collect identifiers, contact information, or location. It contains no advertising and no third-party analytics.

We receive only what you choose to send from Settings → Feedback (see "Feedback") and usage data (see "Usage data").

## Feedback

You can send bug reports and requests from Settings → Feedback, and read replies from the developer on the same screen.

- What is sent: the text you write, the app version, and the iOS version. **No email address, name, or phone number is sent**
- Feedback is stored with Apple's CloudKit. Sending requires being signed in to iCloud, but the developer only receives an anonymous user ID assigned by Apple, never your Apple ID or email address
- Only you and the developer can read what you sent
- It is used only to investigate issues, improve the app, and reply. To have it deleted, send a request through Feedback

## Usage data

To improve the app, it sends once a day which features you used and how often. You can turn this off at any time in Settings → Share Usage Data; turning it off also deletes data on the device that hasn't been sent yet.

- **What is sent**: types of actions and their counts (for example: importing material and where it came from, splitting sentences, changing the playback speed, opening the subscription screen, which feature opened it, and whether you purchased), the values of settings you choose, the number of study materials and bookmarks, your plan type (free, free trial, monthly or yearly), the app and iOS versions, the display and learning languages, the App Store country, the day you installed the app, and a random per-install ID
- **What is never sent**: names of study materials or tracks, sentence text, imported audio, your recorded voice, transcripts, podcast show names, search terms or URLs, study records (study time and sentences played), your email address, name or Apple ID, and payment information
- The random per-install ID is used only to count devices. It is not linked to your Apple ID and changes when you delete the app
- Usage data is stored with Apple's CloudKit. It is sent only while you are signed in to iCloud, and the developer receives only an anonymous user ID assigned by Apple together with the data above. Data that could not be sent is kept on the device for up to 14 days and then deleted
- Usage data is used only in aggregate to improve the app (to learn which features are used and what leads to purchases), never for advertising or tracking. Records we receive are deleted after 180 days

## Information stored on your device

The following is stored only on your device and never leaves it:

- Audio files you import (including podcast episodes you download, audio you record in the app, and audio created by reading text aloud)
- The text of study material created by reading text aloud
- Your own voice recorded in Clarity Check (the latest take for each sentence) and its transcriptions (one for each take)
- Transcripts and per-sentence timings produced by speech recognition
- Study records (listening time and sentences played, recorded per track and per day)
- Playback settings

All of this is removed when you delete the app.

Only when you choose to use Share in the study log, an image showing today's study (time, plays and sentences that became perfect in Clarity Check), your streak, your daily study time for the last 7 days and your lifetime totals (you choose which items appear), together with a short post text containing the same figures, is handed to the destination (another app) you pick in the share sheet. The image is created on your device and contains no material or track names, audio or transcripts. The app never shares anything automatically and never sends it to us. When you use Save to Photos, the image is added to your photo library; this asks for add-only access, and the app never reads your photos. Handling by the destination follows that destination's privacy policy.

For study material created from a podcast, the app also stores the show's RSS feed URL, the identifiers of the episodes you imported, and the show artwork used as the material's icon. Your list of shows is never sent anywhere, but each show's RSS feed URL is used in the request that fetches its episode list from that show's publisher (see "Network use by the podcast feature").

## Handling of audio

Sentence segmentation uses Apple's **on-device speech recognition**. Your audio is never sent to Apple's servers or to us.

If the language model required for recognition is not yet installed, iOS may download it as a system function. That download follows Apple's privacy policy and does not include your audio.

"Create from text" uses the **on-device speech synthesis** built into iOS. Your text is never sent anywhere.

## Network use by the podcast feature

Only when you use "Add from Podcasts", or open study material created from a podcast, the app makes the following requests. None of them go through our servers.

| Destination | What is sent | When |
|---|---|---|
| Apple's search service (iTunes Search API) | The show name you typed, or the show ID contained in an Apple Podcasts link, plus the country code of your region setting. When you open "Add from Podcasts", the IDs of the recommended shows built into the app and a country code (US for shows not in your country's store); not anything you typed | When you search, paste an Apple Podcasts link, or open "Add from Podcasts" (to look up artwork and publishers of the recommended shows) |
| Apple's image servers | Requests for show artwork | When search results and recommendations are shown |
| The podcast's publisher (the servers hosting the RSS feed, audio, and show or episode artwork) | Requests for the RSS feed, episode audio, and show and episode artwork you chose | When you open an episode list (including the episode artwork shown in the list), preview an episode (the audio is streamed and not stored on the device), import episodes, open podcast material to check for new episodes, or open or return to the app for podcast material with automatic import turned on (at most once every 30 minutes; episodes are downloaded only over Wi‑Fi). Show artwork is fetched once per study material and stored on the device as its icon |

- Like any network request, these include ordinary connection information such as your IP address. Their handling is governed by the privacy policies of Apple (<https://www.apple.com/legal/privacy/>) and of each publisher
- No account, sign-in, or cookies are used. Requests are made without keeping cookies or a cache on the device
- Imported audio, transcripts, and study records are never transmitted
- Only encrypted connections (https) are used


## Device access

| Capability | Purpose |
|---|---|
| Speech recognition | To split imported audio into sentences, and to transcribe your own recorded voice to compare it with the original (processed on the device) |
| Music library | To import DRM-free songs from your library as study material |
| Files | To import audio or video files you select or share from other apps (only the audio of a video is kept) |
| Microphone | To save audio you record with "Record" as study material, and to record your own voice in "Clarity Check" so you can see whether the sentence you read is recognized correctly. Recording happens only when you start it, and recordings stay on the device |
| Photos (add only) | To add the study-log image to your photo library when you tap Save to Photos. The app never reads your photos |
| Network | To search for podcasts and download their RSS feeds and episodes (see "Network use by the podcast feature"), to send feedback and receive replies (see "Feedback"), and to send usage data (see "Usage data") |

Used only for importing and analysis. Nothing read from your device (audio, songs, files or photos) is transmitted anywhere.

## Reprise Premium (subscription)

Purchases, renewals, and cancellations of Reprise Premium are handled entirely by Apple's App Store. The app only checks with Apple, on the device, whether you are subscribed; we never receive your payment details. While Share Usage Data is on, usage data includes your plan type and whether you purchased from the subscription screen (which feature opened it and whether you started a free trial) (see "Usage data").

## Third parties

**None.** The app does not share your information with third parties. The podcast feature talks directly to Apple's search service and to publishers as described above, solely to fetch the shows you choose. Feedback and usage data are stored with Apple's CloudKit. There is no advertising or tracking traffic, and nothing is sent to third-party analytics services.

## Copyright

Rights to the audio and podcast episodes you import belong to you or the original rights holder. Please follow each show's terms and use podcasts for personal study.

## Children's privacy

The app collects no identifying information from users of any age. Usage data (above) is the same for all ages and can be turned off in Settings.

## Changes

If this policy changes, this page will be updated along with the date above.

## Contact

reprise.app.support@gmail.com
