import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import bgPic3 from "../../../images/background/bg3.png"

class Action1 extends Component{
	
	render(){
		return(
			<>
				<div className="section-area section-sp1 bg-primary" style={{backgroundImage: "url("+bgPic3+")", backgroundPosition: "center"}}>
					<div className="container">
						<div className="heading-bx text-center text-white style3">
							<h2 className="title-head m-b0">We Offer The Best Solution <br/>For Business</h2>
							<p className="m-b20">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
							<Link to={"#"} className="btn-secondry outline white">Get Started Now</Link>
						</div>
						
					</div>
				</div>
			</>
		);
	}
}

export default Action1;