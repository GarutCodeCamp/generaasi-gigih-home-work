import React from 'react'
import "./index.css"


const Playlist = (props)=>{
    return (
        <div className="playlist">
            <h1>{props.title}</h1>
            <img src={props.url} alt="kang-bohem" />
            <h3>{props.album}</h3>
            <p>{props.song}</p>
            <p>{props.artist}</p>
            <button> select </button>
        </div>
    )
}


export default Playlist