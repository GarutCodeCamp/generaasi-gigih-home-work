const client_and_secret = {
    client_Id: process.env.REACT_APP_CLIENT_ID,
    secret_Id: process.env.REACT_APP_CLIENT_SECRET
}


const url_Authorize = `https://accounts.spotify.com/authorize?client_id=${client_and_secret.client_Id}&response_type=code&redirect_uri=http://localhost:3000/&state=STATE&scope=user-read-private%20user-read-email&show_dialog=true`;


export {
    url_Authorize
}
