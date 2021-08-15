const CLIENT_ID = process.env.REACT_APP_CLIENTID;
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SCOPE = ['playlist-modify-private', 'user-read-email'];

const loginSpotify = () => {
  window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=http://localhost:3000/&scope=${SCOPE}&response_type=token&show_dialog=true`;
};

const getAccessToken = (hash) => {
  const stringAfterHastag = hash.substring(1);
  const paramInUrl = stringAfterHastag.split('&');
  const paramSplitUp = paramInUrl.reduce((acc, currentValue) => {
    const [key, value] = currentValue.split('=');
    acc[key] = value;
    return acc;
  }, {});
  return paramSplitUp;
};

export { loginSpotify, getAccessToken };
