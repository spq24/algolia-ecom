import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Elements
import Sidebar from '../../elements/shop/shop-sidebar';

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import ProductPic1 from "../../../images/product/pic1.jpg"
import ProductPic2 from "../../../images/product/pic2.jpg"
import ProductPic3 from "../../../images/product/pic3.jpg"
import ProductPic4 from "../../../images/product/pic4.jpg"
import ProductPic5 from "../../../images/product/pic5.jpg"
import ProductPic6 from "../../../images/product/pic6.jpg"
import ProductPic7 from "../../../images/product/pic7.jpg"
import ProductPic8 from "../../../images/product/pic8.jpg"
import ProductPic9 from "../../../images/product/pic9.jpg"

const content = [
	{
		thumb: ProductPic1,
        title: "Solid Men Beige",
		price: "$19.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic2,
        title: "Solid Men Beige",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic3,
        title: "White T-Shirt",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic4,
        title: "Solid Men Cargoss",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic5,
        title: "Men Shapewear",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic6,
        title: "Dark Blue Track Pants",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic7,
        title: "Graphic Print Men",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic8,
        title: "Self Design Men",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic9,
        title: "Women Round Neck",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic1,
        title: "Neck White T-Shirt",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic2,
        title: "Beige Track Pants",
		price: "$49.00",
		disPrice: "$59.00",
    },
	{
		thumb: ProductPic3,
        title: "Bottle with Leather Grip",
		price: "$49.00",
		disPrice: "$59.00",
    },
]

class ShopSidebar extends Component {
	
	componentDidMount() {
		var filterBtn = document.getElementById("filter-btn")
        var filterLeft = document.querySelector(".filter-left")
        var filterClose = document.getElementById("filter-close")
		
        filterBtn.addEventListener('click',function(){
            filterLeft.classList.add("filter-on")
        })

        filterClose.addEventListener('click',function(){
            filterLeft.classList.remove("filter-on")
        })
	}
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Shop Sidebar</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Shop Sidebar</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12 filter-bar">
										<div className="filter-mobile">
											<div className="filter-bx">
												<select className="bs-select-hidden">
													<option>Sort By</option>
													<option>Popular</option>
													<option>Low to High</option>
													<option>High to Low</option>
												</select>
											</div>
											<div className="filter-bx">
												<Link to="#" id="filter-btn" className="filter-btn black"><i className="fa fa-filter"></i> Fillter</Link>
											</div>
										</div>
									</div>
									<div className="col-lg-9 col-md-12 col-sm-12">
										<div className="row">
											{content.map((item, id) => (
												<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
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
										</div>
										<div className="pagination-bx rounded-sm text-center clearfix page-shadow">
											<ul className="pagination">
												<li className="previous"><Link to="#">Prev</Link></li>
												<li className="active"><Link to="#">1</Link></li>
												<li><Link to="#">2</Link></li>
												<li><Link to="#">3</Link></li>
												<li className="next"><Link to="#">Next</Link></li>
											</ul>
										</div>
									</div>
									<div className="col-lg-3 col-md-12 col-sm-12 wow fadeInUp sticky-top filter-bar" data-wow-delay="0.4s">
										<Sidebar />
									</div>
								</div>
							</div>
						</div>						
						
					</div>
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default ShopSidebar;