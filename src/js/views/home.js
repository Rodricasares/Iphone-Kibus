import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import kibus from "../../img/111kibus.png";
import point from "../../img/point.png";
export const Home = () => (
	<div className=" mt-5">
        <img className="kibus" src={kibus} />
<h1 className="text-start m-3 text1">Alimentar bien a tu perro es más fácil que nunca     <img className="point rounded-circle" src={point} /></h1>
	<p className="text-start">La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a tu compañero comida sana, rica y recién cocinada de una forma fácil y cómoda</p>
	<div className="btnhome">
          {" "}
		  <button type="button" className="btn btn-primary badge ">Reserva Ahora</button>
		  <button type="button" className="btn btn-secundary badge ">Quiero Saber Más</button>

        </div>
	

	</div>
);
