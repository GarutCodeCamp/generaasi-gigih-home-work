import { useState,useEffect } from "react";
import { getTokenUrl } from "../Config";

const access_token = ()=>{
    const token = getTokenUrl();
    window.location.hash = ""
    const _token = token.access_token
    return _token
}


export default access_token