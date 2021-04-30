import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Images
import caseStudies1 from '../../../images/case-studies/pic7.jpg';
import caseStudies2 from '../../../images/case-studies/pic6.jpg';
import caseStudies3 from '../../../images/case-studies/pic7.jpg';
import caseStudies4 from '../../../images/case-studies/pic8.jpg';
import caseStudies5 from '../../../images/case-studies/pic9.jpg';

const content = [
	{
		thumb: caseStudies1,
		tag: "Design",
		title: "Things You Should Do In Agency",
	},
	{
		thumb: caseStudies2,
		tag: "Programer",
		title: "Five Doubts About Agency You Should Clarify",
	},
	{
		thumb: caseStudies5,
		tag: "Client",
		title: "How To Have A Fantastic Agency With Minimal Spending",
	},
	{
		thumb: caseStudies3,
		tag: "Art",
		title: "Seven Awesome Things You Can Learn From Agency",
	},
	{
		thumb: caseStudies4,
		tag: "Studies",
		title: "Facts About Agency That Will Blow Your Mind",
	},
	{
		thumb: caseStudies1,
		tag: "Design",
		title: "Things You Should Do In Agency",
	},
	{
		thumb: caseStudies2,
		tag: "Programer",
		title: "Five Doubts About Agency You Should Clarify",
	},
	{
		thumb: caseStudies5,
		tag: "Client",
		title: "How To Have A Fantastic Agency With Minimal Spending",
	},
	{
		thumb: caseStudies3,
		tag: "Art",
		title: "Seven Awesome Things You Can Learn From Agency",
	},
	{
		thumb: caseStudies4,
		tag: "Studies",
		title: "Facts About Agency That Will Blow Your Mind",
	},
]

class LogoCarousel extends Component{
	
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 360,
					settings: {
						slidesToShow: 3,
					}
				}
			]
		};
		
		return(
			<>
				<Slider {...settings} className="case-studies-carousel slider-sp10 p-b20 arrow-none">
					{content.map((item, id) => (
						<div className="slider-item">
							<div className="case-studies-box">
								<img src={item.thumb} alt=""/>
								<div className="studies-info">
									<Link to={"/portfolio-single-1"} className="studies-tag">{item.tag}</Link>
									<h5 className="title"><Link to={"/portfolio-single-1"}>{item.title}</Link></h5>
								</div>
							</div>
						</div>
					))}
				</Slider >
			</>
		);
	}
}

export default LogoCarousel;