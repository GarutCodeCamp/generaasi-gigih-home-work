import { useEffect } from "react"
import { useAccount } from "../../utils"
import { SideBar } from "../navbar"

import {useSelector} from 'react-redux'

const User =()=>{
    const token = useSelector(state => state.product.token)
    const [user,FetchUser]=useAccount(token)
    SideBar({userId:user.id})
    useEffect(()=>{
        if(token){
            FetchUser(token)
        }
    },[])
    console.log(user.id);
    return (
        <div className="user">
            <img src="https://i.scdn.co/image/ab6775700000ee85467e5823a9441ede2fbc1967"
              alt="profile" />
            <p>{user.display_name}</p>
        </div>
    )
}

export default User


