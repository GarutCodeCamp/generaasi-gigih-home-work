import React from "react";
import { ImHome } from "react-icons/im";
import { BsCollectionFill } from "react-icons/bs";
import { GoDiffAdded } from "react-icons/go";
import { BiHeartSquare } from "react-icons/bi";
import { useSelector } from "react-redux";
import style from "./bar.module.css";

const Sidebar = () => {
  const playlist = useSelector((state) => { return state.product.playlist; });
  const item = playlist.slice(0, 9);
  return (
    <div className={style.bar}>
      <div className={style.logo}>
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
      </div>
      <div className={style.items}>
        <ul className={style.item}>
          <li>
            <ImHome color="white" />
            <p>Home</p>
          </li>
          <li>
            <BsCollectionFill color="white" />
            <p>koleksi Kamu</p>
          </li>
        </ul>
        <ul className={style.item}>
          <li>
            <GoDiffAdded color="white" />
            <p>Buat Playlist</p>
          </li>
          <li>
            <BiHeartSquare color="white" />
            <p>Lagu yang Disukai</p>
          </li>
        </ul>
        <div className={style.playlist}>
          <h2>Playlist</h2>
          {item.map((res) => {
            return (
              <li key={res.id}>
                #
                {" "}
                {res.name}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
