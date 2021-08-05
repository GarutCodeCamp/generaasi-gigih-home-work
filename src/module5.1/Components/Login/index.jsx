import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import login from "./login.module.css";
import { accessUrl, getTokenFromResponse } from "../../Spotify";
import {
  setAction, setData, setPlaylist, setProfile
} from "../../redux/Action";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const payload = getTokenFromResponse();
  window.location.hash = "";
  const token = payload.access_token;
  const fetchPlaylist = async () => {
    await fetch(
      "https://api.spotify.com/v1/me/playlists?limit=10&offset=5",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => {
        return res.json();
      }).then((data) => {
        return dispatch(setPlaylist(data.items));
      });
  };
  const fetchRelease = async () => {
    await fetch(
      "https://api.spotify.com/v1/browse/new-releases?country=ID&offset=5&limit=20",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => {
        return res.json();
      }).then((data) => {
        return dispatch(setData(data));
      });
  };
  const fetchProfile = async () => {
    await fetch(
      "https://api.spotify.com/v1/me",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((res) => {
        return res.json();
      }).then((data) => {
        return dispatch(setProfile(data));
      });
  };
  useEffect(() => {
    fetchRelease();
    fetchProfile();
    fetchPlaylist();
    if (token) {
      dispatch(setAction(token));
      history.push("/create-playlist");
    }
  }, [dispatch, history]);
  const handleClick = () => {
    window.location = accessUrl;
  };

  return (
    <div className={login.login}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <button type="submit" onClick={handleClick}>
        Masuk
      </button>
    </div>
  );
};

export default Login;
