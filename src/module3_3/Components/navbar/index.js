import { useEffect } from "react";
import { url_authorize } from "../../Config";
import { useAccount } from "../../Utils";
import { Button1 } from "../button";
import "../index.css"
import UserAccount from "../userAccount"

const Navbar = ({token,handleChange,value})=>{
    const [user,FetchUser] = useAccount(token)
    useEffect(()=>{
        if(token){
            return FetchUser(token)
        }
    },[token])
    return (
        <nav className="navbar">
            <div className="search-bar">
                <input type="text"  value={value} onChange={handleChange} name="search" placeholder="search"/>
            </div>
            <div className="user">
                {token ? <UserAccount user={user.display_name} img="https://i.scdn.co/image/ab6775700000ee85467e5823a9441ede2fbc1967"  />: <Button1  href={url_authorize}/> }
            </div>
        </nav>
    )
}


export {
    Navbar,
}