import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAction } from "../../redux/action";
import {url_authorize} from "../../utils"
import {Button1} from "../Button"
import "./index.css"

const Login =()=>{
   const history = useHistory()
    const dispatch = useDispatch();
   const state = useSelector(state => state.product.token)
   console.log(state);
    useEffect(()=>{
        const hashlogin = window.location.hash.substring(1).split('&').reduce((initial,item)=>{
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
          },{})
          const payload = hashlogin.access_token
          if(payload){
            history.push("/dash")
            dispatch(setAction(payload))

          }
        },[])

   const handleClick = ()=>{
       window.location = url_authorize
   }
    return(
        <div className="login">
            <Button1 onClick={handleClick} name="Login" />
                
        </div>
    )
}



export default Login