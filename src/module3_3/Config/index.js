const Spotify = {
    access_spotify: process.env.REACT_APP_ACCESS_SPOTIFY,
    client_id: process.env.REACT_APP_CLIENT_ID
}

const scope = [
    'ugc-image-upload',
    'user-read-private',
    'user-read-email',
    'user-read-recently-played',
    'playlist-modify',
    'playlist-modify-private'
]
const url_authorize = `https://accounts.spotify.com/authorize?client_id=${Spotify.client_id}&response_type=token&redirect_uri=http://localhost:3000/&scope=${scope.join('%20')}&show_dialog=true`
const url_access = `https://api.spotify.com/v1/me`





export {
    url_authorize,
    url_access,
}