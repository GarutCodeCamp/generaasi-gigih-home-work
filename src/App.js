import React,{useState,useEffect} from 'react'
import "./index.css"
import {useAccount} from './testModule/Utils';
import Home from './testModule/pages/Spotify';



function App() {

  const [token,setToken] = useState(undefined)
  const[user,FetchUser]= useAccount(token)
  const [post, setPost] = useState({
    name: "",
    desc: "",
    public: false,
    collaborative: false,
  })
  const handleChange = (e) => {
    setPost({
      [e.target.name]: e.target.value
    });
  };
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

      const PostPlaylist = async(postData)=>{
        fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`,{
         method: "POST",
         headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
         },
         body: JSON.stringify({
           name: postData.name,
           description:postData.desc,
            public: false,
            collaborative: false,
         })
       }).then(res=> res.json()).then(data=>console.log(data))
      }




      const handleClick = (e)=>{
        e.preventDefault()
        PostPlaylist(post);
      }

      console.log(post);
     return (
  <div className="bg-color">
      <Home token={token}   />
      <form>
         <input name="name" value={post.name} onChange={handleChange} />
        <textarea name="desc" values={post.desc} onChange={handleChange} />
        <button onClick={handleClick}>Create</button> 
      </form>
  </div>      
    );
}

export default App;
