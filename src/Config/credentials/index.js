const client_and_secret = {
    client_Id: process.env.REACT_APP_CLIENT_ID,
    secret_Id: process.env.REACT_APP_CLIENT_SECRET
}


const url_Authorize = `https://accounts.spotify.com/authorize?client_id=${client_and_secret.client_Id}&redirect_uri=http://localhost:3000/&state=STATE&scope=user-read-private%20user-read-email&response_type=token&show_dialog=true`;

const getToken_Url=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{})

}
export {
    url_Authorize,
    client_and_secret,
    getToken_Url
}
