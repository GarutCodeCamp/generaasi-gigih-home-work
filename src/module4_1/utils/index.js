import { useState,useEffect } from "react"
import {useSelector} from 'react-redux';


const Spotify = {
    access_spotify: process.env.REACT_APP_ACCESS_SPOTIFY,
    client_id: process.env.REACT_APP_CLIENT_ID
}

const scope = [
    'ugc-image-upload',
    'user-read-private',
    'user-read-email',
    'user-read-recently-played',
    'playlist-modify',
    'playlist-modify-private'
]
const url_authorize = `https://accounts.spotify.com/authorize?client_id=${Spotify.client_id}&response_type=token&redirect_uri=http://localhost:3000/&scope=${scope.join('%20')}&show_dialog=true`
const url_access = `https://api.spotify.com/v1/me`


const useTrack=()=>{
    const token = useSelector(state => state.product.token)

    const [track,setTrack] = useState([])
    const fethTrack =async(search)=>{
        await fetch(`https://api.spotify.com/v1/search?q=${search||"a"}&type=track&limit=5`,{
            headers: {
                'Authorization': 'Bearer '+ token
            }
        }).then(res=>{
            return res.json();
        }).then(tracks=>{
                setTrack(tracks.tracks.items)
            console.log(tracks.items);
            }).catch(e=>{
            if(e===""){
            alert("belum login")

            }
        })
    }
    return [track,fethTrack]
}



const useAccount=()=>{
    const token = useSelector(state => state.product.token)

    const [user,setuser]= useState('');
    const FetchUser=async (token)=>{
          await  fetch(url_access,{
                headers:{
                    'Authorization': "Bearer "+ token
                }
            }).then(res=>{
                return res.json();
            }).then(data=>{
                setuser(data)
                console.log("data playlist id:"+data.id);
            })
    } 
    useEffect(()=>{
        FetchUser(token)
        
    },[token])

    return [user,FetchUser];
}
const usePlaylist=()=>{
    const token = useSelector(state => state.product.token)

    const [playlist,setPlaylist] = useState([]);
    const fetchPlaylist=async(token)=>{
        await fetch(`https://api.spotify.com/v1/me/playlists?offset=5&limit=10`,{
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer '+ token
            }
        })
        .then(res=>{
            if(res.ok){
                return res.json()
            }
            throw Error
        })
        .then(data=>{
            setPlaylist(data.items)
            console.log(data);
        }).catch(e=>console.log(e))
    }
    
    useEffect(()=>{
        fetchPlaylist(token)
    },[token])
    return [playlist,fetchPlaylist]
}
export{
    url_authorize,
    url_access,
    useTrack,
    useAccount,
    usePlaylist,
}


