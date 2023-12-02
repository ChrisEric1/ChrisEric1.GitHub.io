/** TODO: Finish DateInput */

import * as React from "react"
import { DateConstants } from "./DateRange"
import WebpackLoader from "../../modules/WebpackLoader"
import { getInternalTextInput } from "./TextInput"
import Button from "./Button"
import ReactDOM = require("react-dom")
import * as DatePicker from "react-datepicker";

export type DateInputProps = {
    className?: string,
    dateFormat?: string,
    defaultValue: Date,
    filterDate?: () => any,
    isModalInput?: boolean,
    maxDate?: Date,
    minDate?: Date,
    onChange?: (value:Date, name:string) => void,
    selectsStart?: boolean,
    showMonthYearPicker?: boolean,
    startDate?: Date,
    endDate?: Date
    style?: React.CSSProperties,
    name: string,
    selectsEnd?: boolean
}
let _datefns
export function getDateFNS():typeof import("date-fns"){
    return _datefns || (_datefns = require("date-fns"))
}
export function getEmotion():typeof import("emotion"){
    return window["__SECRET_EMOTION__"]
}
let DateInputModules
export default class DateInput extends React.Component<DateInputProps, {
    inputResetKey: number,
    isCalendarPickerOpen: boolean,
    calendarRight: number,
    calendarTop: number,
    value: Date
}> {
    static defaultProps:Partial<DateInputProps> = {
        dateFormat: DateConstants.DATE_FORMAT,
        isModalInput: true
    }

    constructor(props:DateInputProps){
        super(props)
        this.state = {
            inputResetKey: 0,
            isCalendarPickerOpen: false,
            calendarRight: null,
            calendarTop: null,
            value: props.defaultValue
        }
    }

    get modules(){
        return DateInputModules || (DateInputModules = [
            WebpackLoader.find(e => e.default && e.default.displayName === "Clickable"),
            WebpackLoader.find(e => e.default && e.default.displayName === "TransitionGroup")
        ])
    }

    inputRef:React.Component

    componentDidUpdate(e:DateInputProps){
        const defaultValue = this.props.defaultValue
        const dateFormat = this.props.dateFormat
        
        if (e.defaultValue !== defaultValue && null != defaultValue) {
            if(!this.inputRef)return
            let str = getDateFNS().format(defaultValue, dateFormat)
            this.inputRef["value"] = str
        }
    }

    closeCalendarPicker(){
        this.setState({
            isCalendarPickerOpen: false
        })
    }

    getCurrentValue(){
        let value = this.state.value
        let dateFormat = this.props.dateFormat;
        if(!value)return
        if(isDateValid(value))return getDateFNS().format(value, dateFormat)
        return null
    }

    handleDateChange(value){
        this.closeCalendarPicker()
        const onChange = this.props.onChange
        const name = this.props.name
        this.setState((state) => {
            return {
                value: value,
                inputResetKey: state.inputResetKey + 1
            }
        }, function() {
            null != onChange && onChange(value, name)
        })
    }

    handleInputBlur(ev){
        const value = this.state.value
        const newvalue = ev.currentTarget.value
        const iso = getDateFNS().parseISO(newvalue);
        if(isDateValid(iso) && value){
            if(iso.valueOf() !== value.valueOf())this.setState(function(state) {
                return {
                    value: iso,
                    inputResetKey: state.inputResetKey + 1
                }
            }, function() {
                const props = this.props
                const onChange = props.onChange
                const name = props.name;
                if(onChange)onChange(iso, name)
            })
        }
    }

    toggleCalendarVisibility(ev){
        const rect:DOMRect = ev.currentTarget.getBoundingClientRect()
        const bottom = rect.bottom
        const right = rect.right
        const innerWidth = window.innerWidth;
        this.setState(function(state) {
            return {
                isCalendarPickerOpen: !state.isCalendarPickerOpen,
                calendarRight: innerWidth - right,
                calendarTop: bottom
            }
        })
    }

    setRef(ref){
        this.inputRef = ref
    }

    renderCalendarPicker(){
        let state = this.state
        let calendarRight = state.calendarRight
        let calendarTop = state.calendarTop
        let isCalendarPickerOpen = state.isCalendarPickerOpen
        let value = state.value
        let props = this.props
        let minDate = props.minDate
        let maxDate = props.maxDate
        let endDate = props.endDate
        let filterDate = props.filterDate
        let startDate = props.startDate
        let selectsEnd = props.selectsEnd
        let selectsStart = props.selectsStart
        let isModalInput = props.isModalInput
        let y = props.showMonthYearPicker;
        return isCalendarPickerOpen ? React.createElement(AnimatedCalendarPicker, {
            value: value ? value : undefined,
            onClickOutside: this.closeCalendarPicker.bind(this),
            onSelect: this.handleDateChange.bind(this),
            minDate: minDate,
            maxDate: maxDate,
            endDate: endDate,
            filterDate: filterDate,
            startDate: startDate,
            selectsEnd: selectsEnd,
            selectsStart: selectsStart,
            right: calendarRight,
            top: calendarTop,
            isModalInput: isModalInput,
            showMonthYearPicker: y
        }) : null
    }

    render(){
        const [
            Clickable,
            TransitionGroup
        ] = this.modules
        let name = this.props.name
        return React.createElement(Clickable.default, {
            className: getEmotion().css({
                position: "relative"
            })
        }, React.createElement(getInternalTextInput(), {
            inputClassName: getEmotion().css({
                paddingRight: "32px"
            }),
            name: name,
            onBlur: this.handleInputBlur.bind(this),
            defaultValue: this.getCurrentValue(),
            inputRef: this.setRef.bind(this)
        }), React.createElement(Button, {
            className: getEmotion().css({
                "&:hover": {
                    opacity: 1
                },
                position: "absolute",
                right: 0,
                top: "50%",
                opacity: .6,
                padding: "8px",
                transform: "translateY(-50%)",
                transition: "opacity .125s"
            }),
            color: "transparent",
            onMouseDown: this.toggleCalendarVisibility.bind(this),
            wrapper: false
            //TODO: Add icon
        }, /*React.createElement(v.default, {
            className: _.default.calendarIcon,
            name: v.IconNames.CALENDAR
        })*/), ReactDOM.createPortal(React.createElement(TransitionGroup.default, {
            component: "div",
            transitionAppear: false
        }, this.renderCalendarPicker()), window.document.body))
    }

    static help = {
        warn: "This component is still `experimental`. Please report issues to [Lightcord's developers](https://github.com/Lightcord/Lightcord/issues)."
    }

    static get AllPreviews(){
        return AllPreviews || (AllPreviews = [
            [
                {
                    dateFormat: DateConstants.DATE_FORMAT
                },
                {
                    dateFormat: "dd/MM/yyyy"
                },
                {
                    dateFormat: "MM/dd/yyyy"
                }
            ],
            [
                {
                    defaultValue: new Date()
                },
                {
                    defaultValue: null
                },
                {
                    defaultValue: new Date(1597061085498)
                }
            ],
            [
                {
                    filterDate: (date) => true
                },
                {
                    filterDate: (date) => {
                        if(date.getDay() !== 0)return false
                        return true
                    }
                }
            ],
            [
                {
                    isModalInput: true
                },
                {
                    isModalInput: false
                }
            ],
            [
                {
                    maxDate: null
                },
                {
                    maxDate: new Date(Date.now() + 6.048e+8)
                }
            ],
            [
                {
                    minDate: null
                },
                {
                    minDate: new Date(Date.now() - 6.048e+8)
                }
            ],
            [
                {
                    onChange: (value, name) => {}
                }
            ],
            [
                {
                    selectsStart: null
                },
                {
                    selectsStart: new Date(Date.now() - (8.64e+7*2))
                }
            ],
            [
                {
                    selectsEnd: null
                },
                {
                    selectsEnd: new Date(Date.now() + (8.64e+7*2))
                }
            ],
            [
                {
                    showMonthYearPicker: false
                },
                {
                    showMonthYearPicker: true
                }
            ],
            [
                {
                    startDate: null
                },
                {
                    endDate: null
                }
            ],
            [
                {
                    name: "api-preview-dateinput"
                }
            ]
        ])
    }
}

let AllPreviews

export function isDateValid(date:Date){
    return (date instanceof Date || typeof date === "object" || Object.prototype.toString.call(date) === "[object Date]") && !isNaN(date.valueOf())
}

let AnimatedCalendarPickerModules
export class AnimatedCalendarPicker extends React.Component<any, {
    menuAnimation: any
}> {
    static displayName = "AnimatedCalendarPicker"
    constructor(props){
        super(props)
        this.state = {
            menuAnimation: new this.modules[0].default.Value(0)
        }
    }

    get modules(){
        return AnimatedCalendarPickerModules || (AnimatedCalendarPickerModules = [
            WebpackLoader.findByUniqueProperties(["Value","timing"])
        ])
    }

    componentWillEnter(ev){
        this.modules[0].default.timing(this.state.menuAnimation, {
            toValue: 1,
            duration: 150
        }).start(ev)
    }

    componentWillLeave(e){
        this.modules[0].default.timing(this.state.menuAnimation, {
            toValue: 0,
            duration: 150
        }).start(e)
    }

    render(){
        let props = this.props, 
        value = props.value, 
        onClickOutside = props.onClickOutside, 
        onSelect = props.onSelect, 
        minDate = props.minDate, 
        maxDate = props.maxDate, 
        endDate = props.endDate, 
        filterDate = props.filterDate, 
        startDate = props.startDate, 
        selectsEnd = props.selectsEnd, 
        selectsStart = props.selectsStart, 
        top = props.top, 
        right = props.right, 
        isModalInput = props.isModalInput, 
        showMonthYearPicker = props.showMonthYearPicker, 
        menuAnimation = this.state.menuAnimation, 
        interpolation = menuAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["-10px", "0px"]
        });
        const emotion = getEmotion()
        return React.createElement(this.modules[0].default.div, {
            className: [emotion.css({
                marginRight: "1px",
                margintop: "6px",
                position: "fixed",
                zIndex: 2
            }), isModalInput ? emotion.css({
                zIndex: 10000
            }) : null].filter(e=>e).join(" "),
            style: {
                opacity: menuAnimation,
                right: right,
                top: top,
                transform: [{
                    translateY: interpolation
                }]
            }
        }, React.createElement(CalendarPicker, {
            minDate: minDate,
            maxDate: maxDate,
            endDate: endDate,
            filterDate: filterDate,
            startDate: startDate,
            selectsEnd: selectsEnd,
            selectsStart: selectsStart,
            value: value,
            onSelect: onSelect,
            onClickOutside: onClickOutside,
            showMonthYearPicker: showMonthYearPicker,
            onChange: console.log
        }))
    }
}

export class CalendarPicker extends React.Component<any> {
    static defaultProps = {
        value: new Date()
    }
    static displayName = "CalendarPicker"
    
    render(){
        var e = this.props
          , t = e.onClickOutside
          , r = e.onSelect
          , n = e.locale
          , l = e.value
          , o = e.endDate
          , u = e.filterDate
          , f = e.startDate
          , c = e.minDate
          , d = e.maxDate
          , p = e.selectsEnd
          , y = e.selectsStart
          , v = e.showMonthYearPicker;
        return React.createElement("div", {
            className: "lc-calendarPicker"
        }, React.createElement(DatePicker.default, {
            fixedHeight: true,
            inline: true,
            selected: l,
            locale: n,
            onClickOutside: t,
            onSelect: r,
            onChange: r,
            endDate: o,
            filterDate: u,
            startDate: f,
            minDate: c,
            maxDate: d,
            selectsEnd: p,
            selectsStart: y,
            showMonthYearPicker: v
        }))
    }
}