import { useState } from "react"
import {useTrack} from "../../utils"
const Search = ()=>{
    const {fethTrack} = useTrack();
    return(
        <>
            <input type="text" onChange={(e)=>fethTrack(e.target.value)}/>
        </>
    )
}


export default Search