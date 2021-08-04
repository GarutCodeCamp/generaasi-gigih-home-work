import Actiontype from "../constants";

const setAction = (token) => {
  return {
    type: Actiontype.token,
    payload: token
  };
};
const setAuth = (payload) => {
  return {
    type: Actiontype.isAuth,
    payload
  };
};

export { setAction, setAuth };
