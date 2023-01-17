export default function unfreeze<T extends any>(o: Readonly<T>):T{
    var oo = undefined;
    if (o instanceof Array) {
        oo = [];
        var clone = function(v) {
            oo.push(v)
        };
        o.forEach(clone);
    } else if (o instanceof String) {
        oo = new String(o).toString();
    } else if (typeof o == 'object') {
        oo = {};
        for (var property in o) {
            oo[property] = o[property];
        }
    }
    return oo;
}
declare global {
    interface ObjectConstructor {
        unfreeze: <T extends any>(obj: Readonly<T>) => T
    }
}
Object.unfreeze = unfreeze