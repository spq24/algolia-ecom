import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import ProductPic1 from "../../../images/product/pic1.jpg"
import ProductPic2 from "../../../images/product/pic2.jpg"
import ProductPic3 from "../../../images/product/pic3.jpg"
import ProductPic4 from "../../../images/product/pic4.jpg"
import ProductPic5 from "../../../images/product/pic5.jpg"

const content = [
	{
		thumb: ProductPic1,
        title: "White T-Shirt",
		size: "42",
		price: "$129 USD",
		status: "42",
		total: "$129 USD",
    },
	{
		thumb: ProductPic2,
        title: "Men Shapewear",
		size: "33",
		price: "$128 USD",
		status: "33",
		total: "$128 USD",
    },
	{
		thumb: ProductPic3,
        title: "Men Cargoss",
		size: "34",
		price: "$185 USD",
		status: "34",
		total: "$185 USD",
    },
	{
		thumb: ProductPic4,
        title: "Beige Track Pants",
		size: "36",
		price: "$129 USD",
		status: "36",
		total: "$129 USD",
    },
	{
		thumb: ProductPic5,
        title: "Blue Track Pants",
		size: "38",
		price: "$129 USD",
		status: "38",
		total: "$129 USD",
    },
]
	
class ShopCart extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Shop Cart</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Shop Cart</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								{/* <!-- Shopping cart table --> */}
								<div className="table-responsive cart-table wow fadeIn" data-wow-delay="0.8s">
								  <table className="table table-cards align-items-center">
									<thead>
										<tr>
											<th scope="col" className="sort" data-sort="product">Product</th>
											<th scope="col" className="sort" data-sort="price">Price</th>
											<th scope="col" className="sort" data-sort="size">Size</th>
											<th scope="col">Quantity</th>
											<th scope="col" className="sort" data-sort="total">Total</th>
											<th scope="col"></th>
										</tr>
									</thead>
									<tbody className="list">
										{content.map((item, id) => (
											<tr>
												<th scope="row">
													<div className="media align-items-center">
														<img alt="" src={item.thumb}/>
														<div className="media-body">
															<span className="title">{item.title}</span>
															<span>Size: {item.size}</span>
														</div>
													</div>
												</th>
												<td className="price">{item.price}</td>
												<td><span className="status">{item.status}</span></td>
												<td><input type="text" className="form-control" style={{width: "80px"}} defaultValue="1"/></td>
												<td className="total">{item.total}</td>
												<td className="text-right">
													{/* <!-- Actions --> */}
													<div className="actions ml-3">
														<OverlayTrigger overlay={<Tooltip id="addToCart">Quick view</Tooltip>}>
															<Link to={"#"}>
																<i className="fa fa-external-link"></i>
															</Link>
														</OverlayTrigger>
														<OverlayTrigger overlay={<Tooltip id="addToCart">Move to trash</Tooltip>}>
															<Link to={"#"}>
																<i className="fa fa-times"></i>
															</Link>
														</OverlayTrigger>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								  </table>
								</div>
								{/* <!-- Cart information --> */}
								<div className="card m-b0">
									<div className="card-body">
										<div className="row justify-content-between align-items-center">
											<div className="col-md-6 order-md-2 mb-4 mb-md-0">
												<div className="d-flex align-items-center justify-content-md-end">
													<span className="h6 text-muted d-inline-block mr-3 mb-0">Total value:</span>
													<span className="h4 mb-0 text-black">$450.85 USD</span>
												</div>
											</div>
											<div className="col-md-6 order-md-1">
												<button type="button" className="btn">Checkout</button>
												<Link to="shop" className="btn-link m-l15">Return to shop</Link>
											</div>
										</div>
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

export default ShopCart;