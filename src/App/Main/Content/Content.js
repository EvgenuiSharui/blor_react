import React from "react"


const Content = () =>{
    return(
        <div>
            <section className="flex column">
			<div className="flex item">
				<div className="img">
					<img src="images/slide1.jpg" alt=""/>
				</div>
				<div className="title-article flex">
					<h3>The title on the article</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. 
						Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed 
						faucibus.consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis
						mi commodo et suscipit enim lacinia.</p>
					<a href="" className="button">Read More</a>
				</div>
			</div>
			<div className="item-reverse flex">
				<div className="img">
					<img src="images/slide2.jpg" alt=""/>
				</div>
				<div className="title-article flex">
					<h3>The title on the article</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. 
						Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed 
						faucibus.consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis 
						mi commodo et suscipit enim lacinia.</p>
					<a href="" className="button">Read More</a>
				</div>
			</div>
			<div className="flex item">
				<div className="img">
					<img src="images/slide3.jpg" alt=""/>
				</div>
				<div className="title-article flex">
					<h3>The title on the article</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. 
						Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed 
						faucibus.consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis 
						mi commodo et suscipit enim lacinia.</p>
					<a href="" className="button">Read More</a>
				</div>
			</div>
		</section>
        </div>
    )
}

export default Content;