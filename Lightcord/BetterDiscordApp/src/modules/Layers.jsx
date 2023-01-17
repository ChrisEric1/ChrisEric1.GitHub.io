import Utils from "./utils";
import v2 from "./v2";
import { uuidv4 } from "./distant";
import { timingSafeEqual } from "crypto";

export default new class Layers {
    constructor(){
        this.layers = []
        window.Lightcord.BetterDiscord.Layers = this
    }

    get isInjected(){
        return !!document.querySelector("div.Layers.injected")
    }

    inject(){
        if(this.isInjected)return
        let [
            classNameLayers
        ] = [
            Utils.removeDa(v2.WebpackModules.find(e => e.layers && e.layer).layers)
        ]
        const layers = document.querySelector("."+classNameLayers);
        if (!layers) return false;
        const ReactInstance = Lightcord.Api.Utils.FindReact(layers, 1)
        if(!ReactInstance)return layers
        this.ReactInstance = ReactInstance
        let render = ReactInstance.render
        ReactInstance.render = () => {
            let returnValue = render.call(ReactInstance)
            let classList = returnValue.props.children[1].props.className.split(" ")
            classList.push("Layers")
            classList.push("injected")
            returnValue.props.children[1].props.className = classList.join(" ")

            this.layers.forEach(layer => {
                returnValue.props.children[1].props.children.push(layer[1])
            })

            return returnValue
        }
        ReactInstance.forceUpdate()
    }

    createLayer(children, props = {}){
        let id = uuidv4()
        let layer = null
        this.layers.push([id, <Layer {...props} getLayer={lay => {
            layer = lay
        }} key={id} id={id} remove={() => {
            let index = this.layers.findIndex(e => e[0] === id)
            if(index === -1)return
            this.layers.splice(index, 1)
            layer = null
            if(this.ReactInstance)this.ReactInstance.forceUpdate()
            this.inject()
        }}>{children}</Layer>])
        if(this.ReactInstance)this.ReactInstance.forceUpdate()
        this.inject()
        return {
            remove: () => {
                if(!layer){
                    let index = this.layers.findIndex(e => e[0] === id)
                    if(index === -1)return
                    this.layers.splice(index, 1)
                    layer = null
                    if(this.ReactInstance)this.ReactInstance.forceUpdate()
                    this.inject()
                }else{
                    layer.remove()
                }
            }
        }
    }
}


let LayerModules
export class Layer extends React.Component {
    constructor(){
        super(...arguments)
        this.state = {
            animation: new this.modules[0].default.Value(0)
        } 
        this.props.getLayer(this)
        this.keydown = this.keydown.bind(this)
    }

    keydown(e){
        if (e.which === 27) {
            this.remove()
        }
    }

    get modules(){
        return LayerModules || (LayerModules = [
            v2.WebpackModules.find(e => e.default && e.default.Value && e.default.div)
        ])
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.keydown)
    }

    componentDidMount(ev){
        window.addEventListener("keydown", this.keydown)
    }

    remove(){
        this.props.remove()
    }

    componentWillEnter(ev){
        this.modules[0].default.timing(this.state.animation, {
            toValue: 1,
            duration: 100
        }).start(ev)
    }

    componentWillLeave(ev){
        this.modules[0].default.timing(this.state.animation, {
            toValue: 0,
            duration: 100
        }).start(ev)
    }

    render(){
        let interpolation = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1.07, 1]
        })
        let style = {
            opacity: this.state.animation,
            transform: [{
                scale: interpolation
            }]
        }
        let Div = this.modules[0].default.div
        return <Div className={[__SECRET_EMOTION__.css({
            backgroundColor:"var(--background-primary)",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            display: "flex",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitBoxDirection: "normal",
            msFlexDirection: "column",
            flexDirection: "column",
            zIndex: 101
        }),process.platform==="win32"?__SECRET_EMOTION__.css({
            top: "-22px",
            paddingTop: "22px"
        }):null,...(this.props.className?this.props.className.split(" "):[])].filter(e=>e).join(" ") || null} style={style}>
            {this.props.children(() => {
                this.remove()
            })}
        </Div>
    }
}
Layer.defaultProps = {
    id: null,
    children: null
}