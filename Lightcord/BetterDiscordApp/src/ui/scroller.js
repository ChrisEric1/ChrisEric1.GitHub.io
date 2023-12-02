import BDV2 from "../modules/v2";

export default class V2C_Scroller extends BDV2.reactComponent {

    constructor(props) {
        super(props);
    }

    render() {
        //scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d scrollerFade-1Ijw5y
        const scrollerModule1 = BDModules.get(e => e.scrollerWrap)[0]
        const scrollerModule2 = BDModules.get(e => e.sidebarRegionScroller)[0]
        const scrollerTypes = BDModules.get(e => e.thin)[0]
        let wrapperClass = `${scrollerModule1.scrollerWrap} ${scrollerModule1.scrollerThemed} ${scrollerModule1.themeGhostHairline}${this.props.fade ? " "+scrollerModule1.scrollerFade : ""}`;
        let scrollerClass = scrollerModule1.scroller+" scroller";                                          /* fuck */
        if (this.props.sidebar) scrollerClass += ` ${scrollerModule2.sidebarRegionScroller} ${scrollerTypes.thin} ${scrollerTypes.scrollerBase} ${scrollerTypes.fade}`
        if (this.props.contentColumn) {
            scrollerClass += `${scrollerModule2.contentRegionScroller} ${scrollerTypes.auto} content-region-scroller scroller`
            wrapperClass = `${scrollerModule2.contentTransitionWrap}`;
        }
        const {children} = this.props;
        if (this.props.sidebar) {
            return BDV2.react.createElement(
                    "div",
                    {key: "scroller", ref: "scroller", className: scrollerClass},
                    children
                );
        }
        return BDV2.react.createElement(
            "div",
            {key: "scrollerwrap", className: wrapperClass},
            BDV2.react.createElement(
                "div",
                {key: "scroller", ref: "scroller", className: scrollerClass},
                children
            )
        );
    }
}

const originalRender = V2C_Scroller.prototype.render;
Object.defineProperty(V2C_Scroller.prototype, "render", {
    enumerable: false,
    configurable: false,
    set: function() {console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins");},
    get: () => originalRender
}); 