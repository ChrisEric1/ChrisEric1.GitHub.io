import WebpackLoader from "../../modules/WebpackLoader"

type CodeBlockProps = {
    language?: string,
    content: string
}

let CodeBlockModules
export default class CodeBlock extends React.Component<CodeBlockProps> {
    static defaultProps:CodeBlockProps = {
        language: "plaintext",
        content: ""
    }
    
    get modules(){
        return CodeBlockModules || (CodeBlockModules = [
            WebpackLoader.find(e => e.markup),
            WebpackLoader.find(e => e.messageContent),
            WebpackLoader.find(e => e.scrollbarGhostHairline),
            WebpackLoader.find(e => e.listLanguages),
            WebpackLoader.find(e => e.marginBottom8)
        ])
    }

    render(){
        let [
            messageModule1,
            messageModule2,
            scrollbarModule1,
            hightlightJS,
            marginModule1
        ] = this.modules

        const code = this.props.language === "plaintext" ? <code className={`${scrollbarModule1.scrollbarGhostHairline} hljs`}>
            {this.props.content}
        </code> : <code className={`${scrollbarModule1.scrollbarGhostHairline} hljs`} 
            dangerouslySetInnerHTML={{__html: hightlightJS.highlight(this.props.language, this.props.content).value}} />
        return (<div className={`${messageModule1.markup} ${messageModule2.messageContent}`}>
            <pre>
                {code}
            </pre>
            <div className={marginModule1.marginBottom8}></div>
        </div>)
    }

    static get AllPreviews(){
        return AllPreviews || (() => {
            AllPreviews = []
            AllPreviews.push([
                {
                    content: "console.log(\"Exemple code\")"
                }
            ])
            AllPreviews.push([
                {
                    language: "js"
                },
                {
                    language: "plaintext"
                },
                ...CodeBlock.prototype.modules[3].listLanguages().filter(e => e !== "js").map(e => ({language: e}))
            ])
            return AllPreviews
        })()
    }
}
let AllPreviews