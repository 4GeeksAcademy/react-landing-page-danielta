import React from "react";
import NavBar from "./navbar";
import Container from "./container";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar/>
			<Container/>
			<Footer/>
		</div>
	);
};

export default Home;
