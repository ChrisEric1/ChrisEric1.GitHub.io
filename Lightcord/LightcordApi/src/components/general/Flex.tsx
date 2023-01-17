import WebpackLoader from "../../modules/WebpackLoader"
import { ReactNode, CSSProperties } from "react"


type FlexProps = {
    className?: string,
    align?: string,
    justify?: string,
    direction?: string,
    shrink?: number,
    grow?: number,
    basis?: "auto"|string,
    style?: CSSProperties
}

function getModules(){
    return FlexModules || (FlexModules = [
        (() => {
            let Flex = WebpackLoader.find(e => e.default && e.default.displayName === "Flex")
            if(Flex)Flex = Flex.default
            return Flex
        })()
    ])
}

let FlexModules
export default class Flex extends React.Component<FlexProps> {
    constructor(props:FlexProps){
        super(props)
    }

    get modules(){
        return getModules()
    }

    render(){
        let [
            FlexComponent
        ] = this.modules

        return <FlexComponent {...this.props} />
    }

    static get Direction(){
        return getModules()[0].Direction as {
            VERTICAL: string,
            HORIZONTAL: string,
            HORIZONTAL_REVERSE: string
        }
    }

    static get Align(){
        return getModules()[0].Align as {
            START: string,
            END: string,
            CENTER: string,
            STRETCH: string,
            BASELINE: string
        }
    }

    static get Justify(){
        return getModules()[0].Justify as {
            START: string,
            END: string,
            CENTER: string,
            BETWEEN: string,
            AROUND: string
        }
    }

    static get Wrap(){
        return getModules()[0].Justify as {
            NO_WRAP: string,
            WRAP: string,
            WRAP_REVERSE: string
        }
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([{
                children: "Your components here."
            }])
            return AllPreviews
        })()
    }
}
let AllPreviews

export type FlexChildProps = {
    children?: ReactNode,
    className?: string,
    grow?: number,
    style?: CSSProperties,
    wrap?: boolean
}
export class FlexChild extends React.Component<FlexChildProps> {
    get modules(){
        return getModules()
    }

    render(){
        const [
            FlexComponent
        ] = this.modules

        return <FlexComponent.Child {...this.props} />
    }
}