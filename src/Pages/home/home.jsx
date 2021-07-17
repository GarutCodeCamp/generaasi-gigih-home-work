import Playlists from '../../Components/Playlists'
import "../index.css"
import data from '../../data/data'


const Home =()=> {
    return (
        <div className="home">
            <div className="song">
            {data.map(result=>{
                const {album,artists,name,id} = result
                console.log(album);
                return  <Playlists key={id} name={name} artist={album.name} url={album.images[0].url} song={artists[0]?.name}/>
            })}
            </div>
        </div>
        )
    
}
export default Home