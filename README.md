# GESTFARM-Android

Application Android GESTFARM basée sur le bundle web du dépôt `valeryyacinthe-gif/Gestfarm`.

## Construction

Le workflow GitHub Actions `.github/workflows/build-apk.yml` récupère automatiquement la branche `main` du dépôt web, construit l'application Vite, synchronise Capacitor et publie l'APK de la dernière version sous la release `android-latest`.

Dernière synchronisation qualité : 23 novembre 2026.
Commit web embarqué dans l’APK validé : `043ed9997d79bd114a974d34e4cace61809dde5e`.
Les migrations SQL Supabase sont appliquées séparément depuis le dépôt web.
