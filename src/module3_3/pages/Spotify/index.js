import { Navbar } from "../../Components/navbar"
import Playlist from "../../Components/playlist";
import { useTrack } from "../../Utils";
import style from "./spotify.module.css"



const Home = ({token})=>{
const [track,fethTrack] = useTrack(token);

    return(
        <div className="">
            <Navbar token={token} handleChange={(e)=>{
                fethTrack(e.target.value)
            }} />
            {track.map(track=>{
                const {name,artists,album,id} = track;
                console.log(track);
                return(
                    <div >
                    <Playlist key={id} name={name} album={album.album_type} artists={artists[0]?.name} image={album.images[0]?.url} />
                    </div>
                    )
            })}
        </div>
        )
}


export default Home;

