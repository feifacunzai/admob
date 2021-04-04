import { WebPlugin } from '@capacitor/core';
import { AdMobRewardItem, AdOptions } from './definitions';
import type { AdMobPlugin } from './definitions';
export declare class AdMobWeb extends WebPlugin implements AdMobPlugin {
    constructor();
    initialize(): Promise<void>;
    showBanner(options: AdOptions): Promise<void>;
    hideBanner(): Promise<void>;
    resumeBanner(): Promise<void>;
    removeBanner(): Promise<void>;
    prepareInterstitial(options: AdOptions): Promise<void>;
    showInterstitial(): Promise<void>;
    prepareRewardVideoAd(options: AdOptions): Promise<void>;
    showRewardVideoAd(): Promise<AdMobRewardItem>;
}
