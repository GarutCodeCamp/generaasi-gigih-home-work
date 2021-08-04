import Actiontype from "../constants";

const initialState = {
  token: "",
  isAuth: false
};

const productReducuer = (state = initialState, { type, payload }) => {
  switch (type) {
  case Actiontype.token:
    return {
      ...state,
      token: payload
    };
  case Actiontype.isAuth:
    return {
      ...state,
      isAuth: true
    };
  default:
    return state;
  }
};

export default productReducuer;
