import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Images
import sliderImg1 from "../../../images/slider/slide1.jpg"
import sliderImg2 from "../../../images/slider/slide2.jpg"

class Slider1 extends Component{
	
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
				
				<Slider {...settings} className="tt-slider slider-one owl-btn-1 slider-sp0">
					<div className="slider-item">
						<div className="slider-thumb ovbl-middle">
							<img src={sliderImg1} alt=""/>
						</div>
						<div className="slider-content text-white">
							<div className="container">
								<div className="content-inner">
									<h6 className="sub-title">Discover Awesome Features.</h6>
									<h2 className="title">We Provide<br/> Solution On Your<br/> Business</h2>
									<Link className="btn button-md radius-xl" to={"portfolio-grid-2"}>View Project</Link>
								</div>
							</div>
						</div>
					</div>			
					<div className="slider-item">
						<div className="slider-thumb ovbl-middle">
							<img src={sliderImg2} alt=""/>
						</div>
						<div className="slider-content text-white">
							<div className="container">
								<div className="content-inner">
									<h6 className="sub-title">Discover Awesome Features.</h6>
									<h2 className="title">We Provide<br/> Solution On Your<br/> Business</h2>
									<Link className="btn button-md radius-xl" to={"portfolio-grid-2"}>View Project</Link>
								</div>
							</div>
						</div>
					</div>					
				</Slider>
			</>
		);
	}
}

export default Slider1;
