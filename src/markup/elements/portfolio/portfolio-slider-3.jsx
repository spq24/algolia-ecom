import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import portPic1 from "../../../images/portfolio/portfolio-1/image_1.jpg"
import portPic2 from "../../../images/portfolio/portfolio-1/image_2.jpg"
import portPic3 from "../../../images/portfolio/portfolio-1/image_3.jpg"
import portPic4 from "../../../images/portfolio/portfolio-1/image_4.jpg"

const content = [
	{
		thumb: portPic1,
        title: "Marketing",
		exeTitle: "Manager",
    },
	{
		thumb: portPic2,
        title: "Creative Design",
		exeTitle: "Development",
    },
	{
		thumb: portPic3,
        title: "Web Development",
		exeTitle: "Designer",
    },
	{
		thumb: portPic4,
        title: "Search Engine",
		exeTitle: "CEO",
    },
	{
		thumb: portPic1,
        title: "Marketing",
		exeTitle: "Manager",
    },
	{
		thumb: portPic2,
        title: "Creative Design",
		exeTitle: "Development",
    },
	{
		thumb: portPic3,
        title: "Web Development",
		exeTitle: "Designer",
    },
	{
		thumb: portPic4,
        title: "Search Engine",
		exeTitle: "CEO",
    },
]

class portfolioSlider3 extends Component{
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				<Slider {...settings} className="portfolio-carousel-3 style-3 slider-sp15 owl-btn-1 owl-btn-center-lr">
					{content.map((item, id) => (
						<div className="slider-item">
							<div className="portfolio-box style-1 m-b0">
								<div className="portfolio-media">
									<img src={item.thumb} alt=""/>
								</div>
								<div className="portfolio-info">
									<h4 className="title"><Link to={"/portfolio-single-1"}>{item.title}</Link></h4>
									<span className="exe-title">{item.exeTitle}</span>	
								</div>
							</div>
						</div>
					))}
				</Slider>
			</>
		);
	}
}

export default portfolioSlider3;