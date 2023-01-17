import BDV2 from "../../modules/v2";
import SearchIcon from "../icons/search";

const React = BDV2.React;

export default class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            focused: false
        }
    }
    render() {
        const className = ["bd-search-wrapper"]
        if(this.state.focused)className.push("focused")
        return <div className={className.join(" ")}>
                    <input onChange={this.props.onChange} onKeyDown={this.props.onKeyDown} type="text" 
                    className="bd-search" placeholder={this.props.placeholder} maxLength="50" 
                    onFocus={() => {
                        this.setState({focused: true})
                    }} onBlur={() => {
                        this.setState({focused: false})
                    }}/>
                    <SearchIcon />
                </div>;
    }
}