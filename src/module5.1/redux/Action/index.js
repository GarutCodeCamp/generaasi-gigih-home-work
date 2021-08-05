import Actiontype from "../constants";

const setAction = (token) => {
  return {
    type: Actiontype.token,
    payload: token,
  };
};
const setAuth = (payload) => {
  return {
    type: Actiontype.isAuth,
    payload,
  };
};

const setData = (data) => {
  return {
    type: Actiontype.release,
    payload: data,
  };
};

const setProfile = (profile) => {
  return {
    type: Actiontype.profile,
    payload: profile,
  };
};

const setPlaylist = (playlist) => {
  return {
    type: Actiontype.playlist,
    payload: playlist,
  };
};
export {
  setAction, setAuth, setData, setProfile, setPlaylist
};
