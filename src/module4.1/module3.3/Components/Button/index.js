const Button1 =({onClick})=>{
    return(
        <button className="button" onClick={onClick}>Create</button>

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