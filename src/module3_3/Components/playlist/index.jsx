import { useEffect, useState } from "react";
import { BtnOutline } from "../button"
import style from "./playlist.module.css"


const Playlist =({name,album,artists,image,id})=>{
    
    return (
        <div className={style.playlist} key={id} >
            <dnameiv className={style.image}>
                <img src={image} alt="" />
            </dnameiv>
            <div className={style.desc}>
                <div className={style.title}>
                    <h4>{name}</h4>
                    <p>{artists}</p>
                </div>
                <p>{album}</p>
            </div>
            <BtnOutline btn="muat" />
        </div>
    )
}






export default Playlist