export default class LightcordLogo extends React.Component {
    render(){
        const props = this.props
        return (
            <svg viewBox="0 0 168 168.69" {...props} height="100%" width={props.size}>
                <defs>
                    <linearGradient id="prefix__a" x1={66.7} y1={-487.7} x2={66.7} y2={-508.73} gradientTransform="matrix(1 0 0 -1 0 -408)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#e30613" />
                        <stop offset={1} stopColor="#731a14" />
                    </linearGradient>
                    <linearGradient id="prefix__b" x1={101.7} y1={-487.7} x2={101.7} y2={-508.73} gradientTransform="matrix(1 0 0 -1 0 -408)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#e20613" />
                        <stop offset={1} stopColor="#731a13" />
                    </linearGradient>
                    <linearGradient id="prefix__c" x1={84} y1={-408} x2={84} y2={-576.69} gradientTransform="matrix(1 0 0 -1 0 -408)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#e30613" />
                        <stop offset={1} stopColor="#731a13" />
                    </linearGradient>
                </defs>
                <path fill="#fff" d="M14.9 35.3h139.2V133H14.9z" />
                <path d="M66.7 79.7c-5.4 0-9.8 4.7-9.8 10.5s4.4 10.5 9.8 10.5 9.8-4.7 9.8-10.5-4.4-10.5-9.8-10.5z" fill="url(#prefix__a)" />
                <path d="M101.7 79.7c-5.4 0-9.8 4.7-9.8 10.5s4.4 10.5 9.8 10.5 9.8-4.7 9.8-10.5-4.4-10.5-9.8-10.5z" fill="url(#prefix__b)" />
                <path d="M0 0v168l168 .69V0zm111.3 124.1s-3.4-4.1-6.3-7.7c12.6-3.5 17.4-11.3 17.4-11.3a52.52 52.52 0 01-11.1 5.6 68.63 68.63 0 01-38.9 4 70.12 70.12 0 01-14.1-4.1 48.88 48.88 0 01-7.1-3.3c-.3-.2-.6-.3-.9-.5a.76.76 0 00-.4-.2c-1.7-1-2.6-1.6-2.6-1.6s4.6 7.6 16.8 11.2c-2.9 3.6-6.4 7.9-6.4 7.9-21.2-.6-29.3-14.5-29.3-14.5 0-30.6 13.8-55.4 13.8-55.4 13.8-10.3 26.9-10 26.9-10l1 1.1C52.8 50.3 45 57.9 45 57.9a56.2 56.2 0 015.7-2.7 72.19 72.19 0 0121.8-6 8.75 8.75 0 011.6-.2 89.1 89.1 0 0119.4-.2 78.45 78.45 0 0128.9 9.1s-7.5-7.2-23.9-12.1l1.3-1.5s13.1-.3 26.9 10c0 0 13.8 24.8 13.8 55.4.1-.1-8 13.8-29.2 14.4z" fill="url(#prefix__c)" />
            </svg>
        )
    }
}