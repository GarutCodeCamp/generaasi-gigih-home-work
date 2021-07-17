import "../index.css"


const PlayButton=()=>{
    return (
        <div className="button">
            <button className="arrow">&#10096;</button>
            <button className="play">&#10148;</button>
            <button className="arrow">&#10097;</button>
        </div>
    )
    
}

const Button =(props)=>{
    return <button className="btn btn-primary">play &raquo; </button>
}
export { PlayButton, Button};