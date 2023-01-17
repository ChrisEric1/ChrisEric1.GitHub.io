export default class BugHunterBadge extends React.Component {
    render(){
        const props = this.props

        return (
            <svg viewBox="0 0 31.3 29.5" {...props.svg} height="100%">
                <path d="M22.8 1s12 8.2 7.4 19.7S16.6 29 20 25.6s-4-5.6-8.7-10L22.8 1" fill="rgba(227,6,19,.6)" />
                <path d="M22.1 12.3c-2.5 3.2-6.1 4.8-8.9 4.3L3.6 28.8c-.7.9-1.9 1-2.8.3-.9-.7-1-1.9-.4-2.8L10 14.1c-1.3-2.5-.6-6.4 2-9.7 3.2-4 8-5.5 10.8-3.4s2.4 7.2-.7 11.3z" fill="#e30613" />
            </svg>
        )
    } 
}