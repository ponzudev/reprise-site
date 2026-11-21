---
layout: ../../layouts/DocLayout.astro
lang: fr
title: Politique de confidentialité
description: Politique de confidentialité de Reprise. Vos audios, transcriptions et journal d'étude restent sur votre appareil et ne sont jamais envoyés à un serveur.
---

# Politique de confidentialité de Reprise

Dernière mise à jour : 2026-11-20

## Résumé

En dehors des commentaires que vous choisissez d'envoyer vous-même, Reprise ne collecte aucune information sur ses utilisateurs. L'app ne dispose d'aucun serveur : l'analyse de l'audio et le journal d'étude sont entièrement traités sur l'appareil. Les commentaires ne contiennent ni votre adresse e-mail ni votre nom.

L'app ne communique sur le réseau que lorsque vous utilisez « Depuis Podcasts », lorsque vous ouvrez un support créé à partir d'un podcast pour vérifier s'il y a de nouveaux épisodes, lorsque, pour un support où vous avez activé « Importer les nouveaux épisodes », les nouveaux épisodes sont importés à l'ouverture de l'app, et lorsque vous envoyez un commentaire ou consultez les réponses. Les communications liées aux podcasts s'effectuent directement avec le service de recherche d'Apple et avec la source de diffusion de l'émission ; le développeur n'en reçoit jamais le contenu. Les commentaires nous parviennent via CloudKit d'Apple (voir « Commentaires » ci-dessous).

## Informations collectées

L'app ne collecte aucune information permettant de vous identifier, ni coordonnées, ni données de localisation, ni données d'utilisation. Elle n'intègre aucun outil d'analyse ni aucune publicité.

Nous recevons **uniquement ce que vous envoyez vous-même** depuis Réglages → « Commentaires » (voir « Commentaires » ci-dessous).

## Commentaires

Depuis Réglages → « Commentaires », vous pouvez envoyer au développeur des signalements de bugs ou des suggestions. Les réponses du développeur s'affichent sur le même écran.

- Sont envoyés : le texte que vous saisissez, la version de l'app et la version d'iOS. **Ni adresse e-mail, ni nom, ni numéro de téléphone ne sont envoyés**
- Les commentaires sont reçus via CloudKit d'Apple. L'envoi nécessite d'être connecté à iCloud sur l'appareil, mais le développeur ne reçoit qu'un identifiant d'utilisateur anonyme attribué par Apple ; votre identifiant Apple et votre adresse e-mail ne lui sont jamais communiqués
- Seuls vous et le développeur pouvez lire ce que vous avez envoyé
- Leur contenu sert uniquement à analyser les problèmes, à améliorer l'app et à vous répondre. Si vous souhaitez qu'il soit supprimé, faites-en la demande par un commentaire

## Informations stockées sur l'appareil

Les éléments suivants sont stockés uniquement sur votre appareil. Ils ne sont jamais envoyés hors de l'app.

- Les fichiers audio importés (y compris les épisodes de podcasts téléchargés, l'audio enregistré dans l'app et l'audio créé par lecture à voix haute d'un texte)
- Le texte des supports créés par lecture à voix haute d'un texte
- Votre propre voix enregistrée dans le « Test de clarté » (le dernier enregistrement de chaque phrase) et sa transcription (pour chaque essai)
- Les transcriptions produites par la reconnaissance vocale et les horodatages de chaque phrase
- Le journal d'étude (temps d'étude et nombre de phrases lues, enregistrés par piste et par jour)
- Les réglages de lecture (vitesse, mode de répétition, durée de la pause, etc.)

Toutes ces données sont effacées de l'appareil lorsque vous supprimez l'app.

Uniquement lorsque vous utilisez vous-même le partage du journal d'étude, une image indiquant votre étude du jour (temps d'étude, nombre de lectures et nombre de phrases devenues parfaites au Test de clarté), votre série, votre temps d'étude quotidien des 7 derniers jours et vos totaux depuis le début (vous choisissez les éléments affichés), ainsi qu'un court texte de publication reprenant les mêmes informations, sont transmis à la destination (une autre app) que vous choisissez dans la feuille de partage. L'image est créée sur l'appareil et ne contient ni noms de supports ou de pistes, ni audio, ni transcriptions. L'app ne partage jamais rien automatiquement et ne nous envoie rien. Lorsque vous utilisez « Enregistrer dans Photos », l'image est ajoutée à vos photos. Pour cela, l'app demande l'autorisation « Ajout uniquement » pour Photos, mais elle ne lit jamais vos photos. Le traitement par la destination est régi par la politique de confidentialité de celle-ci.

Pour les supports créés à partir d'un podcast, l'app stocke également sur l'appareil l'URL du flux RSS de l'émission, les identifiants des épisodes importés et l'image de l'émission utilisée comme icône du support. La liste des émissions que vous suivez n'est jamais envoyée à l'extérieur, mais l'URL du flux RSS de chaque émission est utilisée dans la requête qui récupère la liste des épisodes auprès de la source de diffusion de cette émission (voir « Communications de la fonction Podcasts » ci-dessous).

## Traitement de l'audio

Le découpage automatique en phrases utilise la **reconnaissance vocale sur l'appareil** fournie par Apple. Les données audio ne sont jamais envoyées aux serveurs d'Apple ni aux nôtres.

Toutefois, si le modèle de langue utilisé pour la reconnaissance n'est pas encore installé sur l'appareil, il peut être téléchargé en tant que fonction système d'Apple. Ce téléchargement est régi par la politique de confidentialité d'Apple et ne contient pas votre voix.

« Créer depuis un texte » lit le texte à voix haute grâce à la **synthèse vocale sur l'appareil** intégrée à iOS. Le texte n'est jamais envoyé à l'extérieur.

## Communications de la fonction Podcasts

L'app effectue les communications suivantes uniquement lorsque vous utilisez « Depuis Podcasts » et lorsque vous ouvrez un support créé à partir d'un podcast. Aucune ne passe par nos serveurs.

| Destination | Ce qui est envoyé | Quand |
|---|---|---|
| Service de recherche d'Apple (iTunes Search API) | Le nom d'émission saisi, ou l'identifiant d'émission contenu dans un lien Apple Podcasts, ainsi que le code pays du réglage de région de l'appareil. À l'ouverture de « Depuis Podcasts », les identifiants des émissions recommandées inscrits dans l'app et un code pays (US pour les émissions absentes de la boutique de votre pays) ; il ne s'agit pas de données saisies par vous | Lorsque vous recherchez une émission, collez un lien Apple Podcasts ou ouvrez « Depuis Podcasts » (pour obtenir les images et les sources de diffusion des émissions recommandées) |
| Serveurs d'images d'Apple | Requêtes d'images (illustrations) des émissions | Lors de l'affichage des résultats de recherche et des recommandations |
| Source de diffusion de l'émission (serveurs hébergeant le flux RSS, les fichiers audio et les images de l'émission et des épisodes) | Requêtes du flux RSS que vous avez indiqué ou choisi dans la recherche, des fichiers audio des épisodes, et des images de l'émission et des épisodes | Lorsque vous ouvrez la liste des épisodes (y compris les images des épisodes affichés dans la liste), écoutez un extrait d'un épisode (l'audio est lu au fil de la réception et n'est pas stocké sur l'appareil), importez des épisodes, ouvrez un support créé à partir d'un podcast pour vérifier s'il y a de nouveaux épisodes, et, pour les supports où « Importer les nouveaux épisodes » est activé, lorsque vous ouvrez l'app ou y revenez (au plus une fois toutes les 30 minutes ; les épisodes ne sont importés qu'en Wi‑Fi). L'image de l'émission, utilisée comme icône du support, n'est récupérée qu'une seule fois par support et stockée sur l'appareil |

- Comme toute communication réseau, ces requêtes contiennent les informations de connexion habituelles, telles que l'adresse IP de l'appareil. Leur traitement par les destinataires est régi par les politiques de confidentialité d'Apple (<https://www.apple.com/legal/privacy/>) et de chaque source de diffusion
- Aucun compte, aucune connexion ni aucun cookie ne sont utilisés. Les requêtes sont effectuées avec un paramétrage qui ne conserve ni historique de communication ni cookies sur l'appareil
- Les audios importés, les transcriptions et le journal d'étude ne sont jamais transmis
- Seules des connexions chiffrées (https) sont utilisées


## Accès aux fonctions de l'appareil

| Fonction | Utilisation |
|---|---|
| Reconnaissance vocale | Découper l'audio importé en phrases, et transcrire votre propre voix enregistrée pour la comparer au modèle (traitement sur l'appareil) |
| Bibliothèque musicale | Importer comme supports les morceaux sans DRM de votre bibliothèque |
| Fichiers | Importer les fichiers audio ou vidéo que vous sélectionnez ou qui sont partagés depuis d'autres apps (pour une vidéo, seul l'audio est extrait et conservé) |
| Micro | Enregistrer comme support l'audio que vous enregistrez avec « Enregistrer », et enregistrer votre voix dans le « Test de clarté » pour vérifier si le texte lu est correctement reconnu. L'enregistrement n'a lieu que lorsque vous le lancez, et il est stocké sur l'appareil |
| Photos (ajout uniquement) | Ajouter à vos photos l'image créée lorsque vous touchez « Enregistrer dans Photos » lors du partage du journal d'étude. L'app ne lit jamais vos photos |
| Réseau | Rechercher des émissions de podcasts et télécharger leurs flux RSS et leurs épisodes (voir « Communications de la fonction Podcasts » ci-dessus), et envoyer des commentaires et en recevoir les réponses (voir « Commentaires » ci-dessus) |

Ces accès servent uniquement à l'importation et à l'analyse. Aucun contenu lu sur l'appareil n'est envoyé à l'extérieur.

## Reprise Premium (abonnement)

L'achat, le renouvellement et la résiliation de Reprise Premium sont entièrement gérés par l'App Store d'Apple. L'app se contente de vérifier auprès d'Apple, sur l'appareil, si vous êtes abonné ; le développeur ne reçoit jamais vos informations de paiement ni votre historique d'achats.

## Communication à des tiers

**Aucune.** L'app ne communique vos informations à aucun tiers. Comme décrit ci-dessus, la fonction Podcasts communique directement avec le service de recherche d'Apple et avec les sources de diffusion des émissions, uniquement pour récupérer les émissions que vous avez indiquées. Les commentaires sont stockés dans CloudKit d'Apple. Aucune communication n'est effectuée à des fins de publicité, d'analyse ou de suivi.

## Droits d'auteur

Les droits sur les fichiers audio et les épisodes de podcasts que vous importez appartiennent à vous-même ou à leurs ayants droit d'origine. L'app n'intervient pas dans les contenus importés. Pour les podcasts, respectez les conditions d'utilisation de chaque émission et limitez-vous à un usage d'étude personnel.

## Protection de la vie privée des enfants

L'app ne collecte aucune information, quel que soit l'âge de l'utilisateur.

## Modifications de la présente politique

En cas de modification, cette page sera mise à jour et la date de dernière mise à jour sera modifiée.

## Contact

reprise.app.support@gmail.com
