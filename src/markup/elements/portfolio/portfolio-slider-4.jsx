import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 

// Images
import portPic15 from "../../../images/portfolio/portfolio-1/image_15.jpg"
import portPic16 from "../../../images/portfolio/portfolio-1/image_16.jpg"
import portPic17 from "../../../images/portfolio/portfolio-1/image_17.jpg"
import portPic18 from "../../../images/portfolio/portfolio-1/image_18.jpg"

const content = [
	{
		thumb: portPic18,
        title: "Marketing",
		exeTitle: "Manager",
    },
	{
		thumb: portPic16,
        title: "Creative Design",
		exeTitle: "Development",
    },
	{
		thumb: portPic17,
        title: "Web Development",
		exeTitle: "Designer",
    },
	{
		thumb: portPic15,
        title: "Search Engine",
		exeTitle: "CEO",
    },
	{
		thumb: portPic18,
        title: "Marketing",
		exeTitle: "Manager",
    },
	{
		thumb: portPic16,
        title: "Creative Design",
		exeTitle: "Development",
    },
	{
		thumb: portPic17,
        title: "Web Development",
		exeTitle: "Designer",
    },
	{
		thumb: portPic15,
        title: "Search Engine",
		exeTitle: "CEO",
    },
]

class portfolioSlider4 extends Component{
	render(){
		
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				<Slider {...settings} className="portfolio-carousel-4 style-4 slider-sp7 owl-btn-1 owl-btn-center-lr">
					{content.map((item, id) => (
						<div className="slider-item">
							<div className="portfolio-box style-3 m-b0">
								<div className="portfolio-media">
									<img src={item.thumb} alt=""/>
								</div>
								<div className="portfolio-info">
									<h4 className="title"><Link to={"#"}>{item.title}</Link></h4>
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

export default portfolioSlider4;