import { useState } from "react"
import { BtnOutline } from "../../../module3_3/Components/button/index"
import "../index.css"
const CreatePlaylist=({token})=>{
    const [Post, setPost] =useState({
        name: "",
        desc: "",
        public: false,
    })
    const onPost = (data)=>{
        fetch(` https://api.spotify.com/v1/users/${data}/playlists`,{
            method: "POST",
            headers:{
                'Content-Type': "application/json",
                 
            }
        })
        .then(res=>{
            res.json()
        })
    }
    return (
        <div className="create-playlist">
            <div>Create PlayList</div>
            <div className="input-field">
                <label htmlFor="name">Name</label>
                <input name="name" />
            </div>
            <div className="input-field">
                <label>Name</label>
                <textarea name="desc" />
            </div>
            <BtnOutline btn="test"/>
        </div>
    )
}


export default CreatePlaylist