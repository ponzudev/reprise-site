---
layout: ../../layouts/DocLayout.astro
lang: it
title: Informativa sulla privacy
description: Informativa sulla privacy di Reprise. Audio, trascrizioni e registro di studio restano solo sul tuo dispositivo e non vengono mai inviati a un server.
---

# Informativa sulla privacy di Reprise

Ultimo aggiornamento: 2026-11-20

## In sintesi

Reprise non raccoglie alcuna informazione sugli utenti, a eccezione del feedback che l'utente sceglie di inviare. Non ha un server: l'analisi dell'audio e il registro di studio vengono elaborati interamente sul dispositivo. Anche il feedback non contiene l'indirizzo email né il nome.

L'app comunica in rete solo quando l'utente usa “Da Podcast”, quando apre un materiale creato da un podcast per controllare se ci sono nuovi episodi, quando, per i materiali in cui l'utente ha attivato “Importa nuovi episodi automaticamente”, importa i nuovi episodi all'apertura dell'app, e quando l'utente invia un feedback o legge le risposte. Le comunicazioni per i podcast vanno direttamente al servizio di ricerca di Apple e all'editore del programma, e lo sviluppatore non ne riceve il contenuto. Il feedback ci arriva tramite CloudKit di Apple (vedi “Feedback” più avanti).

## Informazioni raccolte

L'app non raccoglie informazioni che identificano l'utente, dati di contatto, posizione né dati di utilizzo. Non contiene strumenti di analisi né pubblicità.

Riceviamo **soltanto ciò che l'utente sceglie di inviare** da “Impostazioni” → “Feedback” (vedi “Feedback” più avanti).

## Feedback

Da “Impostazioni” → “Feedback” puoi inviare allo sviluppatore segnalazioni di problemi e richieste. Le risposte dello sviluppatore compaiono nella stessa schermata.

- Vengono inviati il testo che scrivi, la versione dell'app e la versione di iOS. **Non vengono inviati indirizzo email, nome né numero di telefono**
- Per la raccolta si usa CloudKit di Apple. Per inviare è necessario aver effettuato l'accesso a iCloud sul dispositivo, ma lo sviluppatore riceve solo un ID utente anonimo assegnato da Apple: il tuo ID Apple e il tuo indirizzo email non gli vengono comunicati
- Ciò che hai inviato può essere letto solo da te e dallo sviluppatore
- Il contenuto viene usato solo per indagare sui problemi, migliorare l'app e rispondere. Se desideri che venga eliminato, chiedilo tramite il feedback

## Informazioni salvate sul dispositivo

I seguenti dati vengono salvati solo sul dispositivo dell'utente e non vengono mai inviati fuori dall'app:

- I file audio importati (compresi gli episodi scaricati dai podcast, l'audio registrato nell'app e l'audio creato leggendo ad alta voce un testo)
- Il testo dei materiali creati leggendo ad alta voce un testo
- La tua voce registrata con il “Test di chiarezza” (la registrazione più recente per ogni frase) e la relativa trascrizione (una per ogni turno)
- Le trascrizioni ottenute con il riconoscimento vocale e i tempi di ogni frase
- Il registro di studio (tempo di studio e numero di frasi riprodotte, registrati per traccia e per giorno)
- Le impostazioni di riproduzione (velocità, modo di ripetizione, durata della pausa, ecc.)

Questi dati vengono cancellati dal dispositivo quando elimini l'app.

Solo quando l'utente usa di sua scelta la funzione di condivisione del registro di studio, l'app passa alla destinazione (un'altra app) scelta dall'utente nel foglio di condivisione un'immagine con lo studio di oggi (tempo di studio, riproduzioni e numero di frasi diventate perfette nel Test di chiarezza), la serie di giorni consecutivi, il tempo di studio giornaliero degli ultimi 7 giorni e i totali complessivi (l'utente può scegliere quali voci mostrare), insieme a un breve testo con gli stessi contenuti. L'immagine viene creata sul dispositivo e non contiene i nomi di materiali o tracce, l'audio né le trascrizioni. L'app non condivide mai nulla automaticamente e non ci invia nulla. Quando usi “Salva in Foto”, l'immagine viene aggiunta alla libreria Foto del dispositivo. Per questo l'app chiede il permesso di “solo aggiunta” alle foto, ma non legge mai le tue foto. Il trattamento presso la destinazione è regolato dall'informativa sulla privacy di quella destinazione.

Per i materiali creati da un podcast, l'app salva sul dispositivo anche l'URL del feed RSS del programma, gli identificatori degli episodi importati e l'immagine del programma usata come icona del materiale. L'elenco dei programmi che hai aggiunto non viene mai inviato all'esterno, ma l'URL del feed RSS di ogni programma viene usato nella richiesta con cui l'app ottiene l'elenco degli episodi dall'editore di quel programma (vedi “Comunicazioni della funzione Podcast” più avanti).

## Trattamento dell'audio

Per la divisione automatica in frasi si usa il **riconoscimento vocale sul dispositivo** fornito da Apple. I dati audio non vengono mai inviati ai server di Apple né ai nostri.

Tuttavia, se il modello linguistico usato per il riconoscimento non è ancora installato sul dispositivo, iOS potrebbe scaricarlo come funzione di sistema. Questo download avviene secondo l'informativa sulla privacy di Apple e non contiene la voce dell'utente.

“Crea da testo” legge il testo ad alta voce con la **sintesi vocale sul dispositivo** inclusa in iOS. Il testo non viene mai inviato all'esterno.

## Comunicazioni della funzione Podcast

Solo quando usi “Da Podcast” o apri un materiale creato da un podcast, l'app effettua le seguenti comunicazioni. Nessuna di esse passa dai nostri server.

| Destinazione | Cosa viene inviato | Quando |
|---|---|---|
| Servizio di ricerca di Apple (iTunes Search API) | Il nome del programma che hai digitato, oppure l'ID del programma contenuto in un link di Apple Podcasts, e il codice del paese impostato nella regione del dispositivo. Quando apri “Da Podcast”, gli ID dei programmi consigliati indicati nell'app e un codice paese (US per i programmi non presenti nello store del tuo paese); non si tratta di dati inseriti dall'utente | Quando cerchi un programma, incolli un link di Apple Podcasts o apri “Da Podcast” (per ottenere le immagini e gli editori dei programmi consigliati) |
| Server di distribuzione delle immagini di Apple | Richieste delle immagini di copertina dei programmi | Quando vengono mostrati i risultati della ricerca e i consigli |
| Editore del programma (i server che ospitano il feed RSS, i file audio e le immagini del programma e degli episodi) | Richieste del feed RSS indicato dall'utente o scelto nella ricerca, dei file audio degli episodi e delle immagini del programma e degli episodi | Quando apri l'elenco degli episodi (comprese le immagini degli episodi mostrate nell'elenco), quando ascolti l'anteprima di un episodio (l'audio viene riprodotto mentre viene ricevuto e non viene salvato sul dispositivo), quando importi gli episodi, quando apri un materiale creato da un podcast per controllare se ci sono nuovi episodi e, per i materiali con “Importa nuovi episodi automaticamente” attivo, quando apri l'app o vi ritorni (al massimo una volta ogni 30 minuti; gli episodi vengono importati solo con il Wi‑Fi). L'immagine del programma viene ottenuta una sola volta per materiale e salvata sul dispositivo come icona del materiale |

- Come ogni altra comunicazione in rete, anche queste includono normali informazioni di connessione, come l'indirizzo IP del dispositivo. Il trattamento presso le destinazioni è regolato dalle informative sulla privacy di Apple (<https://www.apple.com/legal/privacy/>) e di ciascun editore
- Non si usano account, accessi né cookie. Le comunicazioni avvengono con impostazioni che non lasciano sul dispositivo cronologia o cookie
- L'audio importato, le trascrizioni e il registro di studio non vengono mai trasmessi
- Si usano solo connessioni cifrate (https)


## Accesso alle funzioni del dispositivo

| Funzione | Scopo |
|---|---|
| Riconoscimento vocale | Dividere in frasi l'audio importato e trascrivere la tua voce registrata per confrontarla con il modello (elaborazione sul dispositivo) |
| Libreria musicale | Importare come materiale di studio i brani senza DRM presenti nella libreria dell'utente |
| File | Importare file audio o video scelti dall'utente o condivisi da altre app (dei video viene estratto e salvato solo l'audio) |
| Microfono | Salvare come materiale di studio l'audio che registri con “Registra” e registrare la tua voce nel “Test di chiarezza” per verificare se il testo che hai letto viene riconosciuto correttamente. La registrazione avviene solo quando la avvii tu e resta sul dispositivo |
| Foto (solo aggiunta) | Aggiungere alla libreria Foto l'immagine creata quando tocchi “Salva in Foto” nella condivisione del registro di studio. L'app non legge mai le tue foto |
| Rete | Cercare i programmi podcast e scaricare i feed RSS e gli episodi (vedi “Comunicazioni della funzione Podcast” più sopra), e inviare feedback e ricevere le risposte (vedi “Feedback” più sopra) |

Tutte queste funzioni sono usate solo per l'importazione e l'analisi. Nulla di ciò che viene letto dal dispositivo viene inviato all'esterno.

## Reprise Premium (abbonamento)

L'acquisto, il rinnovo e la disdetta di Reprise Premium sono gestiti interamente dall'App Store di Apple. L'app si limita a verificare con Apple, sul dispositivo, se sei abbonato; lo sviluppatore non riceve mai i dati di pagamento né la cronologia degli acquisti.

## Comunicazione a terzi

**Nessuna.** L'app non fornisce a terzi le informazioni degli utenti. Come descritto sopra, la funzione Podcast comunica direttamente con il servizio di ricerca di Apple e con gli editori dei programmi, ma solo per ottenere i programmi indicati dall'utente. Il feedback viene salvato in CloudKit di Apple. Non avviene alcuna comunicazione a fini pubblicitari, di analisi o di tracciamento.

## Diritto d'autore

I diritti sui file audio e sugli episodi dei podcast importati appartengono all'utente o ai titolari originali dei diritti. L'app non interviene sui contenuti importati. Per i podcast, rispetta le condizioni d'uso di ciascun programma e usali nei limiti dello studio personale.

## Privacy dei minori

L'app non raccoglie informazioni da utenti di nessuna età.

## Modifiche a questa informativa

In caso di modifiche, aggiorneremo questa pagina e la data di ultimo aggiornamento.

## Contatti

reprise.app.support@gmail.com
