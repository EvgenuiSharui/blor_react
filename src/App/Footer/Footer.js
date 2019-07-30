import React from "react"

import './Footer.css'
import FooterUpper from "./FooterUpper/FooterUpper"
import FooterLower from "./FooterLower/FooterLower";

const Footer = () =>{
	return(
		<footer>
			<FooterUpper/>
			<FooterLower/>
		</footer>
	)
}



export default Footer;