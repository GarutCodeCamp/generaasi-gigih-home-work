import "../index.css"

const Button1 = ({href})=>{
    return <a className="btn btn-success" href={href}> Loggin</a>
}


const BtnOutline = (props)=>{
    return <button onClick={props.onClick} className="btn btn-outline">{props.btn}</button>
}
export {Button1,BtnOutline}