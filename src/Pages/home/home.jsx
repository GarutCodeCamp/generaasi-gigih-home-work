import Playlist from '../../Components/playlist'
import "../index.css"
import data from '../../data/data'


const Home =()=> {
    const {name,album,artists} = data
    return (
            <div className="home">
                <Playlist  name={album.name} song={artists[0].name} artist={name} src={album.images[0].url} alt="kang-bohem" />
            </div>
        )
    
}
export default Home