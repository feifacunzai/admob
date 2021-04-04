'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

/**
 *  For more information:
 *  https://developers.google.com/admob/ios/banner#banner_sizes
 *  https://developers.google.com/android/reference/com/google/android/gms/ads/AdSize
 * */
exports.AdSize = void 0;
(function (AdSize) {
    /**
     * Mobile Marketing Association (MMA)
     * banner ad size (320x50 density-independent pixels).
     */
    AdSize["BANNER"] = "BANNER";
    /**
     * A dynamically sized banner that matches its parent's
     * width and expands/contracts its height to match the ad's
     * content after loading completes.
     */
    AdSize["FLUID"] = "FLUID";
    /**
     * Interactive Advertising Bureau (IAB)
     * full banner ad size (468x60 density-independent pixels).
     */
    AdSize["FULL_BANNER"] = "FULL_BANNER";
    /**
     * Large banner ad size (320x100 density-independent pixels).
     */
    AdSize["LARGE_BANNER"] = "LARGE_BANNER";
    /**
     * Interactive Advertising Bureau (IAB)
     * leaderboard ad size (728x90 density-independent pixels).
     */
    AdSize["LEADERBOARD"] = "LEADERBOARD";
    /**
     * Interactive Advertising Bureau (IAB)
     * medium rectangle ad size (300x250 density-independent pixels).
     */
    AdSize["MEDIUM_RECTANGLE"] = "MEDIUM_RECTANGLE";
    /**
     * deprecated: A dynamically sized banner that is full-width and auto-height.
     */
    AdSize["SMART_BANNER"] = "SMART_BANNER";
    /**
     * A dynamically sized banner that is full-width and auto-height.
     */
    AdSize["ADAPTIVE_BANNER"] = "ADAPTIVE_BANNER";
    /**
     * To define a custom banner size, set your desired AdSize
     */
    AdSize["CUSTOM"] = "CUSTOM";
})(exports.AdSize || (exports.AdSize = {}));
/**
 * @see https://developer.android.com/reference/android/widget/LinearLayout#attr_android:gravity
 */
exports.AdPosition = void 0;
(function (AdPosition) {
    /**
     * Banner position be top-center
     */
    AdPosition["TOP_CENTER"] = "TOP_CENTER";
    /**
     * Banner position be center
     */
    AdPosition["CENTER"] = "CENTER";
    /**
     * Banner position be bottom-center(default)
     */
    AdPosition["BOTTOM_CENTER"] = "BOTTOM_CENTER";
})(exports.AdPosition || (exports.AdPosition = {}));

const AdMob = core.registerPlugin('AdMob', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AdMobWeb()),
});

class AdMobWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AdMobWeb: AdMobWeb
});

exports.AdMob = AdMob;
//# sourceMappingURL=plugin.cjs.js.map
