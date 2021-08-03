import { useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import {Button1} from "../Button" 
import "./index.css"
const CreatePlaylist = ()=>{
    const token = useSelector(state=>state.product.token)
    const history = useHistory()
    if(!token){
        history.push('/')
    }
    return(
        <div className="create-playlist">
            <div className="playlist">
                <div className="form-input">
                    <label>Title</label>
                    <input type="text"  maxLength="12" minLength="3" />
                </div>
                <div className="form-input">
                    <label>Description</label>
                    <textarea maxLength="20" minLength="5" />
                </div>
                <Button1 name="Create" />
                <Link to="/dash">Kembali</Link>
            </div>
        </div>
    )
}


export default CreatePlaylist