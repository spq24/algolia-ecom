import React, { Component } from 'react';
import Slider from "react-slick"; 

// Images
import TestiPic1 from "../../../images/testimonials/pic1.jpg"
import TestiPic2 from "../../../images/testimonials/pic2.jpg"
import TestiPic3 from "../../../images/testimonials/pic3.jpg"

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
				<Slider {...settings} className="testimonial-carousel-3 style2 owl-btn-1 owl-btn-center-lr dots-style-1 dots-pr arrow-none dots-style-1">
					<div className="slider-item">
						<div className="testimonial-bx style2 blue">
							<div className="testimonial-content">
								<h5 className="title">Best product ever !</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={TestiPic1} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Michel Bohman</h6>
									<p>Programer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style2 red">
							<div className="testimonial-content">
								<h5 className="title">Best Services</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={TestiPic2} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Sonar Moyna</h6>
									<p>Art Director</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style2 orange">
							<div className="testimonial-content">
								<h5 className="title">Great Support</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={TestiPic3} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Kalina Mollika</h6>
									<p>Client</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style2 blue">
							<div className="testimonial-content">
								<h5 className="title">Best product ever !</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={TestiPic1} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Michel Bohman</h6>
									<p>Programer</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style2 red">
							<div className="testimonial-content">
								<h5 className="title">Best Services !</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={TestiPic2} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Sonar Moyna</h6>
									<p>Art Director</p>
								</div>
							</div>
						</div>
					</div>
					<div className="slider-item">
						<div className="testimonial-bx style2 orange">
							<div className="testimonial-content">
								<h5 className="title">Great Support</h5>
								<div className="testimonial-rating"> 
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</div>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</p>
							</div>
							<div className="client-info">
								<div className="testimonial-thumb">
									<img src={TestiPic3} alt=""/>
								</div>
								<div className="testimonial-info">
									<h6 className="name">Kalina Mollika</h6>
									<p>Client</p>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</>
		);
	}
}

export default Testimonial2;