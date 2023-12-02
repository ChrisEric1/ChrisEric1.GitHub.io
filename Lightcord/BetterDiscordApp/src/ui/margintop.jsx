let marginModule = BDModules.get(e => e.marginTop60)[0]

export default class MarginTop extends React.Component {
    render(){
        if(!marginModule)marginModule = BDModules.get(e => e.marginTop60)[0]
        return <div className={marginModule.marginTop60}></div>
    }
}