import type { CapacitorConfig } from '@capacitor/cli';

// L'APK embarque la version web construite depuis le dépôt Gestfarm.
// Le service worker et IndexedDB permettent ensuite l'utilisation hors réseau.
const config: CapacitorConfig = {
  appId: 'com.gestfarm.byks',
  appName: 'GESTFARM',
  webDir: 'dist'
};

export default config;
