import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Images
import Banner4 from "../../../images/banner/banner4.jpg"
import pattern1 from '../../../images/pattern/pt1.png';
import MasterCard from "../../../images/icon/mastercard.png"
import Visa from "../../../images/icon/visa.png"
import Skrill from "../../../images/icon/skrill.png"
import Paypal from "../../../images/icon/paypal.png"
import ProductPic1 from "../../../images/product/pic1.jpg"
import ProductPic2 from "../../../images/product/pic2.jpg"
import ProductPic3 from "../../../images/product/pic3.jpg"

class ShopCheckout extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+Banner4+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Shop Checkout</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Shop Checkout</li>
									</ul>
								</div>
							</div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="row row-grid checkout-area">
									<div className="col-lg-8 m-b50 wow fadeInUp" data-wow-delay="0.4s">
										<form>
											<div className="card">
												<div className="card-header">
													<div className="row">
														<div className="col-xl-8 col-lg-7 col-md-8 col-sm-12">
															<div className="custom-control custom-checkbox">
																<input type="radio" name="radio-payment" className="custom-control-input" id="radio-payment-card"/>
																<label className="custom-control-label" htmlFor="radio-payment-card">Credit Card</label>
															</div>
															<p className="m-b0 m-t10">Safe money transfer using your bank account. We support Mastercard, Visa, Maestro and Skrill.</p>
														</div>
														<div className="col-xl-4 col-lg-5 col-md-4 col-sm-12 text-right">
															<img alt="" className="ml-2" src={MasterCard}/>
															<img alt="" className="ml-2" src={Visa}/>
															<img alt="" className="ml-2" src={Skrill}/>
														</div>
													</div>
												</div>
												<div className="card-body">
													<div className="row">
														<div className="col-md-12">
															<div className="form-group">
																<div className="input-group">
																	<input type="text" className="form-control" placeholder="4789 5697 0541 7546" autoComplete="off" maxLength="19"/>
																	<div className="input-group-append">
																		<span className="input-group-text"><i className="fa fa-credit-card"></i></span>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-md-6">
															<div className="form-group">
																<label className="control-label">Name on card</label>
																<input type="text" className="form-control" placeholder="John Doe"/>
															</div>
														</div>
														<div className="col-md-3">
															<div className="form-group">
																<label className="control-label">Expiry date</label>
																<input type="text" className="form-control" data-mask="00/00" placeholder="MM/YY" autoComplete="off" maxLength="5"/>
															</div>
														</div>
														<div className="col-md-3">
															<div className="form-group">
																<label className="control-label">CVV code</label>
																<div className="input-group">
																	<input type="text" className="form-control" placeholder="746" autoComplete="off" maxLength="3"/>
																	<div className="input-group-append">
																		<span className="input-group-text"><i className="fa fa-question-circle"></i></span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* <!-- Add money using PayPal --> */}
											<div className="card">
												<div className="card-header">
													<div className="row">
														<div className="col-lg-8 col-md-8 col-sm-12">
															<div className="custom-control custom-checkbox">
																<input type="radio" className="custom-control-input" name="radio-payment" id="radio-payment-paypal"/>
																<label className="custom-control-label" htmlFor="radio-payment-paypal">PayPal</label>
															</div>
															<p className="m-b0 m-t10">Pay your order using the most known and secure platform for online money transfers. You will be redirected to PayPal to finish complete your purchase.</p>
														</div>
														<div className="col-lg-4 col-md-4 col-sm-12 text-right">
															<img alt="" src={Paypal} width="70"/>
														</div>
													</div>
												</div>
											</div>
											<div className="text-right">
												<Link to="shop-details" className="btn-link m-r20">Return to shop</Link>
												<button type="button" className="btn">Complete order</button>
											</div>
										</form>
									</div>
									<div className="col-lg-4 wow fadeInUp" data-wow-delay="0.8s">
										<aside className="sticky-top">
											<div className="card" id="card-summary">
												<div className="card-header py-3">
													<div className="row align-items-center">
														<div className="col-6">
															<span className="h6">Summary</span>
														</div>
														<div className="col-6 text-right">
															<span className="btn button-sm green">3 items</span>
														</div>
													</div>
												</div>
												<div className="card-body">
													<div className="cart-box">
														<div className="product-img">
															<img alt="" src={ProductPic1}/>
														</div>
														<div className="product-dec">
															<h6 className="title">Women running shoes</h6>
															<span className="product-qua">2 x $23.00</span>
															<span className="product-price">$23.00</span>
														</div>
													</div>
													<div className="cart-box">
														<div className="product-img">
															<img alt="" src={ProductPic2}/>
														</div>
														<div className="product-dec">
															<h6 className="title">Women running shoes</h6>
															<span className="product-qua">2 x $23.00</span>
															<span className="product-price">$23.00</span>
														</div>
													</div>
													<div className="cart-box last">
														<div className="product-img">
															<img alt="" src={ProductPic3}/>
														</div>
														<div className="product-dec">
															<h6 className="title">Women running shoes</h6>
															<span className="product-qua">2 x $23.00</span>
															<span className="product-price">$23.00</span>
														</div>
													</div>
													{/* <!-- Subtotal --> */}
													<div className="subtotal">
														<small>Subtotal:</small>
														<span>$330.50</span>
													</div>
													<div className="shipping">
														<small>Shipping:</small>
														<span>Fast Delivery</span>
													</div>
													<div className="total">
														<small>Total:</small>
														<span>$355.50</span>
													</div>
												</div>
											</div>
										</aside>
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

export default ShopCheckout;