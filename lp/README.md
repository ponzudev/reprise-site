# Reprise landing page

Mobile-first Japanese landing page; plain HTML, CSS and JavaScript, with no build step or external runtime dependencies.

```sh
cd /workspace/ShadowPlayer
python3 -m http.server 4173 --directory landing
```

Publish the contents of this directory at `/lp/` on the existing `ponzudev/reprise-site` GitHub Pages site. Relative asset URLs support subdirectory hosting. Existing privacy-policy and support URLs are used in the footer.

The interactive demo plays the first three sentences of the app's bundled Japanese tutorial recording. Sentence playback, 2-second repeat pauses, pause/resume, previous/next sentence, 0.8x/1x/1.2x speed and text hiding are supported. It stops when the page is hidden. Audio starts only on user interaction. This is a sample player, not a browser implementation of transcription.

Screenshots supplied by the owner are optimized as WebP. Pricing and limits are based on the app repository; the purchase screen remains authoritative for current prices and trial eligibility.
