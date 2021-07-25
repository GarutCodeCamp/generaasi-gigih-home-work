import { useEffect, useState } from "react"
import {  usePlaylist } from "../../utils"
import { Button1, Button2 } from "../Button"
import {CardPlaylist} from "../CardPlaylist"
import User from "../user"

export const Navbar =({token,url,searchTrack})=>{

    return(
        <nav className="navbar">
            <div className="container content">
                    <div className="search-bar">
                        <input type="text" placeholder="cari" onChange={searchTrack}/>
                    </div>
                    <div className="account">
                        {token ? <User token={token} /> : 
                        <Button2 name="login" url={url}/>}
                    </div>
            </div>
    </nav>
    )
}


export const SideBar=({token,user})=>{
    const [post,setPost]=useState({
        collaborative: false,
        description: "",
        name: "",
        public: false,
    })
    const[tokenID, setTokenId] = useState('')
    const[playlist,fetchPlaylist] = usePlaylist(token)

    useEffect(()=>{
        configPost(post)
        fetchPlaylist(token)
    },[])
    const configPost =async(post_data)=>{
        await fetch(`https://api.spotify.com/v1/users/${user}/playlists`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
                collaborative: false,
                description: post_data.description,
                name: post_data.name,
                public: false,
            })
        })
        .then(res=>{
            return res.json()
        }).then(data=>{
            setTokenId(data.id)
            
        })
    }


    const handleClick=async(e)=>{
        if(true){
            e.preventDefault()
        await configPost(post)
        alert("success")
        }
    }

    const handleChange= async(e)=>{
        e.preventDefault()
        const {name,value} = e.target
        await setPost({
            ...post,[name]:value
        })
    }

    return(
        <div className="sidebar">
        <div className="list-playlist">
            <div className="button-create">
                <form className="form">
                    <input className="input" name="name" maxLength="12" value={post.name} type="text" onChange={handleChange} placeholder="title"/>
                    <textarea className="text-area" name="description" maxLength="12" value={post.description} onChange={handleChange} placeholder="description"/>
                    <Button1 onClick={handleClick}/>
                </form>
            </div>
            <div className="playlist">
                {playlist.map(res=>{
                    return (
                        <CardPlaylist name={res.name} desc={res.description} key={res.id}/>
                    )
                })}
            </div>
        </div>
    </div>
    )
}