# GESTFARM-Android

Application Android GESTFARM by Kenfack Sobtia, construite avec Capacitor 8 à partir du dépôt web `valeryyacinthe-gif/Gestfarm`.

## Construction et mise à jour

Le workflow GitHub Actions `.github/workflows/build-apk.yml` :

- construit la version web actuelle depuis la branche `main` du dépôt `Gestfarm` ;
- génère et signe l'APK Android ;
- publie/remplace l'APK de la release `android-latest` ;
- vérifie toutes les 15 minutes si le dépôt web a changé et ne reconstruit l'APK que lorsqu'une nouvelle version web est détectée ;
- peut également être lancé manuellement ou à chaque modification du dépôt Android.

Lien permanent de téléchargement de la dernière APK publiée :

https://github.com/valeryyacinthe-gif/GESTFARM-Android/releases/latest/download/app-debug.apk

## Version web intégrée au départ

Commit web de référence : `e21ade1eb857902c255d4a6ee2e3dcea2914680f`.

Le fichier `web-source-commit.txt` conserve le commit web déjà intégré, afin d'éviter les reconstructions inutiles.

## Fonctionnalités et données

- L'application Android embarque le bundle web construit depuis le dépôt GESTFARM.
- Le stockage hors connexion et les files de synchronisation reposent sur le code web (IndexedDB).
- Les requêtes Supabase ne sont pas mises en cache par le service worker.
- Les données locales de l'application ne doivent jamais être supprimées lors d'une mise à jour.

## Signature Android

Le workflow actuel construit un APK de débogage signé avec la clé Android debug mise en cache dans GitHub Actions. Cette solution permet les essais initiaux, mais le cache GitHub n'est pas un coffre-fort permanent pour une clé de signature. Avant une diffusion durable à grande échelle, il faudra stocker une clé de signature de production dans les secrets GitHub et l'utiliser pour toutes les versions futures.
