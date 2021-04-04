import { registerPlugin } from '@capacitor/core';
const AdMob = registerPlugin('AdMob', {
    web: () => import('./web').then(m => new m.AdMobWeb()),
});
export * from './definitions';
export { AdMob };
//# sourceMappingURL=index.js.map