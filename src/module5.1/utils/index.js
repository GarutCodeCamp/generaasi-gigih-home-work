import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../redux/Action";

// import { getTokenFromResponse } from "../Spotify";

// const payload = getTokenFromResponse();
// window.location.hash = "";
// const token = payload.access_token;

const useRelease = () => {
  const token = useSelector((state) => {
    return state.product.token;
  });
  const dispatching = useDispatch();
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
      })
      .then((datas) => {
        return datas;
      });
  };
  useEffect(() => {
    fetchRelease();
    dispatching(setData(fetchRelease));
  }, [token]);
};

export default useRelease;
