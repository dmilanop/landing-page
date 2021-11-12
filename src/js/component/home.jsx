import React from "react";
import "bootstrap";
import Navbar from "./Navbar.jsx";
import FirstCard from "./FirstCard.jsx";
import SecondCard from "./SecondCard.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<br />
			<FirstCard />
			<br />
			<br />
			<br />
			<SecondCard />
			<Footer />
		</>
	);
};
export default Home;
