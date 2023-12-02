import BDV2 from "../../modules/v2";

const React = BDV2.React;

export default class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: this.props.checked};
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        if (this.props.disabled) return;
        this.props.onChange(value);
        this.setState({checked: value});
    }

    render() {
        return <Lightcord.Api.Components.inputs.Switch onChange={this.onChange} value={this.state.checked} />
    }
}