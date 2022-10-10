import React from "react";
import "../../styles/icons.css";
import icon from "../../img/icon.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";
import icon4 from "../../img/icon4.png";
import icon5 from "../../img/icon5.png";
import icon6 from "../../img/icon6.png";


export const Icons = () => (
  <div className="row  ">
    <div className="col  iconsCol ">  
    <img className="icon" src={icon}  />
    <img className="icon" src={icon3}  />
    <img className="icon" src={icon5}  />


    </div>
    <div className="col iconsCol">
    <img className="icon2" src={icon2}  />
    <img className="icon2" src={icon4}  />
    <img className="icon2" src={icon6}  />
    </div>
  </div>
);
