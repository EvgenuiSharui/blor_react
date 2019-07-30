import React from "react"

import './main.css'
import AboutUs from "./AboutUs/AboutUs";
import Portfolio from "./Portfolio/Portfolio"
import OurPhilosophy from "./OurPhilosophy/OurPhilosophy"
import Content from "./Content/Content"
import Slider from "../Slider/Slider";

const Main = () =>{
	return(
		<div>
			<Slider/>
			<AboutUs/>
            <Portfolio/>
            <OurPhilosophy/>
			<Content/>
		</div>
	)
}


export default Main;