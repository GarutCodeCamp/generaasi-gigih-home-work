import React from 'react'
import "./index.css"
function Card({song,artist,album,src,href}) {
    return (
        <a href={src} className="card-song">
            <div className="img">
                <img src={src} alt="" />
            </div>
            <div className="text-card">
                <h2> {song}</h2>
                <p> {artist}</p>
                <p>{album} </p>
            </div>
        </a>
 )
}

export default Card
