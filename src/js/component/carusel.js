import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/carusel.css";
import kibus from "../../img/111kibus.png";

export const Carusel = () => (
	<div className="text-center carusel1 mt-5">
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <img src="https://www.cuidatusmascotas.com/wp-content/uploads/2016/01/comprar-un-perro-600x339.jpg" className="d-block w-100 rounded-3" alt="..."/>
  
    </div>
    <div className="carousel-item">
      <img src="https://www.cuidatusmascotas.com/wp-content/uploads/2016/01/comprar-un-perro-600x339.jpg" className="d-block w-100 rounded-3" alt="..."/>

    </div>
    <div className="carousel-item">
      <img src="https://www.cuidatusmascotas.com/wp-content/uploads/2016/01/comprar-un-perro-600x339.jpg" className="d-block w-100 rounded-3" alt="..."/>
   
    </div>
    <div className="carousel-item">
      <img src="https://www.cuidatusmascotas.com/wp-content/uploads/2016/01/comprar-un-perro-600x339.jpg" className="d-block w-100 rounded-3" alt="..."/>
  
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

	</div>
);