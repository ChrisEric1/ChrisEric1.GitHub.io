import BDV2 from "../modules/v2";

export default class V2C_Checkbox extends BDV2.reactComponent {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.setInitialState();
    }

    setInitialState() {
        this.state = {
            checked: this.props.checked || false
        };
    }

    render() {
        return BDV2.react.createElement(
            "li",
            null,
            BDV2.react.createElement(
                "div",
                {className: "checkbox "+BDModules.get(e => e.checkboxElement)[0].checkbox, onClick: this.onClick},
                BDV2.react.createElement(
                    "div",
                    {className: "checkbox-inner "+BDModules.get(e => e.checkboxInner)[0].checkboxInner},
                    BDV2.react.createElement("input", {className: BDModules.get(e => e.checkboxElement)[0].checkboxElement, checked: this.state.checked, onChange: () => {}, type: "checkbox"}),
                    BDV2.react.createElement("span", null)
                ),
                BDV2.react.createElement(
                    "span",
                    null,
                    this.props.text
                )
            )
        );
    }

    onClick() {
        this.props.onChange(this.props.id, !this.state.checked);
        this.setState({
            checked: !this.state.checked
        });
    }
}