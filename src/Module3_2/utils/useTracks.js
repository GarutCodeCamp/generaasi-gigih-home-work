import { useState,useEffect } from "react";
import { getTokenUrl } from "../Config";
import access_token from "./useToken";


const url = "https://api.spotify.com/v1/search?q="


const useTrack= (search) =>{
    const [track,setTrack] = useState([])
    useEffect(()=>{
        fetchSpotify(search)
    },[search])
 

    const fetchSpotify = async (search)=>{
        const token = getTokenUrl();
        window.location.hash = "";
        let _token = token.access_token;
        await fetch(`${search ? `${url}${search}&type=track&limit=2`: url+"demasive&type=track&limit=2"  } `,{
            headers:{
                Authorization: "Bearer " + _token,
            },

        }).then(res=>{
            return res.json();
        }).then(response=>{
            setTrack(response.tracks.items);
        })
        
    }
    
    return {track,fetchSpotify}
}

export default useTrack;