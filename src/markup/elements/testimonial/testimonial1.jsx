import React, { Component } from 'react';
import Slider from "react-slick"; 

// Images
import TestiPic1 from "../../../images/testimonials/pic1.jpg"
import TestiPic2 from "../../../images/testimonials/pic2.jpg"
import TestiPic3 from "../../../images/testimonials/pic3.jpg"
import TestiPic4 from "../../../images/testimonials/pic4.jpg"

const content = [
	{
		thumb: TestiPic2,
		name: "Michel Bohman",
		work: "Programer",
		text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content hlook",
    },
	{
		thumb: TestiPic3,
		name: "Sonar Moyna",
		work: "Art Director",
		text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content hlook",
    },
	{
		thumb: TestiPic1,
		name: "Kalina Mollika",
		work: "Client",
		text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content hlook",
    },
	{
		thumb: TestiPic4,
		name: "Peter Packer",
		work: "Art Director",
		text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content hlook",
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
				<Slider {...settings} className="testimonial-carousel owl-btn-center-lr owl-btn-1">
					{content.map((item, id) => (
						<div className="slider-item">
							<div className="testimonial-bx">
								<div className="testimonial-content">
									<p>{item.text}</p>
								</div>
								<div className="testimonial-info">
									<h5 className="name">{item.name}</h5>
									<p>{item.work}</p>
								</div>
								<div className="testimonial-pic">
									<img src={item.thumb} alt=""/>
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