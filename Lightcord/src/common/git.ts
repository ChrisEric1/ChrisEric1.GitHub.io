import * as child_process from "child_process"

let commit_id = "{commit}"

const defaultString = Buffer.from([
    123, 99, 111,
    109, 109, 105,
    116, 125
]).toString("utf8")
export function getCommitID(){
    if(commit_id === defaultString){
        try{
            return commit_id = child_process.execSync("git rev-parse HEAD").toString()
        }catch(e){
            console.error(e)
            return "{Unknown}"
        }
    }else{
        return commit_id
    }
}