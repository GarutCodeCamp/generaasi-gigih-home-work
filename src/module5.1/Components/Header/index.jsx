import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";
import style from "./header.module.css";

const Header = () => {
  const Profile = useSelector((state) => { return state.product.profile; });
  const { images } = Profile;
  console.log(Profile);
  return (
    <div className={style.header}>
      <div className={style["header-left"]}>
        <BiSearchAlt2 color="black" size={28} />
        <input type="text" placeholder="Search Song, Track, Podcasts" />
      </div>
      <div className={style["header-right"]}>
        <img
          src={images?.[0].url}
          alt="user"
        />
        <h4>{Profile.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
