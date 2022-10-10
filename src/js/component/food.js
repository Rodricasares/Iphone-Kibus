import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/icons.css";
import "../../styles/food.css";


export const Food = () => (
  <div className="text-center food my-5">
    <h1 className="text1 text-start ">
      Mejor para ellos, más fácil y cómodo para ti
    </h1>
    <p className="text-start text2">
      Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta sana y
      natural a tu perro de forma cómoda y rápida. Nuestro dispositivo cocina
      automáticamente la cantidad exacta en cada comida y hasta lo puedes
      programar a distancia a través de la App. Tu perro aprovechará comida de
      calidad casera, con el mínimo esfuerzo
    </p>
 
    <div className="btnhome ">
      {" "}
      <button type="button" className="btn btn-primary badge ">
        Reserva Ahora
      </button>
      <button type="button" className="btn btn-secundary badge ">
        Quiero Saber Más
      </button>
    </div>
  </div>
);
