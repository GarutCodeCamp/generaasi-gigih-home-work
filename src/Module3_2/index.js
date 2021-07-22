import React,{useEffect, useState} from 'react';
import {Button,Navbar,Playlist, Select} from "./Components" 
import {getTokenUrl, urlAuthorize} from "./Config"
import "./index.css"



const Home = ()=>{
    const [track,setTrack] = useState([])
    const [search,setSearch] = useState("")
    const [onSelect, setSelect] = useState([])
    useEffect(()=>{
        
    },[])
   
    const buttonHandleOnSearch=async(e)=>{
        const token = getTokenUrl();
        window.location.hash = "";
        let _token = token.access_token;
            console.log(_token);
            await fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=10`,{
            headers:{
                Authorization:"Bearer " + _token,
            },
        }).then(res=>{
            return res.json();
        }).then(response=>{
            setTrack(response.tracks.items);
        })
       } 
       const UnGetItems = (getById)=>{
           const trackOnSelect = onSelect.filter((track)=> track !== getById);
            setSelect([...trackOnSelect])
       }
       const GetItems =(getById)=>[
        setSelect([...onSelect,getById])
       ]
    return(
        
        <div>
                <Navbar login={
                <Button name="Login" link={urlAuthorize}/>}>
                {track ? <div className="onSearch">
                    <input value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search"/>
                    <button onClick={buttonHandleOnSearch}>cari</button>
                </div>: 
                (
               <h1>Track Undifined</h1>                    
            ) } 
            </Navbar>
           <div className="song-track">
            {track.map(getTrack=>{
                        const {name,album,artists,id} =getTrack
                        return(
                            <Playlist name={album.name} url={album.images[0].url} album={artists[0].name} judul={name} key={id} select={
                                <Select 
                                selected={onSelect.some((trakByid)=>trakByid === id)}
                                UnGetItems={()=>UnGetItems(id)}
                                GetItems={()=> GetItems(id)}
                                />
                            }/>
                       
                            )
                    })}
           </div>
        </div>
    )
}
export default Home

