import React from "react";
import "../../styles/eat.css";

import receta1 from "../../img/receta1.png";

export const Alimentos = () => (
  <div className="text-center  mt-5">
<div>     
<div className="container alimentos">
<div className="card border-0" >
  <img src={receta1} className="card-img-top pollo" alt="..." />
  <div className="card-body">
    <h3 className="card-title ">Salmón y Arroz</h3>
    <p className="card-text ">Ipoalergénica, con Omega 3 y 6</p>
  </div>
</div>


</div>
</div>
  </div>
);
