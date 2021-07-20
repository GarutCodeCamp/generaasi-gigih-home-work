import React, { Component } from 'react'
import Card from '../../Components/card';
import Loggin from '../../Components/Loggin';
import { getToken_Url } from '../../Config/credentials';
import "./index.css"

export default class LoginSpotify extends Component {
    constructor(props){
        super(props);
        this.state={
            spotify: [],
            token: null,
            value: ""
        }
    }
    componentDidMount=(query)=>{
        const mytoken = getToken_Url();    
        window.localStorage.hash = "";
        const _token = mytoken.access_token;
        if(_token){
            this.setState({
                token:  _token
                
            })
            const url = `https://api.spotify.com/v1/search?q=${query|| "onepiece"}&type=track&limit=12&access_token=${_token}`
            fetch(url).then(res=>{
                return res.json();
            }).then(result=>{
                this.setState({
                    spotify: result.tracks.items
                })
            })
            
        }
       
    }
    handleOnchange=(e)=>{
        this.setState({
            value: this.componentDidMount(e.target.value)
        })
    
}
    
    render() {
        const {token,spotify,value} = this.state
      
        return (
            <>
                {token ? (
                    <div className="bg-dashboard">
                        <div className="form-input">
                            <input type="text" onChange={this.handleOnchange} value={value} placeholder="search track"/>
                        </div>
                        <div className="song">
                            {spotify.map(result=>{
                                const {name,id,album} = result
                                return (
                                <Card song={name} artist={album.artists[0].name} album={album.name} key={id} src={album.images[0].url}  />
                                )
                            })}
                        </div>
                    </div>
                ):(
                    <Loggin />
                ) }
            </>
            )
    }
}
