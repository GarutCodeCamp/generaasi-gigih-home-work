import { useSelector } from "react-redux"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import CreatePlaylist from "../../Components/createPlaylist"
import Login from "../../Components/login"
import Dashboard from "../DashBoard"
const Home = ()=>{
    const token = useSelector(state=>state.product.token)
    return(
        <>
            <Router>
            <Switch>

                <Route exact path="/" >
                {token ? (
                    <Redirect from="/" to="/create-playlist" />
                ) : (<Login />)}
                </Route>
                <Route  path="/dash" >
                    <Dashboard />
                </Route>
                <Route path="/create-playlist">
                    <CreatePlaylist />
                </Route>
                
            </Switch>
            </Router>
        </>
    )
}


export default Home