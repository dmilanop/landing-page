import { bottom } from "@popperjs/core";
import React from "react";

const Footer = () => {
	return (
		<nav
			className="navbar p-3 mb-2 bg-dark text-white"
			style={{
				position: "absolute",
				bottom: "0%",
				width: "100%",
				height: "4rem",
				padding: "0"
			}}>
			<div className="d-flex justify-content-center">
				<span
					className="navbar-brand"
					style={{ display: "flex", paddingLeft: "45rem" }}>
					Copyright © Your Website 2019
				</span>
			</div>
		</nav>
	);
};

export default Footer;
