import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './index.css'
import { loginSpotify, getAccessToken } from '../../utils/Credentials';
// eslint-disable-next-line import/extensions
import { login, storeUser } from '../../Redux/Authslice';
import { getProfile } from '../../utils/Spotify';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessToken(window.location.hash);
      dispatch(login(access_token));
      getProfile(access_token).then((data) => dispatch(storeUser(data)));
      history.push('/create-playlist');
    }
  }, [dispatch, history]);
  return (
    <div className="bg-spotify">
      <div className="card">
        <h1>Login To Spotify</h1>
        <Button onClick={loginSpotify}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
