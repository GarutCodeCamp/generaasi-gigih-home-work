import React from "react";
import style from "./body.module.css";
import Header from "../Header";

const Body = () => {
  return (
    <div className={style.body}>
      <Header />
      <div className={style.content}>this content</div>
    </div>
  );
};

export default Body;
