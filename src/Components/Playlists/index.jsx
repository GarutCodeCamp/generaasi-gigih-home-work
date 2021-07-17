import React from 'react'
import "../index.css"
import { Button } from '../ButtonPlaylist'
const Playlists = (props)=>{
    return(
        <div className="playlist-menu">
            <img src={props.url} alt="" />
          <div className="playlist-info">
                <h2>{props.artist}</h2>
                <p>{props.song}</p>
                <p>{props.name}</p>
                <Button></Button>
          </div>
        </div>
    )
}

export default Playlists;