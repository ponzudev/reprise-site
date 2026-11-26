---
layout: ../../layouts/DocLayout.astro
lang: sv
title: Integritetspolicy
description: Integritetspolicy för Reprise. Ljud, transkriptioner och studieloggar sparas bara på din enhet och skickas aldrig till någon server.
---

# Integritetspolicy för Reprise

Senast uppdaterad: 2026-11-27

## Sammanfattning

Reprise tar bara emot feedback som du själv väljer att skicka och användningsdata som hjälper oss att förbättra appen (vilka funktioner du använder och hur ofta; du kan stänga av detta i ”Inställningar”). Appen har ingen server, och analys av ljud och studieloggar sker helt på enheten. Varken feedback eller användningsdata innehåller e-postadress eller namn.

Appen kommunicerar över nätverket bara när du använder ”Från Podcaster”, när du öppnar ett material som skapats från en podcast för att kontrollera om det finns nya avsnitt, när nya avsnitt hämtas då du öppnar appen för material där du har slagit på ”Importera nya avsnitt automatiskt”, när du skickar feedback eller läser svar, och när appen skickar användningsdata (högst en gång per dag). Podcasttrafiken går direkt till Apples söktjänst och till programmets utgivare, och utvecklaren tar aldrig emot innehållet. Feedback och användningsdata når oss via Apples CloudKit (se ”Feedback” och ”Användningsdata” nedan).

## Uppgifter som samlas in

Appen samlar inte in uppgifter som identifierar användaren, kontaktuppgifter eller platsuppgifter. Den innehåller ingen reklam och inga analysverktyg från tredje part.

Vi tar bara emot det **du själv skickar** från ”Inställningar” → ”Feedback” (se ”Feedback” nedan) och användningsdata (se ”Användningsdata” nedan).

## Feedback

Från ”Inställningar” → ”Feedback” kan du skicka felrapporter och önskemål till utvecklaren. Svar från utvecklaren visas på samma skärm.

- Det som skickas är texten du skriver, appens version och iOS-versionen. **Ingen e-postadress, inget namn och inget telefonnummer skickas**
- Feedback tas emot via Apples CloudKit. För att skicka måste du vara inloggad på iCloud på enheten, men utvecklaren får bara ett anonymt användar-ID som Apple tilldelar, aldrig ditt Apple‑ID eller din e-postadress
- Bara du som skickade och utvecklaren kan läsa det du har skickat
- Innehållet används bara för att utreda fel, förbättra appen och svara dig. Om du vill att det raderas skickar du en begäran om det via Feedback

## Användningsdata

För att förbättra appen skickas en gång per dag vilka funktioner du har använt och hur ofta. Du kan när som helst stänga av detta i ”Inställningar” → ”Skicka användningsdata”; när du stänger av det raderas också data på enheten som ännu inte har skickats.

- **Det som skickas**: typer av åtgärder och hur många gånger de har utförts (till exempel import av material och varifrån det kom, uppdelning i meningar, ändring av uppspelningshastigheten, öppning av prenumerationsskärmen, vilken funktion som öppnade den och om du köpte), värdena för inställningar som du väljer, antalet studiematerial och bokmärken, din plantyp (gratis, gratis provperiod, månadsvis eller årsvis), app- och iOS-versionen, visningsspråket och studiespråket, App Store-landet, dagen då du installerade appen och ett slumpmässigt ID per installation
- **Det som aldrig skickas**: namn på studiematerial eller spår, meningarnas text, importerat ljud, din inspelade röst, transkriptioner, namn på podcastprogram, söktermer eller URL:er, studieloggar (studietid och antal uppspelade meningar), din e-postadress, ditt namn eller ditt Apple‑ID och betalningsuppgifter
- Det slumpmässiga ID:t per installation används bara för att räkna enheter. Det är inte kopplat till ditt Apple‑ID och ändras när du raderar appen
- Användningsdata lagras i Apples CloudKit. Den skickas bara när du är inloggad på iCloud, och utvecklaren får bara ett anonymt användar-ID som Apple tilldelar tillsammans med uppgifterna ovan. Data som inte kunde skickas sparas på enheten i högst 14 dagar och raderas sedan
- Användningsdata används bara i sammanställd form för att förbättra appen (för att se vilka funktioner som används och vad som leder till köp), aldrig för reklam eller spårning. Poster som vi tar emot raderas efter 180 dagar

## Uppgifter som sparas på enheten

Följande sparas bara på din enhet och skickas aldrig ut ur appen:

- Ljudfiler som du importerar (inklusive podcastavsnitt som du hämtar, ljud som du spelar in i appen och ljud som skapats genom att text läses upp)
- Texten i material som skapats genom att text läses upp
- Din egen röst inspelad i ”Tydlighetskoll” (den senaste inspelningen för varje mening) och dess transkriptioner (en för varje omgång)
- Transkriptioner från taligenkänningen och tidpunkterna för varje mening
- Studieloggar (studietid och antal uppspelade meningar, registrerade per spår och per dag)
- Uppspelningsinställningar (hastighet, sätt att upprepa, pauslängd m.m.)

Allt detta raderas från enheten när du raderar appen.

Endast när du själv använder delning i studieloggen lämnas en bild med dagens studier (studietid, antal uppspelningar och antal meningar som blev perfekta i Tydlighetskoll), din svit, din studietid per dag de senaste 7 dagarna och dina totaler hittills (du väljer själv vilka uppgifter som visas), tillsammans med en kort inläggstext med samma innehåll, över till den mottagare (en annan app) som du väljer i delningsmenyn. Bilden skapas på enheten och innehåller inga namn på material eller spår, inget ljud och inga transkriptioner. Appen delar aldrig något automatiskt och skickar aldrig något till oss. När du använder ”Spara i Bilder” läggs bilden till i Bilder på enheten. För detta ber appen om behörigheten ”Endast lägga till”, men appen läser aldrig dina bilder. Hur mottagaren hanterar uppgifterna styrs av mottagarens integritetspolicy.

För material som skapats från en podcast sparas också programmets RSS-flödes-URL, identifierarna för de avsnitt du har importerat och programbilden som används som materialets ikon på enheten. Listan över vilka program du har lagt till skickas aldrig ut, men varje programs RSS-flödes-URL används i den begäran som hämtar avsnittslistan från programmets utgivare (se ”Nätverkstrafik från podcastfunktionen” nedan).

## Hantering av ljud

För den automatiska uppdelningen i meningar används Apples **taligenkänning på enheten**. Ljuddata skickas aldrig till Apples eller våra servrar.

Om språkmodellen som behövs för igenkänningen ännu inte är installerad på enheten kan den dock hämtas som en systemfunktion i iOS. Den hämtningen sker enligt Apples integritetspolicy och innehåller inte ditt ljud.

”Skapa från text” läser upp texten med **talsyntesen på enheten** som är inbyggd i iOS. Texten skickas aldrig ut.

## Nätverkstrafik från podcastfunktionen

Endast när du använder ”Från Podcaster” och när du öppnar ett material som skapats från en podcast görs följande förfrågningar. Ingen av dem går via våra servrar.

| Mottagare | Vad som skickas | När |
|---|---|---|
| Apples söktjänst (iTunes Search API) | Programnamnet du skrev in, eller program-ID:t i en Apple Podcasts-länk, samt landskoden från enhetens regioninställning. När du öppnar ”Från Podcaster”: ID:n för de rekommenderade program som finns angivna i appen och en landskod (US för program som inte finns i ditt lands butik), alltså inget som du har skrivit in | När du söker efter ett program, klistrar in en Apple Podcasts-länk eller öppnar ”Från Podcaster” (för att slå upp bilder och utgivare för de rekommenderade programmen) |
| Apples bildservrar | Förfrågningar om programmens omslagsbilder | När sökresultat och rekommendationer visas |
| Programmets utgivare (servrarna som har RSS-flödet, ljudfilerna och bilderna för program och avsnitt) | Förfrågningar om det RSS-flöde du angav eller valde i sökningen, avsnittens ljudfiler och bilder för program och avsnitt | När du öppnar en avsnittslista (inklusive avsnittsbilderna som visas i listan), provlyssnar på ett avsnitt (ljudet strömmas och sparas inte på enheten), importerar avsnitt, öppnar ett material som skapats från en podcast för att kontrollera om det finns nya avsnitt, och – för material där ”Importera nya avsnitt automatiskt” är påslaget – när du öppnar eller återvänder till appen (högst en gång per 30 minuter; avsnitt hämtas bara via Wi‑Fi). Programbilden hämtas bara en gång per material och sparas på enheten som materialets ikon |

- Som all nätverkstrafik innehåller förfrågningarna vanlig anslutningsinformation, till exempel enhetens IP-adress. Hur mottagarna hanterar den styrs av integritetspolicyerna hos Apple (<https://www.apple.com/legal/privacy/>) och respektive utgivare
- Inga konton, inloggningar eller cookies används. Förfrågningarna görs utan att historik eller cookies sparas på enheten
- Importerat ljud, transkriptioner och studieloggar skickas aldrig
- Endast krypterade anslutningar (https) används


## Åtkomst till enhetens funktioner

| Funktion | Syfte |
|---|---|
| Taligenkänning | För att dela upp importerat ljud i meningar och för att transkribera din inspelade röst och jämföra den med förlagan (behandlas på enheten) |
| Musikbibliotek | För att importera DRM-fria låtar från ditt bibliotek som studiematerial |
| Filer | För att importera ljud- eller videofiler som du väljer eller delar från andra appar (från video sparas bara ljudet) |
| Mikrofon | För att spara ljud som du spelar in med ”Spela in” som studiematerial, och för att spela in din egen röst i ”Tydlighetskoll” och kontrollera om texten du läste känns igen korrekt. Inspelning sker bara när du själv startar den, och inspelningarna sparas på enheten |
| Bilder (endast lägga till) | För att lägga till bilden i Bilder när du trycker på ”Spara i Bilder” vid delning av studieloggen. Appen läser aldrig dina bilder |
| Nätverk | För att söka efter podcaster och hämta RSS-flöden och avsnitt (se ”Nätverkstrafik från podcastfunktionen” ovan), för att skicka feedback och ta emot svar (se ”Feedback” ovan) samt för att skicka användningsdata (se ”Användningsdata” ovan) |

All åtkomst används bara för import och analys. Inget som läses från enheten (ljud, låtar, filer eller bilder) skickas ut.

## Reprise Premium (prenumeration)

Köp, förnyelser och uppsägningar av Reprise Premium hanteras helt av Apples App Store. Appen kontrollerar bara på enheten med Apple om du prenumererar, och utvecklaren tar aldrig emot betalningsuppgifter. När ”Skicka användningsdata” är påslaget innehåller användningsdata din plantyp och om du köpte från prenumerationsskärmen (vilken funktion som öppnade den och om du startade en gratis provperiod) (se ”Användningsdata” ovan).

## Utlämnande till tredje part

**Förekommer inte.** Appen lämnar inte ut användarens uppgifter till tredje part. Podcastfunktionen kommunicerar som beskrivs ovan direkt med Apples söktjänst och med programmens utgivare, men bara för att hämta de program du har valt. Feedback och användningsdata lagras i Apples CloudKit. Ingen trafik för reklam eller spårning förekommer, och inget skickas till analystjänster från tredje part.

## Upphovsrätt

Rättigheterna till ljudfiler och podcastavsnitt som du importerar tillhör dig eller den ursprungliga rättighetsinnehavaren. Appen har ingen del i det importerade innehållet. Följ villkoren för varje program och använd podcaster för dina egna studier.

## Barns integritet

Appen samlar inte in några uppgifter som identifierar användaren, oavsett ålder. Användningsdata (se ovan) är densamma för alla åldrar och kan stängas av i ”Inställningar”.

## Ändringar i den här policyn

Vid ändringar uppdateras den här sidan och datumet för senaste uppdatering.

## Kontakt

reprise.app.support@gmail.com
