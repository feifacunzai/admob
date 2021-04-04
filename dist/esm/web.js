import { WebPlugin } from '@capacitor/core';
export class AdMobWeb extends WebPlugin {
    constructor() {
        super({
            name: 'AdMob',
            platforms: ['web'],
        });
    }
    async initialize() { }
    // @ts-ignore
    async showBanner(options) {
        console.log(options);
    }
    // Hide the banner, remove it from screen, but can show it later
    async hideBanner() { }
    // Resume the banner, show it after hide
    async resumeBanner() { }
    // Destroy the banner, remove it from screen.
    async removeBanner() { }
    async prepareInterstitial(options) {
        console.log(options);
    }
    async showInterstitial() { }
    async prepareRewardVideoAd(options) {
        console.log(options);
    }
    async showRewardVideoAd() {
        return {
            type: '',
            amount: 0,
        };
    }
}
//# sourceMappingURL=web.js.map