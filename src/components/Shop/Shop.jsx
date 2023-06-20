import React from "react";
import imgShop from "./ShopIco2.PNG";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="imgShop">
      <img src={imgShop} alt="Icono Shop" />
      <span style={{ color: "white" }}> 5 </span>
    </div>
  );
};

export default Shop;
