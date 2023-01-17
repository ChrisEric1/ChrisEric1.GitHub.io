import BDV2 from "../modules/v2";

import XSvg from "./xSvg";

export default class V2C_Tools extends BDV2.reactComponent {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        let toolsModule = BDModules.get(e => e.toolsContainer)[0]
        let containerModule = BDModules.get(e => e.container && e.closeButton && e.closeButtonBold)[0]
        return BDV2.react.createElement("div", {className: "tools-container "+toolsModule.toolsContainer},
            BDV2.react.createElement("div", {className: "tools "+toolsModule.tools},
                BDV2.react.createElement("div", {className: containerModule.container},
                    BDV2.react.createElement("div",
                        {className: "btn-close "+containerModule.closeButton, onClick: this.onClick},
                        BDV2.react.createElement(XSvg, null)
                    ),
                    BDV2.react.createElement(
                        "div",
                        {className: "esc-text "+containerModule.keybind},
                        "ESC"
                    )
                )
            )
        );
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
        const closeButton = document.querySelector("."+BDModules.get(e => e.closeButton && e.keybindBold)[0].closeButton.split(" ")[0]);
        if (closeButton) closeButton.click();
    }
}