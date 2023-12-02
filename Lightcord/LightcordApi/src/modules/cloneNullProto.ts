/**
 * Recreate the given object without the __proto__. Useful for better formatting when output in console.
 * @param obj The object to recreate
 */
export default function cloneNullProto<Obj=any>(obj:Obj):Obj{
    let o = Object.create(null)
    Object.keys(obj).forEach(k => {
        o[k] = obj[k]
    })
    return o
}