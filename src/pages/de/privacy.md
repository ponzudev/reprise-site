---
layout: ../../layouts/DocLayout.astro
lang: de
title: Datenschutzerklärung
description: "Datenschutzerklärung von Reprise: Audio, Transkripte und Lernprotokoll werden nur auf deinem Gerät gespeichert und nicht an einen Server gesendet."
---

# Reprise Datenschutzerklärung

Zuletzt aktualisiert: 2026-11-20

## Zusammenfassung

Abgesehen von Feedback, das du selbst sendest, erhebt Reprise keine Informationen über dich. Reprise hat keinen Server; die Analyse des Audios und das Lernprotokoll werden vollständig auf dem Gerät verarbeitet. Auch Feedback enthält weder deine E-Mail-Adresse noch deinen Namen.

Die App kommuniziert nur dann über das Netzwerk, wenn du „Aus Podcasts“ verwendest, wenn du ein aus einem Podcast erstelltes Material öffnest und nach neuen Episoden gesucht wird, wenn bei einem Material, für das du „Neue Episoden autom. importieren“ eingeschaltet hast, beim Öffnen der App neue Episoden importiert werden, und wenn du Feedback sendest oder Antworten liest. Die Podcast-Kommunikation läuft direkt zu Apples Suchdienst und zum Anbieter der Sendung; der Entwickler erhält keine Inhalte davon. Feedback erreicht uns über Apples CloudKit (siehe unten „Feedback“).

## Erhobene Informationen

Die App erhebt keine Informationen, die dich identifizieren, keine Kontaktdaten, keine Standortdaten und keine Nutzungsdaten. Sie enthält weder Analysewerkzeuge noch Werbung.

Wir erhalten **nur das, was du selbst** über „Einstellungen“ → „Feedback“ sendest (siehe unten „Feedback“).

## Feedback

Über „Einstellungen“ → „Feedback“ kannst du dem Entwickler Fehler und Wünsche senden. Antworten des Entwicklers erscheinen auf demselben Bildschirm.

- Gesendet werden der von dir eingegebene Text, die App-Version und die iOS-Version. **E-Mail-Adresse, Name und Telefonnummer werden nicht gesendet**
- Gespeichert wird das Feedback mit Apples CloudKit. Zum Senden musst du auf dem Gerät bei iCloud angemeldet sein, der Entwickler erhält aber nur eine anonyme Nutzer-ID, die Apple vergibt. Deine Apple-ID und deine E-Mail-Adresse erfährt der Entwickler nicht
- Lesen können das Gesendete nur du und der Entwickler
- Der Inhalt wird ausschließlich zur Untersuchung von Fehlern, zur Verbesserung der App und für Antworten verwendet. Wenn du die Löschung wünschst, teile uns das über „Feedback“ mit

## Auf dem Gerät gespeicherte Informationen

Folgendes wird ausschließlich auf deinem Gerät gespeichert und nie aus der App heraus gesendet:

- Importierte Audiodateien (einschließlich aus Podcasts geladener Episoden, in der App aufgenommenen Audios und aus Text vorgelesenen Audios)
- Der Text von Material, das aus vorgelesenem Text erstellt wurde
- Deine im „Klarheits-Check“ aufgenommene Stimme (pro Satz die neueste Aufnahme) und deren Transkription (für jeden Versuch)
- Die durch die Spracherkennung erzeugten Transkripte und die Zeitpunkte jedes Satzes
- Das Lernprotokoll (Lernzeit und Anzahl der abgespielten Sätze, erfasst pro Track und pro Tag)
- Wiedergabeeinstellungen (Tempo, Art der Wiederholung, Pausenlänge usw.)

Diese Daten werden vom Gerät entfernt, wenn du die App löschst.

Nur wenn du im Lernprotokoll selbst die Funktion zum Teilen verwendest, übergibt die App ein Bild mit deinem heutigen Lernen (Lernzeit, Wiedergaben und Anzahl der im Klarheits-Check perfekt gewordenen Sätze), deiner Serie, deiner täglichen Lernzeit der letzten 7 Tage und deinen bisherigen Gesamtwerten (welche Angaben erscheinen, wählst du selbst) sowie einen kurzen Beitragstext mit denselben Angaben an das Ziel (eine andere App), das du im Teilen-Menü auswählst. Das Bild wird auf dem Gerät erstellt und enthält keine Namen von Materialien oder Tracks, kein Audio und keine Transkripte. Die App teilt nichts automatisch und sendet nichts an uns. Wenn du „In ‚Fotos‘ sichern“ verwendest, wird das Bild zu den Fotos auf deinem Gerät hinzugefügt. Dafür fragt die App nach der Erlaubnis „Nur hinzufügen“ für Fotos; die App liest deine Fotos nie. Für den Umgang mit den Daten beim Ziel gilt dessen Datenschutzerklärung.

Bei Material, das aus einem Podcast erstellt wurde, speichert die App außerdem die URL des RSS-Feeds der Sendung, die Kennungen der importierten Episoden und das Bild der Sendung, das als Symbol des Materials dient, auf dem Gerät. Die Liste der Sendungen, die du hinzugefügt hast, wird nicht nach außen gesendet; die URL des RSS-Feeds jeder Sendung wird jedoch für die Anfrage verwendet, mit der die Episodenliste beim Anbieter dieser Sendung abgerufen wird (siehe unten „Kommunikation der Podcast-Funktion“).

## Umgang mit Audio

Für die automatische Teilung in Sätze wird Apples **Spracherkennung auf dem Gerät** verwendet. Audiodaten werden weder an Apple noch an unsere Server gesendet.

Ist das für die Erkennung verwendete Sprachmodell noch nicht auf dem Gerät installiert, kann es als Systemfunktion von Apple heruntergeladen werden. Dieser Download erfolgt gemäß Apples Datenschutzrichtlinie und enthält kein Audio von dir.

„Aus Text erstellen“ liest Text mit der in iOS integrierten **Sprachausgabe auf dem Gerät** vor. Der Text wird nicht nach außen gesendet.

## Kommunikation der Podcast-Funktion

Nur wenn du „Aus Podcasts“ verwendest oder ein aus einem Podcast erstelltes Material öffnest, finden die folgenden Verbindungen statt. Keine davon läuft über unsere Server.

| Ziel | Was gesendet wird | Wann |
|---|---|---|
| Apples Suchdienst (iTunes Search API) | Der eingegebene Name der Sendung oder die in einem Apple Podcasts-Link enthaltene ID der Sendung sowie der Ländercode deiner Regionseinstellung. Beim Öffnen von „Aus Podcasts“ die in der App hinterlegten IDs der empfohlenen Sendungen und ein Ländercode (US für Sendungen, die es im Store deines Landes nicht gibt); keine Eingaben von dir | Wenn du nach einer Sendung suchst, einen Apple Podcasts-Link einfügst oder „Aus Podcasts“ öffnest (um Bilder und Anbieter der empfohlenen Sendungen abzurufen) |
| Apples Bildserver | Anfragen nach dem Artwork der Sendung | Wenn Suchergebnisse und Empfehlungen angezeigt werden |
| Anbieter der Sendung (Server, auf denen RSS-Feed, Audiodateien und Bilder der Sendung bzw. der Episoden liegen) | Anfragen nach dem von dir angegebenen oder in der Suche ausgewählten RSS-Feed, nach den Audiodateien der Episoden und nach den Bildern der Sendung und der Episoden | Wenn du eine Episodenliste öffnest (einschließlich der Bilder der darin angezeigten Episoden), in eine Episode reinhörst (das Audio wird beim Empfang abgespielt und nicht auf dem Gerät gespeichert), Episoden importierst, ein aus einem Podcast erstelltes Material öffnest und nach neuen Episoden gesucht wird, sowie bei Material mit eingeschaltetem „Neue Episoden autom. importieren“, wenn du die App öffnest oder zu ihr zurückkehrst (höchstens einmal alle 30 Minuten; Episoden werden nur über WLAN importiert). Das Bild der Sendung wird als Symbol des Materials pro Material nur einmal abgerufen und auf dem Gerät gespeichert |

- Wie jede andere Verbindung enthalten diese Verbindungen übliche Verbindungsdaten wie die IP-Adresse deines Geräts. Für den Umgang damit beim Ziel gelten die Datenschutzrichtlinien von Apple (<https://www.apple.com/legal/privacy/>) und des jeweiligen Anbieters
- Es werden weder Konto noch Anmeldung noch Cookies verwendet. Die Verbindungen werden so hergestellt, dass weder Verlauf noch Cookies auf dem Gerät gespeichert werden
- Importiertes Audio, Transkripte und das Lernprotokoll werden nie gesendet
- Es werden nur verschlüsselte Verbindungen (https) verwendet


## Zugriff auf Gerätefunktionen

| Funktion | Zweck |
|---|---|
| Spracherkennung | Um importiertes Audio in Sätze zu teilen und um deine aufgenommene Stimme zu transkribieren und mit der Vorlage zu vergleichen (Verarbeitung auf dem Gerät) |
| Musikmediathek | Um Songs ohne DRM aus deiner Mediathek als Material zu importieren |
| Dateien | Um Audio- oder Videodateien zu importieren, die du auswählst oder aus anderen Apps teilst (bei Videos wird nur das Audio gespeichert) |
| Mikrofon | Um Audio, das du mit „Aufnehmen“ aufnimmst, als Material zu speichern, und um im „Klarheits-Check“ deine Stimme aufzunehmen und zu prüfen, ob der gelesene Text richtig erkannt wird. Aufgenommen wird nur, wenn du die Aufnahme startest; die Aufnahmen werden auf dem Gerät gespeichert |
| Fotos (nur hinzufügen) | Um das erstellte Bild zu deinen Fotos hinzuzufügen, wenn du beim Teilen des Lernprotokolls auf „In ‚Fotos‘ sichern“ tippst. Die App liest deine Fotos nie |
| Netzwerk | Um Podcast-Sendungen zu suchen und RSS-Feeds und Episoden zu laden (siehe oben „Kommunikation der Podcast-Funktion“) sowie um Feedback zu senden und Antworten zu empfangen (siehe oben „Feedback“) |

Alle Zugriffe dienen ausschließlich dem Import und der Analyse. Vom Gerät gelesene Inhalte werden nicht nach außen gesendet.

## Reprise Premium (Abo)

Kauf, Verlängerung und Kündigung von Reprise Premium werden vollständig über Apples App Store abgewickelt. Die App prüft lediglich auf dem Gerät bei Apple, ob du ein Abo hast; Zahlungsinformationen oder deinen Kaufverlauf erhält der Entwickler nicht.

## Weitergabe an Dritte

**Keine.** Die App gibt keine Informationen über dich an Dritte weiter. Die Podcast-Funktion kommuniziert wie oben beschrieben direkt mit Apples Suchdienst und den Anbietern der Sendungen, aber nur, um die von dir gewählten Sendungen abzurufen. Feedback wird in Apples CloudKit gespeichert. Es gibt keine Kommunikation für Werbung, Analyse oder Tracking.

## Urheberrecht

Die Rechte an den von dir importierten Audiodateien und Podcast-Episoden liegen bei dir oder bei den ursprünglichen Rechteinhabern. Die App hat keinen Einfluss auf die importierten Inhalte. Bitte beachte bei Podcasts die Nutzungsbedingungen der jeweiligen Sendung und nutze sie nur für dein persönliches Lernen.

## Datenschutz für Kinder

Die App erhebt unabhängig vom Alter keine Informationen.

## Änderungen dieser Datenschutzerklärung

Bei Änderungen aktualisieren wir diese Seite und das Datum der letzten Aktualisierung.

## Kontakt

reprise.app.support@gmail.com
