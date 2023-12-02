export default function excludeProperties<Obj = any>(obj:Obj, props:(keyof Obj)[]):Partial<Obj>{
    let newObj = {}

    Object.keys(obj).forEach((k) => {
        if(props.includes(k as keyof Obj))return
        newObj[k] = obj[k]
    })

    return newObj
}