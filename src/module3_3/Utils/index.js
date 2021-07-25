import { useEffect, useState } from "react"
import { url_access } from "../Config";

const useAccount=(token)=>{
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
            })
    } 
    useEffect(()=>{
        FetchUser(token)
        
    },[token])

    return [user,FetchUser];
}

const useTrack=(token)=>{
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
        }).catch(e=>{
            if(e===""){
            alert("belum login")

            }
        })
    }
    return [track,fethTrack]
}




const useCreatePlaylist = (token,user_id)=>{
   const [create, setCreate] = useState({
       name: "",
       desc: "",
       collaborative: false,
       public: false

   })
   const [post,setPost] = useState('');
   const createPlaylist =(obj)=>{
       fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`,{
           method: "POST",
           headers:{
               Authorization: "Bearer "+ token,
               "Content-type": "application/json"
           },
           body: JSON.stringify({
            name: obj.name,
            desc: obj.desc,
            public: false,
            collaborative: false
           }) 
       }).then(res=>{
           return res.json()
       }).then(data=>{
        console.log(data.id);
        setPost(data.id)
       })
   }

   const handleInput=(e)=>{
        const {name, value} = e.target
        setCreate({
           ...create,[name]: value
       })
   }
   const handleClick =(e)=>{
    e.preventDefault();
    createPlaylist(create)
   }
   return [create, post,handleInput,handleClick]

}













export {
    useAccount,
    useTrack,
    useCreatePlaylist
};