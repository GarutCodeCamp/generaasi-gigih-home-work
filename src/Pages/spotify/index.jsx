import React, { Component } from 'react'
import Button from '../../Components/Button';
import { url_Authorize,client_and_secret,getToken_Url } from '../../Config/credentials';
import "./index.css"

export default class LoginSpotify extends Component {
    constructor(props){
        super(props);
        this.state={
            token: "",

            
        }
    }
    componentDidMount=()=>{
        
        const tokens = getToken_Url();
        console.log("ini token"+tokens);
    }
    render() {
        return (
            <div className="bg-spotify">
                <div className="card">
                    <h1>Login Spotify</h1>
                    <Button Url={url_Authorize} name="masuk"/>    
                </div>
            </div>
        )
    }
}
