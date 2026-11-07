---
title: プライバシーポリシー
---

# Reprise（リプライズ）プライバシーポリシー

最終更新日: 2026-11-05

## 要約

Reprise（リプライズ）は、利用者の情報を一切収集しません。サーバーを持たず、音声の解析や学習記録はすべて端末内で処理します。

通信するのは、利用者が「Podcast から追加」を使うときと、Podcast から作った教材を開いて新しいエピソードを確かめるときだけです。その通信は Apple の検索サービスと番組の配信元へ直接行われ、開発者が内容を受け取ることはありません。

## 収集する情報

**ありません。** 本アプリは、利用者を識別する情報、連絡先、位置情報、利用状況のいずれも収集しません。解析ツールや広告も組み込んでいません。

## 端末内に保存される情報

次のものは、利用者の端末の中にだけ保存されます。アプリの外へ送信されることはありません。

- 取り込んだ音声ファイル（Podcast からダウンロードしたエピソードを含む）
- 音声認識で得られた文字起こしと、文ごとの時刻
- 学習記録（学習時間、再生した文の数、習得済みにした文）
- 再生設定（速度、リピートの方法、ポーズの長さなど）

これらはアプリを削除すると端末から消去されます。

Podcast から作った教材については、番組の RSS フィードの URL と取り込んだエピソードの識別子も端末内に保存します。どの番組を登録しているかの一覧が外部へ送られることはありませんが、各番組の RSS フィードの URL は、その番組の配信元へエピソードの一覧を取りに行く要求に使われます（下記「Podcast 機能の通信」）。

## 音声の扱い

文の自動分割には、Apple が提供する**端末内の音声認識**を使用します。音声データが Apple や当方のサーバーへ送信されることはありません。

ただし、認識に使う言語モデルが端末に未インストールの場合、Apple のシステム機能としてそのモデルのダウンロードが行われることがあります。このダウンロードは Apple のプライバシーポリシーに従って行われ、利用者の音声は含まれません。

## Podcast 機能の通信

「Podcast から追加」を使ったときと、Podcast から作った教材を開いたときに限り、次の通信を行います。いずれも当方のサーバーは経由しません。

| 通信先 | 送られるもの | いつ |
|---|---|---|
| Apple の検索サービス（iTunes Search API） | 入力した番組名、または Apple Podcasts のリンクに含まれる番組 ID と、端末の地域設定の国コード | 番組を検索したとき、Apple Podcasts のリンクを貼り付けたとき |
| Apple の画像配信サーバー | 番組のアートワーク画像の要求 | 検索結果を表示したとき |
| 番組の配信元（RSS フィード・音声ファイルを置いているサーバー） | 利用者が指定した、または検索で選んだ RSS フィードとエピソードの音声ファイルの要求 | エピソードの一覧を開いたとき、エピソードを取り込むとき、Podcast から作った教材を開いて新しいエピソードを確かめるとき |

- 通信には、他の通信と同じく端末の IP アドレスなどの通常の接続情報が含まれます。通信先での扱いは、Apple（<https://www.apple.com/legal/privacy/>）と各配信元のプライバシーポリシーに従います
- アカウント・ログイン・Cookie は使いません。通信の履歴や Cookie を端末に残さない設定で通信します
- 取り込んだ音声・文字起こし・学習記録が送信されることはありません
- 暗号化された通信（https）だけを使います


## 端末の機能へのアクセス

| 機能 | 用途 |
|---|---|
| 音声認識 | 取り込んだ音声を文単位に分割するため |
| ミュージックライブラリ | 利用者のライブラリにある DRM のない曲を教材として取り込むため |
| ファイル | 利用者が選んだ音声ファイルを取り込むため |
| ネットワーク | Podcast の番組を検索し、RSS フィードとエピソードをダウンロードするため（上記「Podcast 機能の通信」） |

いずれも、取り込みと解析のためにのみ使用します。端末から読み取った内容を外部へ送信することはありません。

## 第三者への提供

**ありません。** 本アプリは利用者の情報を第三者へ提供しません。Podcast 機能では上記のとおり Apple の検索サービスと番組の配信元へ直接通信しますが、これは利用者が指定した番組を取得するためのものです。広告・解析・トラッキングのための通信は行いません。

## 著作権について

利用者が取り込む音声ファイルと Podcast のエピソードの権利は、利用者または原権利者に帰属します。本アプリは取り込まれた内容に関与しません。Podcast は番組ごとの利用条件に従い、個人の学習の範囲でご利用ください。

## 子どものプライバシー

本アプリは年齢を問わず情報を収集しません。

## 本ポリシーの変更

変更する場合は、このページを更新し、最終更新日を改めます。

## お問い合わせ

reprise.app.support@gmail.com

---

# Reprise Privacy Policy

Last updated: 2026-11-05

## Summary

Reprise collects no information. It has no server; audio analysis and study records are processed entirely on the device.

The app communicates over the network only when you use "Add from Podcast", or open study material created from a podcast to check for new episodes. That traffic goes directly to Apple's search service and to the podcast's publisher, and we never receive any of it.

## Information we collect

**None.** The app does not collect identifiers, contact information, location, or usage data. It contains no analytics and no advertising.

## Information stored on your device

The following is stored only on your device and never leaves it:

- Audio files you import (including podcast episodes you download)
- Transcripts and per-sentence timings produced by speech recognition
- Study records (listening time, sentences played, sentences marked as learned)
- Playback settings

All of this is removed when you delete the app.

For study material created from a podcast, the app also stores the show's RSS feed URL and the identifiers of the episodes you imported. Your list of shows is never sent anywhere, but each show's RSS feed URL is used in the request that fetches its episode list from that show's publisher (see "Network use by the podcast feature").

## Handling of audio

Sentence segmentation uses Apple's **on-device speech recognition**. Your audio is never sent to Apple's servers or to us.

If the language model required for recognition is not yet installed, iOS may download it as a system function. That download follows Apple's privacy policy and does not include your audio.

## Network use by the podcast feature

Only when you use "Add from Podcast", or open study material created from a podcast, the app makes the following requests. None of them go through our servers.

| Destination | What is sent | When |
|---|---|---|
| Apple's search service (iTunes Search API) | The show name you typed, or the show ID contained in an Apple Podcasts link, plus the country code of your region setting | When you search, or paste an Apple Podcasts link |
| Apple's image servers | Requests for show artwork | When search results are shown |
| The podcast's publisher (the servers hosting the RSS feed and audio) | Requests for the RSS feed and episode audio you chose | When you open an episode list, import episodes, or open podcast material to check for new episodes |

- Like any network request, these include ordinary connection information such as your IP address. Their handling is governed by the privacy policies of Apple (<https://www.apple.com/legal/privacy/>) and of each publisher
- No account, sign-in, or cookies are used. Requests are made without keeping cookies or a cache on the device
- Imported audio, transcripts, and study records are never transmitted
- Only encrypted connections (https) are used


## Device access

| Capability | Purpose |
|---|---|
| Speech recognition | To split imported audio into sentences |
| Music library | To import DRM-free songs from your library as study material |
| Files | To import audio files you select |
| Network | To search for podcasts and download their RSS feeds and episodes (see "Network use by the podcast feature") |

Used only for importing and analysis. Nothing read from your device is transmitted anywhere.

## Third parties

**None.** The app does not share your information with third parties. The podcast feature talks directly to Apple's search service and to publishers as described above, solely to fetch the shows you choose. There is no advertising, analytics, or tracking traffic.

## Copyright

Rights to the audio and podcast episodes you import belong to you or the original rights holder. Please follow each show's terms and use podcasts for personal study.

## Children's privacy

The app collects no information from users of any age.

## Changes

If this policy changes, this page will be updated along with the date above.

## Contact

reprise.app.support@gmail.com
