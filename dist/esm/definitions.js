/**
 *  For more information:
 *  https://developers.google.com/admob/ios/banner#banner_sizes
 *  https://developers.google.com/android/reference/com/google/android/gms/ads/AdSize
 * */
export var AdSize;
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
})(AdSize || (AdSize = {}));
/**
 * @see https://developer.android.com/reference/android/widget/LinearLayout#attr_android:gravity
 */
export var AdPosition;
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
})(AdPosition || (AdPosition = {}));
//# sourceMappingURL=definitions.js.map