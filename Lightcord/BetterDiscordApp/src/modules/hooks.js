import BDV2 from "./v2"
const {useState} = BDV2.react


export function useForceUpdate(){
    const [,setValue] = useState(0)

    return function forceUpdate(){
        setValue(e => e+1)
    }
}