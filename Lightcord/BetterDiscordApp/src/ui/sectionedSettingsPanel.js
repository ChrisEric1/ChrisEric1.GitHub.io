import BDV2 from "../modules/v2";

import SettingsGroup from "./settingsGroup";
import MarginTop from "./margintop";

export default class V2C_SectionedSettingsPanel extends BDV2.reactComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return this.props.sections.map((section, i) => {
            return [
                i !== 0 ? BDV2.react.createElement(MarginTop, {}) : null,
                BDV2.react.createElement(SettingsGroup, Object.assign({}, section, {onChange: this.props.onChange}))
            ]
        })
    }
}