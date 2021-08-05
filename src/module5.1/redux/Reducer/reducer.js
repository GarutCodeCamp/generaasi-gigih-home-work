import Actiontype from "../constants";

const initialState = {
  token: "",
  isAuth: null,
  release: [],
  profile: [],
  playlist: [],
};

const productReducuer = (state = initialState, { type, payload }) => {
  switch (type) {
  case Actiontype.token:
    return {
      ...state,
      token: payload,
    };
  case Actiontype.isAuth:
    return {
      ...state,
      isAuth: true,
    };
  case Actiontype.release:
    return {
      ...state,
      release: payload,
    };
  case Actiontype.profile:
    return {
      ...state,
      profile: payload,
    };
  case Actiontype.playlist:
    return {
      ...state,
      playlist: payload,
    };
  default:
    return state;
  }
};

export default productReducuer;
