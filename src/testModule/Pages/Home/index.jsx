import { CardSong } from "../../Components/Card-song"
import { Navbar, SideBar } from "../../Components/navbar"
import "../index.css"
import{url_authorize, useAccount, useTrack} from "../../utils/"
import { useEffect, useState } from "react"
const Home=()=>{
    const [token,setToken] = useState('');
    const [track,fethTrack]=useTrack(token)
    const [user,]=useAccount(token)
    
    useEffect(()=>{
        const hashlogin = window.location.hash.substring(1).split('&').reduce((initial,item)=>{
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
          },{})

          const payload = hashlogin.access_token;
          setToken(payload)
    },[])



    console.log(track);
    return(
        <div className="pages">
            <Navbar token={token} url={url_authorize} searchTrack={(e)=>{
                fethTrack(e.target.value)
            }}/>
            {/* side */}
            <nav className="content-page">
                <SideBar token={token} user={user.id} />
                <div className="contents">
                    {track.map(tracks=>{
                        const{id,name,album,artists}=tracks
                        return(
                            <CardSong key={id} name={artists[0]?.name} image={album.images[2].url} album={album.name} songs={name} />
                        )
                    })}
                </div>
            </nav>
        </div>
    )
}

export default Home