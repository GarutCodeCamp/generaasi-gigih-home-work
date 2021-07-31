const Button1 =({onClick,name})=>{
    return(
        <button className="button" onClick={onClick}>{name}</button>
    )
}
const Button2 =(props)=>{
    return(
        <a className="button2" href={props.url} >{props.name}</a>
    )
}
export {
    Button1,
    Button2
}