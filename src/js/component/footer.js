import React, { Component } from "react";
import "../../styles/footer.css";
import klogo from "../../img/klogo.png";
import pago from "../../img/pago.png";
import contact from "../../img/contact.png";


export const Footer = () => (
	<footer className="footer mt-auto py-3 ">
		    <img className="klogo" src={klogo}  />

	<div className="container kibus1">
<h1 className="titulo0 text-start">Sobre KIBUS</h1>
<p className="text text-start">Lorem ipsum dolor sit amet, to create consectetur adipiscing elit, sed do the eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
	</div>


	<div className="container politicas mb-5">
	<h1 className="titulo0 text-start">Políticas</h1>
	<p className="text0 text-start mb-2">Políticas de Privacidad</p>
	<p className="text0 text-start mb-2">Condiciones de uso</p>
	<p className="text0 text-start ">Cookies</p>
	</div>

	<div className="container politicas mb-5">
	<h1 className="titulo0 text-start">Contáctenos</h1>
	<p className="text0 text-start mb-2">Location</p>
	<p className="text0 text-start">Teléfono</p>
	</div>


	<div className="container politicas mb-5">

	<img className="rs" src={contact}/>

	</div>


	<div className="container politicas">
	<h1 className="titulo0 text-start">Métodos de pago</h1>
	<img className="imgPago " src={pago}/>

	</div>
	</footer>
);
