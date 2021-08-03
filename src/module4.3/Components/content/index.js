import { useEffect } from "react";
import { useTrack } from "../../utils"
import Card from "../card/card"
import "./index.css"
const Content = ()=>{
    const {track} = useTrack();
    return (
        <div className="content-board">
            {track.map(res=>{
                return console.log("track",res);
            })}
        </div>
    )
}
export default Content