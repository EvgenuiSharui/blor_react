import React from "react"


const FooterLower = () =>{
    return(
        <div className="flex footer-lower">
			<div className="flex columns">	
				<div className="row">
					<div className="bottom-social">
						<a href="#" className="facebook"><img src="images/icon/facebook-logo.png" alt=""/></a>
						<a href="#" className="instagram"><img src="images/icon/instagram.png" alt=""/></a>
						<a href="#" className="twitter"><img src="images/icon/twitter.png" alt=""/></a>
						<a href="#" className="google"><img src="images/icon/google.png" alt=""/></a>
						<a href="#" className="vimeo"><img src="images/icon/vimeo.png" alt=""/></a>
						<a href="#" className="youtube"><img src="images/icon/you-tube1.png" alt=""/></a>
					</div>
				</div>
				<div className="copyright">
					Copyright @ - Designed by <a href="">ZEROTHEME</a>
				</div>
			</div>
		</div>
    )
}


export default FooterLower;