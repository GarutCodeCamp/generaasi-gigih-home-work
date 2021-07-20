import React, { Component } from 'react'
import { url_Authorize } from '../../Config/credentials'
import Button from '../Button'
import "./index.css"



export default class Loggin extends Component {
    render() {
        return (
            <div className="bg-spotify">
                <div className="card">
                    <h1>Masuk Spotify</h1>
                    <Button name="masuk" Url={url_Authorize}/>
                </div>
            </div>
        )
    }
}
