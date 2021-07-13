import React, {useEffect, useState} from 'react'
import Playlist from '../../Components/playlist'
import "./home.css"
import data from '../../data/data'


const Home =()=> {
    const [getData,setData]=useState("")
    useEffect(()=>{
        const query = {
            name : data.name,
            url : data.album.images[0].url,
            artist: data.album.name,
            song: data.artists[0].name
        }
        setData(query)
    },[]);
    return (
            <div className="home">
                <Playlist title="Create  Playlist" url={getData.url} album={getData.name} song={getData.song} artist={getData.artist} />
            </div>
        )
    
}
export default Home