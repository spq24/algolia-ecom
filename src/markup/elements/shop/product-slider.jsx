import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick"; 
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

// Images
import ProductPic1 from "../../../images/product/pic1.jpg"
import ProductPic2 from "../../../images/product/pic2.jpg"
import ProductPic3 from "../../../images/product/pic3.jpg"
import ProductPic4 from "../../../images/product/pic4.jpg"
import ProductPic5 from "../../../images/product/pic5.jpg"

const content = [
	{
		thumb: ProductPic1,
        title: "Bottle with Leather Grip",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic2,
        title: "Bottle with Leather Grip",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic3,
        title: "Bottle with Leather Grip",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic4,
        title: "Bottle with Leather Grip",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic5,
        title: "Bottle with Leather Grip",
		price: "$49.00",
		disPrice: "$59.00",
    }
]

class Testimonial2 extends Component{
	
	render(){
		
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
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
				<Slider {...settings} className="owl-btn-1 dots-pr owl-btn-center-lr dots-style-1">
					{content.map((item, id) => (
						<div className="slider-item">
							<div className="item-box">
								<div className="item-media">
									<img src={item.thumb} alt=""/>
									<ul>
										<li>
											<OverlayTrigger overlay={<Tooltip id="addToCart">Add To Cart</Tooltip>}>
												<Link to={"#"}>
													<i className="fa fa-shopping-bag"></i>
												</Link>
											</OverlayTrigger>
										</li>
										<li>
											<OverlayTrigger overlay={<Tooltip id="addToWishlist">Add To Wishlist</Tooltip>}>
												<Link to={"#"}>
													<i className="fa fa-heart"></i>
												</Link>
											</OverlayTrigger>
										</li>
									</ul>
								</div>
								<div className="item-info">
									<h6 className="title"><Link to="shop-details">{item.title}</Link></h6>
									<div className="price">
										<span>{item.price}</span>
										<del>{item.disPrice}</del>
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
