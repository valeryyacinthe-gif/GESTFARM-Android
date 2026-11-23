# GESTFARM-Android

Application Android GESTFARM basée sur le bundle web du dépôt `valeryyacinthe-gif/Gestfarm`.

## Construction

Le workflow GitHub Actions `.github/workflows/build-apk.yml` récupère automatiquement la branche `main` du dépôt web, construit l'application Vite, synchronise Capacitor et publie l'APK de la dernière version sous la release `android-latest`.

## Fonctionnalités de la version web embarquée

- Choix d'interface après connexion : Éleveur individuel ou Entreprise / exploitation professionnelle.
- Préférence d'interface enregistrée sur le compte, modifiable depuis les paramètres.
- Les permissions et les données des exploitations restent contrôlées indépendamment du mode d'interface.
- Les modules de reproducteurs, le suivi technique, les fiches imprimables, le journal et les rapports restent disponibles selon les autorisations.

Commit web source de cette mise à jour : `b9e8946ef738b10c03f3a61edfc9829fd7b81469`.
Les migrations SQL Supabase sont appliquées séparément depuis le dépôt web.
