import { ReactNode, CSSProperties } from "react"
import NOOP from "../../modules/noop"
import Title from "./Title"

type TabsProps = {
    children?: ReactNode,
    tabs: {label: string, id: string}[],
    active?: string
    onChange?: (tab: string) => void,
    style?: CSSProperties
}

export default class Tabs extends React.Component<TabsProps, {
    active: string
}> {
    static defaultProps:TabsProps = {
        children: null,
        tabs: [{label: "No tabs was passed to <Tabs>.", id: "none"}],
        active: null,
        onChange: NOOP,
        style: {}
    }
    
    constructor(props:TabsProps){
        super(props)
        this.state = {
            active: this.props.active || null
        }
    }

    tabsElements:Tab[] = []
    
    get tabs():Tabs["props"]["tabs"]{
        return this.props.tabs || []
    }

    changeTab(tab:string){
        if(tab === this.state.active)return
        if(this.props.onChange)this.props.onChange(tab)
        this.setState({
            active: tab
        })
        this.tabsElements.forEach(e => e.setActive(tab === e.props.id))
    }

    render(){
        return (<div className="lc-tabWrapper" style={this.props.style}>
            <div className="lc-tabnav" style={{flex: "0 1 auto"}}>
                {this.tabs.map(tab => {
                    return React.createElement(Tab, {TabContainer: this, title: tab.label, id: tab.id, key: Buffer.from(tab.label+":"+tab.id, "utf8").toString("base64")})
                })}
            </div>
            <div className="lc-tab">
                {this.props.children}
            </div>
        </div>)
    }   

    isActive(tab){
        return this.state.active === tab
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([
                {
                    children: (<div style={{marginTop: "20px", marginBottom: "20px"}}>
                        <div style={{
                            backgroundColor: "var(--background-primary)", 
                            padding: "30px 30px", 
                            borderRadius: "8px"
                        }} className="lc-tab-box-shadow">
                            <Title>Preview tabs</Title>
                        </div>
                    </div>)
                }
            ], [
                {
                    tabs: [
                        {
                            label: "Active tab",
                            id: "1"
                        },
                        {
                            label: "Unactive tab",
                            id: "2"
                        }
                    ]
                }
            ], [
                {
                    active: "1"
                }
            ], [
                {
                    onChange: (tabId) => {}
                }
            ])
            return AllPreviews
        })()
    }
}
let AllPreviews

export class Tab extends React.Component<{
    TabContainer: Tabs, 
    title: string, 
    id: string
}, {
    active: boolean
}> {
    constructor(props){
        super(props)

        this.state = {
            active: props.TabContainer.isActive(props.id)
        }

        this.props.TabContainer.tabsElements.push(this)
    }

    setActive(isActive:boolean){
        this.setState({
            active: !!isActive
        })
    }

    render(){
        let className = `lc-navItem`
        if(this.state.active){
            className += ` lc-navItemActive`
        }else{
            className += ` lc-navItemInactive`
        }
        return (<div className={className} onClick={()=>{
            this.props.TabContainer.changeTab(this.props.id)
        }}>
            {this.props.title}
        </div>)
    }
}