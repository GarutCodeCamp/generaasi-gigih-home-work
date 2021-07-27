import { CardSong } from "../../Components/Card-song"
import { Navbar, SideBar } from "../../Components/navbar"
import "../index.css"
import {useDispatch,useSelector} from 'react-redux'
import{url_authorize, useAccount, useTrack} from "../../utils/"
import { useEffect} from "react"
import {setAction} from "../../redux/action"
const Home=()=>{
    const getTOken = useSelector(state => state.product.token)
    const token = useDispatch();
    const [track,fethTrack]=useTrack()
    const [user,]=useAccount()
    console.log("token: ",getTOken);
    useEffect(()=>{
        const hashlogin = window.location.hash.substring(1).split('&').reduce((initial,item)=>{
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
          },{})

          const payload = hashlogin.access_token;
        //   setToken(payload)
          token(setAction(payload))
    },[])



    console.log(track);
    return(
        <div className="pages">
            <Navbar  url={url_authorize} searchTrack={(e)=>{
                fethTrack(e.target.value)
            }}/>
            {/* side */}
            <nav className="content-page">
                <SideBar  user={user.id} />
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