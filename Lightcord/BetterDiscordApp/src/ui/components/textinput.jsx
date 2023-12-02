import BDV2 from "../../modules/v2";

const React = BDV2.React;

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
        this.onChange = this.onChange.bind(this);
        this.emitChange = this.emitChange.bind(this);
        this.input = <Lightcord.Api.Components.inputs.TextInput.original ref={console.log} onChange={this.onChange} value={this.state.value} placeholder={this.props.placeholder} onBlur={this.emitChange}/>
    }

    onChange(value) {
        console.log(value, this.props)
        if (this.props.disabled) return;
        this.props.onChange(value);
        this.setState({value: value});
    }

    emitChange(){
        console.log(`Should emit changes.`)
    }

    render() {
        return this.input
    }
}