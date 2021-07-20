import React, { Component } from 'react'
import Button from '../../Components/Button';
import { url_Authorize } from '../../Config/credentials';
import "./index.css"
export default class LoginSpotify extends Component {
    
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
