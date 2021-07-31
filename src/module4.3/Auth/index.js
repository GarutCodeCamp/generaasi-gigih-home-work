import { Redirect, Route } from "react-router-dom"

// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb){
//         this.isAuthenticated = true
//         setTimeout(cb,100)
//     },
//     signout(cb){
//         this.isAuthenticated = false
//         setTimeout(cb,100)
//     }
// }


// function PrivateRoute({children, ...res}){
//     return(
//         <Route {...res} render={()=>{
//             return fakeAuth.isAuthenticated === true ?
//             children :
//             <Redirect  to ={{
//                 pathname: '/login',
//                 state: {from: window.location}
//             }}/>
//         }}>

//         </Route>
//     )
// }




// export{
//     fakeAuth,
//     PrivateRoute
// }