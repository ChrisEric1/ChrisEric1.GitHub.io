const { EventEmitter } = require("events")

class Logger extends EventEmitter{
    constructor(name){
        super()
        this.name = name
    }

    log(...data){
        console.log(...["%c["+this.name+"]", "\n  font-weight: bold;\n  color: purple;\n", ...data])
    }

    warn(...data){
        console.warn(...["%c["+this.name+"]", "\n  font-weight: bold;\n  color: purple;\n", ...data])
    }
}

module.exports = Logger
module.exports.default = Logger