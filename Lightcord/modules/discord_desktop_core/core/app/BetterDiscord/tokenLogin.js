"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const loginContainerModule = BDModules.get(e => e.mainLoginContainer)[0];
const colors = BDModules.get(e => e.colorHeaderPrimary)[0];
const sizes = BDModules.get(e => e.size24)[0];
const authBoxModule = BDModules.get(e => e.title && typeof e.title === "string" && e.authBoxPadding)[0];
const marginModule = BDModules.get(e => e.marginBottom8)[0];
const titleModule = BDModules.get(e => e.h5)[0];
const inputModule = BDModules.get(e => e.inputWrapper)[0];
const contentModule = BDModules.get(e => e.contents)[0];
const verticalSeparatorModule = BDModules.get(e => e.verticalSeparator)[0];
const loginModule = BDModules.get(e => e.default && e.default.loginToken)[0].default;

class TokenLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return [/*#__PURE__*/React.createElement("div", {
      class: verticalSeparatorModule.verticalSeparator
    }), /*#__PURE__*/React.createElement("div", {
      className: loginContainerModule.mainLoginContainer
    }, /*#__PURE__*/React.createElement("div", {
      className: `${colors.colorHeaderPrimary} ${sizes.size24} ${authBoxModule.title} ${marginModule.marginBottom8}`
    }, "Connect with Token"), /*#__PURE__*/React.createElement("div", {
      className: `${colors.colorHeaderSecondary} ${sizes.size16}`
    }, "Input your token below"), /*#__PURE__*/React.createElement("div", {
      className: `${authBoxModule.block} ${marginModule.marginTop20}`
    }, /*#__PURE__*/React.createElement("div", {
      className: marginModule.marginBottom20
    }, /*#__PURE__*/React.createElement(TokenInput, {
      ref: "input"
    })), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: `${marginModule.marginBottom8} ${authBoxModule.button} ${contentModule.button} ${contentModule.lookFilled} ${contentModule.colorBrand} ${contentModule.sizeLarge} ${contentModule.fullWidth} ${contentModule.grow}`,
      onClick: (ev) => {
        if (!this.refs.input.state.value) {
          this.refs.input.setState({
            error: "This field is necessary"
          });
          return;
        }

        loginModule.loginToken(this.refs.input.state.value);
        ev.stopPropagation();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: contentModule.contents
    }, "Login"))))];
  }

}

exports.default = TokenLogin;

class TokenInput extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      error: null
    };
  }

  render() {
    return [/*#__PURE__*/React.createElement("h5", {
      className: `${colors.colorStandard} ${sizes.size14} ${titleModule.h5} ${titleModule.defaultMarginh5}${this.state.error ? " " + titleModule.error : ""}`
    }, "Token", this.state.error ? /*#__PURE__*/React.createElement("span", {
      class: titleModule.errorMessage
    }, /*#__PURE__*/React.createElement("span", {
      class: titleModule.errorSeparator
    }, "-"), this.state.error) : null), /*#__PURE__*/React.createElement("div", {
      className: inputModule.inputWrapper
    }, /*#__PURE__*/React.createElement("input", {
      className: `${inputModule.inputDefault}${this.state.error ? " " + inputModule.inputError : ""}`,
      name: "token",
      type: "token",
      placeholder: true,
      "aria-label": "Token",
      autoComplete: "off",
      maxLength: 999,
      spellCheck: "false",
      value: this.state.value,
      onChange: ev => {
        this.setState({
          value: ev.target.value
        });
      }
    }))];
  }

}