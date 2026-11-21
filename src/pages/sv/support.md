---
layout: ../../layouts/DocLayout.astro
lang: sv
title: Support och vanliga frågor
description: Support för Reprise. Så importerar du ljud, vad du kan kontrollera när uppdelningen i meningar inte fungerar, pauser för repeating samt hur du prenumererar på, säger upp och återställer Reprise Premium.
---

# Support för Reprise

Reprise är en språkspelare som delar upp ljudmaterial i meningar så att du kan lyssna på dem om och om igen.
Allt körs på enheten, och du behöver inget konto.

Namnen på knappar och menyer på den här sidan är de som appen visar på svenska. Reprise finns på 14 visningsspråk (Inställningar → Visning).

## Kontakt

reprise.app.support@gmail.com

Om du rapporterar ett fel hjälper följande uppgifter oss att svara snabbare:

- iPhone-modell och iOS-version
- Vad du gjorde och vad som hände
- Formatet (mp3, m4a osv.) och längden på ljudet du importerade

## Systemkrav

- iPhone med iOS 26 eller senare

## Vanliga frågor

### Vad är det medföljande materialet ”Så använder du Reprise”?

Det är en guide som läggs till första gången du öppnar appen. Tre spår (sammanlagt cirka 4 minuter) presenterar funktionerna med röst, och du kan prova samma steg medan du lyssnar. Rösten är syntetisk.

- **Lyssna mening för mening och upprepa** – att trycka på en mening, tystnaden (pausen) efter varje mening och ”Pauslängd”, uppspelningslägena (Spela oavbrutet / Paus efter varje mening / Loopa 1 mening), hastighet, att dölja texten och bokmärken
- **Rätta uppdelning och text** – att slå ihop en mening som klippts av mitt i och ångra det, att dela upp i fraser eller ordgrupper, ”Justera den här meningen” och att dela upp hela spåret igen. En mening är avsiktligt avklippt mitt i, så att du kan prova att slå ihop
- **Tala högt och fortsätt** – shadowing och repeating, Tydlighetskoll, repetition av bokmärkta meningar, studieloggen och att lägga till material

Guiden räknas inte in i antalet material du kan ha gratis. Guidens text kan inte skrivas om (men du kan prova att rätta uppdelningen). När du inte behöver den längre kan du radera den som vilket annat material som helst. En raderad guide läggs inte till igen.

### Varifrån kan jag importera ljud?

Du importerar med ”+” i materiallistan.

- **Från Filer (ljud eller video)** – ljud i appen Filer (mp3, m4a, wav osv.) eller ljudet i en video
- **Från musikbiblioteket** – låtar i ditt musikbibliotek. **Låtar med DRM (kopieringsskydd) kan inte importeras.** Låtar som strömmas eller hämtas från Apple Music omfattas inte
- **Från Podcaster** – sök på programmets namn, eller klistra in en URL till ett RSS-flöde eller en Apple Podcasts-länk, och välj sedan avsnitt. Varje program blir ett material. Program utan offentligt RSS-flöde (till exempel program som bara är för prenumeranter) kan inte importeras
- **Spela in** – spela in direkt, till exempel när läraren läser upp en förlaga
- **Skapa från text** – klistra in en text, så läser en röst på enheten upp den, och materialet är uppdelat i meningar från början

Du kan också skicka röstmemon, ljud från e-postbilagor och liknande direkt till Reprise från delningsmenyn.

Förutom guiden innehåller appen inget studiematerial. Använd ljud som du har rätt att använda.

### Det tar lång tid att dela upp i meningar

Taligenkänningen körs på enheten, så det tar från några sekunder till några minuter beroende på hur långt ljudet är. Förloppet visas på skärmen. Långt ljud blir lättare att hantera om du delar upp det i avsnitt innan du importerar det.

### Ljudet delas inte upp i meningar / texten visas som ”Ingen text”

Kontrollera följande.

1. **Behörighet för taligenkänning** – att Inställningar → Reprise → Taligenkänning är påslaget
2. **Igenkänningsspråk** – att ”Igenkänningsspråk” på kortet som visas före uppdelningen, eller ”⋯” → ”Igenkänningsspråk”, stämmer med språket i ljudet (med ”Dela upp alla oanalyserade spår” i ett material kan du också välja språk efter att du tryckt på knappen). Standard är engelska. Rubriken högst upp i menyn visar vilket språk den nuvarande uppdelningen gjordes på. Välj ”Dela upp igen” när du har bytt språk
3. **Ljudets innehåll** – ljud som mest består av musik eller har mycket brus kanske inte känns igen. Då delas det vid tystnader, och du kan spela upp det utan text
4. **Igenkänningsmodell** – iOS hämtar automatiskt igenkänningsmodellen för ett språk första gången du delar upp ljud på det språket. Om det inte finns tillräckligt med ledigt utrymme eller ingen anslutning misslyckas hämtningen, och orsaken visas högst upp i spåret under ”Kunde inte transkribera”. Frigör utrymme, anslut till Wi‑Fi och välj ”⋯” → ”Dela upp igen” för att hämta modellen på nytt. Enligt en regel i iOS kan en app använda högst fem igenkänningsspråk åt gången. När du delar upp på ett sjätte språk släpper appen automatiskt ett språk som inget spår använder (eller, om det inte finns något sådant, det språk du inte har använt på längst tid). Om du delar upp på ett släppt språk igen kan modellen behöva hämtas en gång till

### Meningarna delas inte där jag väntade mig

Håll fingret på en mening för att rätta den direkt.

- **Dela om** – delar om just den meningen i tre nivåer: ordgrupper, fraser eller meningar
- **Justera den här meningen** – rätta fel i transkriptionen, eller dra meningens början och slut med fingret medan du tittar på vågformen. Du kan provlyssna för att kontrollera. Ljudet förblir detsamma när du ändrar texten (bara material som skapats med ”Skapa från text” får nytt ljud från den ändrade texten)
- **Slå ihop med föregående mening / Slå ihop med nästa mening** – slår ihop meningen med grannen. Med ”Ångra sammanslagning” går det tillbaka

Om du vill ändra hur fint hela spåret är uppdelat väljer du ”⋯” → ”Dela upp igen” och sedan Meningar, Fraser eller Ordgrupper. Sammanslagningar och omdelningar återställs, men gränser som du har rättat med ”Justera den här meningen” behålls.

### Vad är pausen ”Som frasen”?

Det är en inställning för repeating. När en fras är slut hörs en signalton och appen lägger in **en tystnad som är lika lång som frasen**. Säg frasen högt efter signalen. Om du lyssnar i en annan hastighet anpassas pausen efter den längd du faktiskt hörde. Du kan också lägga till extra tid med ”Signaltonens timing” under Uppspelning.

### Jag vill lyssna med texten dold

Med ögonknappen längst till vänster i kontrollpanelen döljer du texten. Texten **visas bara medan du håller ned** knappen, så håll den nedtryckt när du vill kontrollera om du hörde rätt.

### Jag vill öva på de meningar jag tycker är svåra, alla på en gång

Svep åt höger på en mening du vill öva på i spelaren, så får den ett bokmärke. Öppna ”Repetera bara bokmärkta meningar” i materiallistan, så samlas de bokmärkta meningarna från alla dina material och du kan öva på dem i följd (Reprise Premium). När du kan säga en mening bra trycker du på ”Ta bort bokmärke” medan du övar.

### Jag vill kontrollera om min röst går fram som texten

Håll fingret på en mening i spelaren och välj ”Tydlighetskoll”. Gratisanvändare kan använda den på valfria 3 meningar per spår (varje mening du spelar in räknas som en, och en mening som du har spelat in en gång kan du kolla när som helst; med Reprise Premium kan du använda den på alla meningar). Tryck på texten för att höra förlagan. När du trycker på inspelningsknappen längst ned spelas förlagan, sedan hörs ett pip och inspelningen startar. Den stoppas automatiskt när meningens sista ord har känts igen rätt, eller efter några sekunders tystnad. Slår du på ”Upprepa” till höger om inspelningsknappen spelas nästa omgångs förlaga varje gång transkriberingen är klar, så att du kan fortsätta öva tills du stoppar (om inspelningen stoppas utan att din röst hördes stoppas även upprepningen). Resultatet av varje omgång läggs till som ett kort, med det senaste först, och du kan lyssna på din senaste inspelning igen med ”Min röst”. När din röst går fram precis som texten visas ”Perfekt!”. Namn och andra egennamn kan uppfattas som andra ord även när du säger dem rätt. Om en mening aldrig blir som texten kan du trycka på ”Räkna som perfekt” på den senaste omgången, så räknas den som perfekt (”Ångra” tar tillbaka det). Meningar som har blivit perfekta visas i grönt i spårets förloppsfält. Med ögonknappen till vänster om inspelningsknappen döljer du texten (den syns bara medan du håller ned knappen). Engelska sammandragningar behandlas som samma sak som de fullständiga formerna, till exempel ”we're” och ”we are” eller ”don't” och ”do not”. Bara din senaste inspelning av varje mening sparas på enheten, medan transkriptionen av varje omgång sparas.

När du har spelat in transkriberas din röst med taligenkänningen på enheten, och kortet ”Inspelade meningar” under förlagans text visar skillnaderna mot förlagan i färg: grönt för ord som uppfattades som i förlagan, rött för ord som uppfattades som ett annat ord (ordet som uppfattades står inom parentes), grå överstrykning för ord som inte uppfattades och ett orange ”+” för ord som uppfattades men inte finns i förlagan. Det är ingen bedömning av uttalet, utan en fingervisning om huruvida orden gick fram som du menade. Korta meningar, egennamn, siffror (till exempel ”10” och ”ten”) och, på japanska, skillnaden mellan kana och kanji kan visas som andra ord även när du säger dem rätt. Om språket är fel väljer du det igen under ”Igenkänningsspråk”.

### Prenumerera på, säga upp och återställa Reprise Premium

- **Prenumerera**: välj ”Inställningar” → ”Visa Reprise Premium” och välj månads- eller årsabonnemang. Priserna visas i appen innan du köper och varierar mellan länder och regioner. Nya prenumeranter får 7 dagars kostnadsfri provperiod på båda (en gång per Apple‑konto), och säger du upp under provperioden debiteras du ingenting
- **Säga upp**: säg upp via ”Inställningar” → ”Hantera prenumeration” i appen, eller i iPhonens app Inställningar → ditt namn → Prenumerationer. Du kan använda Premium till slutet av den aktuella perioden
- **Återställa**: efter byte av iPhone eller ominstallation trycker du på ”Inställningar” → ”Återställ köp” (eller ”Återställ köp” på köpskärmen)
- Även utan prenumeration kan du använda 5 material (guiden räknas inte; det aktuella antalet visas i rubriken i materiallistan; upp till 100 spår per material), studieloggen för de senaste 7 dagarna och ”Skapa från text” upp till 3 gånger i månaden. Om prenumerationen upphör kan du fortfarande spela upp alla material du har skapat

### Kan jag dela min studielogg?

Tryck på ”Dela din studielogg” ovanför kalendern i studieloggen, så blir dagens studier en enda bild som du kan dela till X (Twitter), Meddelanden och andra appar (gratis). Dagar då du når ditt dagsmål eller en milstolpe i din svit (3, 7, 14 dagar osv.) visas också ”Dela din studielogg?” under ”Dagens studier” i materiallistan, och du kan dela därifrån (stänger du den med × visas den inte igen den dagen). Bilden visar dagens studietid, din svit, dagens antal uppspelningar och antalet meningar som gick fram (meningar som blev perfekta i Tydlighetskoll), ett diagram över studietiden de senaste 7 dagarna och dina totaler hittills. Sviten, uppspelningar och meningar som gick fram, 7-dagarsdiagrammet och totalerna kan du ta bort under ”Visa på bilden” på delningsskärmen. Bildens färgtema är ”Ljust”, och med Reprise Premium kan du också välja ”Mörkt”, ”Skog”, ”Solnedgång” eller ”Mono” (även gratis kan du välja dem för att se hur de ser ut). Namn på material och spår tas aldrig med. Om du inte har studerat något än idag visar bilden dina totaler hittills. Som bildformat väljer du ”Inlägg 4:5” för flöden eller den stående ”Story 9:16” för Instagram Stories och TikTok. Med ”Spara i Bilder” sparar du bilden i Bilder (första gången ber appen om tillstånd att lägga till bilder; appen läser aldrig dina bilder).

Tillsammans med bilden skickar appen med en kort inläggstext med dagens studietid, din svit och hashtaggar som ”#RepriseStudielogg” (språkets namn i texten följer språket du studerar). Texten slutar med en länk till en sida som presenterar Reprise. Om du inte vill ha med den stänger du av ”Ta med en länk till Reprise” på delningsskärmen (den förblir avstängd nästa gång). Vissa appar tar bara emot bilden. Om du vill publicera och hur du vill ändra texten bestämmer du i appen du delar till. Appen publicerar aldrig något automatiskt.

### Min studietid stämmer inte med verkligheten

Studietiden är summan av den tid då ljud faktiskt spelas upp och pauserna mellan upprepningarna. Tid när uppspelningen är pausad eller avbruten av till exempel ett samtal räknas inte. I Tydlighetskoll räknas tiden då skärmen är öppen (inklusive väntan på transkribering och tiden du läser resultatet). Tid utan någon aktivitet räknas dock bara upp till 3 minuter åt gången, och tid i en annan app eller med skärmen avstängd räknas inte. Om en post är fel kan du radera den genom att svepa den dagen åt vänster på skärmen för studieloggen.

### Var sparas mina data?

Ljud som du importerar, transkriptioner, studieloggar och inställningar sparas **bara på din iPhone**. De skickas inte till någon server. Om du raderar appen raderas allt detta också. Om iCloud-säkerhetskopiering är på ingår de i säkerhetskopian av din iPhone.

Mer information finns i [integritetspolicyn](/sv/privacy).
