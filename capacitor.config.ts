import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gestfarm.byks',
  appName: 'GESTFARM',
  webDir: 'www',
  server: {
    // L'application Android affiche la version web déjà publiée.
    // Les mises à jour web seront donc visibles sans réinstaller l'APK.
    url: 'https://gestfarm.vercel.app',
    cleartext: false
  }
};

export default config;
