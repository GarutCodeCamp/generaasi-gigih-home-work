import React from 'react'
import "./index.css"
function Button({Url,name}) {
    return <a className="btn btn-success" href={Url}>{name}</a>
}

export default Button
