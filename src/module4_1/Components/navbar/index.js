// import nav from "./navbar.module.css"
import  "./index.css"
import {SiSpotify,SiHomeassistant} from "react-icons/si"
import {IoMdSearch,IoIosBook} from "react-icons/io"
import User from "../user"
import { Link } from "react-router-dom"
import Search from "../search"
const Sidebar =()=>{
    return(
        <nav className="sidebar">
            <div className="logo">
                <SiSpotify />
                <div className="h1">Spotify</div>
            </div>
            <div className="menus">
                <div className="menu">
                    <SiHomeassistant />
                    <div>Home</div>
                </div>
                <div className="menu">
                    <IoMdSearch />
                    <div>Search</div> 
                </div>
                <div className="menu">
                    <IoIosBook />
                    <Link to="/create-playlist" className="Link">Buat Playlist</Link> 
                </div>
            </div>
        </nav>
    )
}
const Navbar = ()=>{
    
    return(
        <nav className="nav">
            <div className="nav-room">
                <Search />
            </div>
            <div className="nav-user">
                <User />
            </div>
        </nav>
    )
}


export {
    Sidebar,
    Navbar,
}