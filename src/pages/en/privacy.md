---
layout: ../../layouts/DocLayout.astro
lang: en
title: Privacy Policy
description: Privacy policy for Reprise. Your audio, transcripts and study log stay on your device and are never sent to a server.
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
