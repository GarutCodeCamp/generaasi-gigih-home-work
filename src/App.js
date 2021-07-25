import React,{useState} from 'react'
import "./index.css"
import { useEffect } from 'react/cjs/react.development';
import {useAccount, useCreatePlaylist} from './module3_3/Utils';
import Home from './module3_3/pages/Spotify';



function App() {

  const [token,setToken] = useState(undefined)
  const[user,FetchUser]= useAccount(token)
  const  [create,handleInput,handleClick] = useCreatePlaylist(token,user.id)
  useEffect(()=>{
    
  getAPI()
  const hashlogin = window.location.hash.substring(1).split('&').reduce((initial,item)=>{
    let parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  },{})
  const payload = hashlogin.access_token;
  setToken(payload)
  getAPI(token)
  },[])
  console.log("custom",user);
  const getAPI=(payload)=>{
        
        
          if(payload){
            setToken(payload)
            FetchUser(payload)
          }
      }

      // const PostPlaylist = async()=>{
      //   fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`,{
      //    method: "POST",
      //    headers: {
      //     "Content-Type": "application/json",
      //     Authorization: "Bearer " + token,
      //    },
      //    body: JSON.stringify({
      //      name: 'test Name',
      //      description:"test Desc"
      //    })
      //  }).then(res=> res.json()).then(data=>console.log(data))
      // }





      // PostPlaylist();

      console.log(create);
     return (
  <div className="bg-color">
      <Home token={token}   />
      <form>
        <input name="desc" value={create.name} onChange={handleInput} />
        <textarea name="desc" values={create.desc} onChange={handleInput} />
        <button onClick={handleClick}>Create</button>
      </form>
  </div>      
    );
}

export default App;
