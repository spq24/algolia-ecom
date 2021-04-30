import React, { Component } from 'react';
import Slider from "react-slick"; 

// Images
import TestiPic1 from "../../../images/testimonials/pic1.jpg"
import TestiPic2 from "../../../images/testimonials/pic2.jpg"
import TestiPic3 from "../../../images/testimonials/pic3.jpg"
import TestiPic4 from "../../../images/testimonials/pic4.jpg"

const content = [
	{
		thumb: TestiPic1,
        title: "Best product ever !",
		name: "Michel Bohman",
		work: "Programer",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    },
	{
		thumb: TestiPic2,
        title: "Best Services",
		name: "Sonar Moyna",
		work: "Art Director",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    },
	{
		thumb: TestiPic3,
        title: "Great Support",
		name: "Kalina Mollika",
		work: "Client",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    },
	{
		thumb: TestiPic4,
        title: "Best product",
		name: "Peter Packer",
		work: "Art Director",
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...",
    },
]

class Testimonial2 extends Component{
	render(){
		
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
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
				<Slider {...settings} className="dots-sc arrow-none dots-style-1">
					{content.map((item, id) => (
						<div className="slider-item">
							<div className="testimonial-bx style2">
								<div className="testimonial-content">
									<h5 className="title">{item.title}</h5>
									<div className="testimonial-rating"> 
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
									<p>{item.text}</p>
								</div>
								<div className="client-info">
									<div className="testimonial-thumb">
										<img src={item.thumb} alt=""/>
									</div>
									<div className="testimonial-info">
										<h6 className="name">{item.name}</h6>
										<p>{item.work}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</>
		);
	}
}

export default Testimonial2;