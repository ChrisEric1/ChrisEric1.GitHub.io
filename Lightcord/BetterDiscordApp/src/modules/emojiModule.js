import BDV2 from "./v2";
import Utils from "./utils";
import { settings } from "../0globals";

const Constants = {
    EmojiRegex: /<a?\.(\w+)\.(\d+)>/g
}

let CustomEmojiModule = BDModules.get(e => e.CustomEmoji)[0]
let EmojiModuleApi = BDModules.get(e => e.default && e.default.getCustomEmojiById)[0]
let AutocompleteModule = BDModules.get(e => e.default && e.default.displayName === "Autocomplete")[0]
let AutoCompletionTemplates = BDModules.get(e => e.getAutocompleteOptions)[0]
let EmojiModuleQuery = BDModules.get(e => e.default && e.default.queryEmojiResults)[0]
let Messages = BDModules.get(e => e.default && e.default.Messages && e.default.Messages.EMOJI_MATCHING)[0]
let guildModule = BDModules.get(e => e.default && e.default.getGuild && e.default.getGuilds && !e.default.isFetching)[0]
let emojiSearch = BDModules.get(e => e.default && e.default.getDisambiguatedEmojiContext)
const appSettings = Lightcord.Api.settings

export default new class EmojiModule {

    constructor() {
        this.init().catch(err => Utils.err("EmojiModule", "An error occured", err))
    }

    async init() {
        /** Emoji AutoComplete */
        if(!AutocompleteModule)AutocompleteModule = await window.Lightcord.Api.ensureExported(e => e.default && e.default.displayName === "Autocomplete")
        if(!AutoCompletionTemplates)AutoCompletionTemplates = await window.Lightcord.Api.ensureExported(e => e.getAutocompleteOptions)
        if(!EmojiModuleQuery)EmojiModuleQuery = await window.Lightcord.Api.ensureExported(e => e.default && e.default.queryEmojiResults)
        if(!Messages)Messages = await window.Lightcord.Api.ensureExported(e => e.default && e.default.Messages && e.default.Messages.EMOJI_MATCHING)
        if(!guildModule)guildModule = await window.Lightcord.Api.ensureExported(e => e.default && e.default.getGuild && e.default.getGuilds && !e.default.isFetching)
        if(!emojiSearch)emojiSearch = await window.Lightcord.Api.ensureExported(e => e.default && e.default.getDisambiguatedEmojiContext)

        const setting = settings["Emoji Prefix"]
        const getValue = () => {
            const value = appSettings.get("BD_"+setting.id, setting.default)
            if(typeof value !== "string")return setting.default
            return value
        }

        if(AutocompleteModule && AutoCompletionTemplates && EmojiModuleQuery && Messages && guildModule && emojiSearch){
            Utils.log("EmojiModule", `Patching getAutocompleteOptions of AutoCompletionTemplates`, AutoCompletionTemplates)
            const getAutocompleteOptions = AutoCompletionTemplates.getAutocompleteOptions
            AutoCompletionTemplates.getAutocompleteOptions = function(e, t, n, r, a){
                const value = getAutocompleteOptions.call(this, ...arguments)
                value.LIGHTCORD_EMOJIS = {
                    matches(arg1, arg2){
                        let condition = arg2.length > 1 && getValue() === arg1
                        setEmojiUsable(condition)
                        return condition
                    },
                    queryResults(t){
                        let results = EmojiModuleQuery.default.queryEmojiResults(t, e)
                        return results
                    },
                    renderResults(e, t, n, r, a){
                        return D(e, t, a.emojis, n, r, Messages.default.Messages.EMOJI_MATCHING, Messages.default.Messages.EMOJI, AutocompleteModule.default.Emoji, (function(e) {
                            return {
                                emoji: e,
                                key: e.id || e.uniqueName || e.name,
                                sentinel: getValue(),
                                guild: null != e.guildId ? guildModule.default.getGuild(e.guildId) : null
                            }
                        }), (function(e) {
                            return getValue() + e + getValue()
                        }))
                    },
                    getPlainText(id, guild){
                        var emojis = guild.emojis;
                        if (null == emojis || null == emojis[id]) return "";
                        var emoji = emojis[id],
                            isAnimated = emoji.animated ? "a" : "";
                        return emoji.managed || null == emoji.id ? "." + emoji.name + "." : "<" + isAnimated + "." + (emoji.originalName || emoji.name) + "." + emoji.id + ">"
                    },
                    getRawText(id, guild){
                        var emojis = guild.emojis;
                        if (null == emojis || null == emojis[id]) return "";
                        var emoji = emojis[id],
                            isAnimated = emoji.animated ? "a" : "";
                        return emoji.managed || null == emoji.id ? "." + emoji.name + "." : "<" + isAnimated + "." + (emoji.originalName || emoji.name) + "." + emoji.id + ">"
                    }
                }
                return value
            }
        } else {
            Utils.err("EmojiModule", "Couldn't start auto-completion of Lightcord's emojis.")
        }

        /** Emoji display */
        while (!BDV2.MessageComponent) await new Promise(resolve => setTimeout(resolve, 100));

        if (!this.cancelEmojiRender) { // TODO: Proper emoji formatting / rendering
            this.cancelEmoteRender = Utils.monkeyPatch(BDV2.MessageComponent, "default", {before: (data) => {
                const message = Utils.getNestedProp(data.methodArguments[0], "childrenMessageContent.props.message")
                if(!message)return
                const content = Utils.getNestedProp(data.methodArguments[0], "childrenMessageContent.props.content")
                if(!content || !content.length)return

                /**
                 * @type {{
                 *  raw: string,
                 *  name: string,
                 *  id: string,
                 *  animated: boolean
                 * }[]}
                 */
                let emojis = []

                const newContent = []
                for(let node of content) {
                    if (typeof(node) !== "string") {
                        newContent.push(node)
                        continue
                    }
                    let parsed;
                    let hasParsed = false

                    do {
                        parsed = Constants.EmojiRegex.exec(node);
                        if (parsed) {
                            hasParsed = true
                            if(!EmojiModuleApi)EmojiModuleApi = BDModules.get(e => e.default && e.default.getCustomEmojiById)[0]
                            const emoji = EmojiModuleApi.default.getCustomEmojiById(parsed[2])
                            if(emoji){
                                emojis.push({
                                    animated: emoji.animated,
                                    name: emoji.name,
                                    id: emoji.id,
                                    raw: parsed[0]
                                })
                            }else{
                                emojis.push({
                                    animated: parsed[0].startsWith("<a"),
                                    name: parsed[1],
                                    id: parsed[2],
                                    raw: parsed[0]
                                })
                            }
                        }
                    } while (parsed);

                    if(hasParsed){
                        const words = node.split(" ").map((word, index, arr) => {
                            if(!word)return ""
                            const emoji = emojis.find(e => e.raw == word)
                            if(!emoji)return word
                            if(!CustomEmojiModule)CustomEmojiModule = BDModules.get(e => e.CustomEmoji)[0]
                            return React.createElement(CustomEmojiModule.CustomEmoji, {
                                emoji: {
                                    name: `${getValue()}${emoji.name}${getValue()}`,
                                    emojiId: emoji.id,
                                    animated: emoji.animated,
                                    jumboable: arr.length === 1 && content.length === 1
                                }
                            })
                        }).reduce((previous, current) => {
                            if(previous.length === 0)return [current]
                            if(typeof current === "string"){
                                if(typeof previous[previous.length - 1] === "string"){
                                    previous[previous.length - 1] += ` ${current}`
                                    return previous
                                }
                                previous.push(" "+current)
                                return previous
                            }
                            previous.push(" ", current)
                            return previous
                        }, [])
                        newContent.push(...words)
                    }else{
                        newContent.push(node)
                    }
                }
                while(data.methodArguments[0].childrenMessageContent.props.content[0]){
                    data.methodArguments[0].childrenMessageContent.props.content.shift()
                }
                while(newContent[0]){
                    data.methodArguments[0].childrenMessageContent.props.content.push(newContent.shift())
                }
            }});
        }/*
        let userModule
        window.Lightcord.Api.ensureExported(e => e.default && e.default.displayName === "EmojiPickerListRow")
        .then(EmojiPickerListRow => {
            let classs = EmojiPickerListRow.default
            EmojiPickerListRow.default = class EmojiPickerListRow extends React.Component {
                constructor(props){
                    super(props)
                }

                render(){
                    if(!userModule)userModule = BDModules.get(e => e.default && e.default.getCurrentUser)[0]
                    if(!userModule)return React.createElement(classs, this.props)
                    let user = userModule.default.getCurrentUser()
                    if(!user.hasPremiumSubscription)return React.createElement(classs, this.props)

                    return React.createElement(classs, Object.assign({}, this.props, {
                        emojiDescriptors: this.props.emojiDescriptors.map(e => {
                            e.isDisabled = false
                        })
                    }))
                }
            }
            EmojiPickerListRow.default.displayName = "EmojiPickerListRow"
        })*/
    }

    disable(){
        if (!this.cancelEmoteRender) return;
        this.cancelEmoteRender();
        this.cancelEmoteRender = null;
    }

    start(){

    }
}

function D(e, t, n, r, o, i, s, u, l, c) {
    if (null == n || 0 === n.length) return null;
    var d = n.map((function(e, n) {
        return React.createElement(u, Object.assign({
            onClick: o,
            onHover: r,
            selected: t === n,
            index: n
        }, l(e, n)))
    }));
    return [R(i, s, e, c), d]
}

function R(e, t, n, r) {
    var a = (n.length > 0 ? e.format({
        prefix: r(n)
    }) : t)
    if(Array.isArray(a)){
        a.unshift(React.createElement("strong", {}, "[Lightcord] "))
    }else{
        a = "[LIGHTCORD] "+a
    }
    return React.createElement(AutocompleteModule.default.Title, {
        title: a
    }, a)
}
R.displayName = "renderHeader";

let EmojiFilterModule = BDModules.get(e => e.default && e.default.isEmojiDisabled)[0]
let isEmojiDisabled = EmojiFilterModule && EmojiFilterModule.default.isEmojiDisabled
let isUsable = false
let hasPatched = false

function setEmojiUsable(usable){
    isUsable = usable
    if(hasPatched)return
    if(!EmojiFilterModule)EmojiFilterModule = BDModules.get(e => e.default && e.default.isEmojiDisabled)[0]
    if(!EmojiFilterModule)return
    if(!isEmojiDisabled)isEmojiDisabled = EmojiFilterModule.default.isEmojiDisabled

    hasPatched = true
    EmojiFilterModule.default.isEmojiDisabled = function(emoji){
        if(isUsable){
            if(emoji.surrogates || emoji.diversity)return true
            return false
        }
        return isEmojiDisabled.call(this, ...arguments)
    }
}
