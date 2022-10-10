import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-transparent mb-3">
			<Link to="/">
			<img className="logo" src={logo} />
			</Link>
	
		</nav>
	);
};
