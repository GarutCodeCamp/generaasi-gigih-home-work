import React from 'react'
import "../index.css"

const Playlist = ({name,url,album,judul,select})=>{
    return (
        <div className="playlist">
            <div className="image-size">
                <img src={url} alt="" />
            </div>
            <div className="text">
                {judul}<br/>
                {name}, {album}
            </div>
            <div className="select">
                {select}
            </div>
        </div>
    )
}

export default Playlist