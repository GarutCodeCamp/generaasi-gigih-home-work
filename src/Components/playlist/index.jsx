import PlayButton from "../ButtonPlaylist";
import "../index.css"


const Playlist=(props)=>{
    return(
        <div className="card">
            <img src={props.src} alt={props.alt} />            
            <div className="card-info">
                <h1>{props.artist}</h1>
                <p>{props.song}</p>
                <p>{props.name}</p>
            </div>
            <PlayButton />
        </div>
    )
}


export default Playlist;