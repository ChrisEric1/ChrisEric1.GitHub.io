"use strict";


// This is a copy from LightcordApi/dist/components/inputs/Button.js
// Source code: LightcordApi/src/components/inputs/Button.ts

const ModuleLoader = require("./loaders/modules");

Object.defineProperty(exports, "__esModule", { value: true });
const WebpackLoader_1 = {
    default: {
        findByUniqueProperties: (props) => {
            return ModuleLoader.get((mod) => {
                if(mod.__esModule && ("default" in mod)){
                    let doesMatch = true
                    for(let prop of props){
                        if(!Object.prototype.hasOwnProperty.call(mod.default, prop))doesMatch = false
                    }
                    if(doesMatch)return true
                }
                for(let prop of props){
                    if(!Object.prototype.hasOwnProperty.call(mod, prop))return false
                }
                return true
            })[0]
        }
    }
}
let ButtonModules;
let Button = /** @class */ (() => {
    class Button extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hover: false
            };
        }
        get modules() {
            return ButtonModules || (ButtonModules = [
                WebpackLoader_1.default.findByUniqueProperties(["_horizontal"]),
                WebpackLoader_1.default.findByUniqueProperties(["colorTransparent"]),
                WebpackLoader_1.default.findByUniqueProperties(["buttonWrapper"]),
                WebpackLoader_1.default.findByUniqueProperties(["ButtonColors"]),
            ]);
        }
        render() {
            let [flexModule, euhModule1, buttonModule, colorsModule] = this.modules;
            let props = {};
            if (this.props) {
                if ("color" in this.props) {
                    props.color = this.props.color;
                }
                if ("children" in this.props) {
                    props.children = this.props.children;
                }
                if ("onClick" in this.props) {
                    props.onClick = this.props.onClick;
                }
                if ("wrapper" in this.props) {
                    props.wrapper = !!this.props.wrapper;
                }
                if ("look" in this.props) {
                    props.look = this.props.look;
                }
                if ("size" in this.props) {
                    props.size = this.props.size;
                }
                if ("hoverColor" in this.props) {
                    props.hoverColor = this.props.hoverColor;
                }
            }
            if (props.color) {
                props.color = props.color.toLowerCase();
                if (!Button.Colors.includes(props.color)) {
                    props.color = Button.Colors[0];
                }
            }
            else {
                props.color = Button.Colors[0];
            }
            if (props.look) {
                props.look = props.look.toLowerCase();
                if (!Button.Looks.includes(props.look)) {
                    props.look = Button.Looks[0];
                }
            }
            else {
                props.look = Button.Looks[0];
            }
            if (props.size) {
                props.size = props.size.toLowerCase();
                if (!Button.Sizes.includes(props.size)) {
                    props.size = Button.Sizes[0];
                }
            }
            else {
                props.size = Button.Sizes[0];
            }
            if (props.hoverColor) {
                props.hoverColor = props.hoverColor.toLowerCase();
                if (!Button.HoverColors.includes(props.hoverColor)) {
                    props.hoverColor = Button.HoverColors[0];
                }
            }
            else {
                props.hoverColor = Button.HoverColors[0];
            }
            let buttonSize = props.size ? colorsModule.ButtonSizes[props.size.toUpperCase()] || "" : "";
            if (buttonSize)
                buttonSize = " " + buttonSize;
            let hoverColor = props.hoverColor ? colorsModule.ButtonHovers[props.hoverColor.toUpperCase()] || "" : "";
            if (hoverColor)
                hoverColor = " " + hoverColor;
            props.onClick = typeof props.onClick === "function" ? props.onClick : () => { };
            if (typeof props.wrapper !== "boolean")
                props.wrapper = true;
            let hover = this.state.hover ? euhModule1.hasHover : "";
            if (hover)
                hover = " " + hover;
            let button = React.createElement("button", { type: "button", className: `${flexModule.flexChild} ${euhModule1.button} ${colorsModule.ButtonLooks[props.look.toUpperCase()]} ${colorsModule.ButtonColors[props.color.toUpperCase()]}${buttonSize}${hoverColor}${hover} ${euhModule1.grow}`, style: { flex: "0 1 auto" }, onClick: this.props.onClick, onMouseEnter: (ev) => {
                    if (!hoverColor)
                        return;
                    this.setState({ hover: true });
                }, onMouseLeave: (ev) => {
                    if (!hoverColor)
                        return;
                    this.setState({ hover: false });
                } },
                React.createElement("div", { className: euhModule1.contents }, props.children));
            if (props.wrapper) {
                return React.createElement("div", { className: buttonModule.buttonWrapper }, button);
            }
            return button;
        }
    }
    Button.Colors = ["brand", "grey", "red", "green", "yellow", "primary", "link", "white", "black", "transparent"];
    Button.Looks = ["filled", "inverted", "outlined", "ghost", "link", "blank"];
    Button.Sizes = ["small", "medium", "large", "xlarge", "min", "max", "icon", "none"];
    Button.HoverColors = ["default", ...Button.Colors];
    return Button;
})();
exports.default = Button;
//# sourceMappingURL=Button.js.map