import BDV2 from "../modules/v2";

export default class V2C_ContentColumn extends BDV2.reactComponent {
    constructor(props) {
        super(props);
    }

    static get displayName() {return "ContentColumn";}

    render() {
        //let contentModule = BDModules.get(e => e.contentColumn)[0]
        let title = this.props.title ? BDV2.react.createElement("h2", {className: "ui-form-title h2 margin-reset margin-bottom-20"}, this.props.title) : null
        return [
            title,
            this.props.children
        ]
        return BDV2.react.createElement(
            "div",
            {className: contentModule.contentColumn + " "+contentModule.contentColumnDefault+" content-column default", style: {padding: "60px 40px 0px"}},
            title,
            this.props.children
        );
    }
}