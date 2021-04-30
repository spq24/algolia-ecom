import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../../../images/logo-white.png';

class Footer3 extends Component{
	render(){
		return(
			<>
				<footer className="footer-style2">
					<div className="footer-top bt0">
						<div className="container">
							<div className="row">
								<div className="col-6 col-lg-3 col-md-2 col-sm-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Company</h5>
										<ul>
											<li><Link to={"event"}><span>Event</span></Link></li>
											<li><Link to={"team"}><span>Team</span></Link></li>
											<li><Link to={"faq-1"}><span>FAQ's</span></Link></li>
											<li><Link to={"my-account"}><span>My Account</span></Link></li>
											<li><Link to={"contact-1"}><span>Contact Us</span></Link></li>
											<li><Link to={"error-404"}><span>404 Page</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-6 col-lg-3 col-md-3 col-sm-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Our Product</h5>
										<ul>
											<li><Link to={"shop"}><span>Shop</span> </Link></li>
											<li><Link to={"shop-sidebar"}><span>Shop Sidebar</span></Link></li>
											<li><Link to={"shop-cart"}><span>Cart</span></Link></li>
											<li><Link to={"shop-checkout"}><span>Checkout</span></Link></li>
											<li><Link to={"shop-details"}><span>Product Details</span></Link></li>
											<li><Link to={"my-account"}><span>My Account</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-3 col-md-2 col-sm-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Blog</h5>
										<ul>
											<li><Link to={"blog-standard"}><span>Blog Standard</span></Link></li>
											<li><Link to={"blog-classic"}><span>Blog Classic</span></Link></li>
											<li><Link to={"blog-classic-sidebar"}><span>Blog Classic Sidebar</span></Link></li>
											<li><Link to={"blog-list"}><span>Blog List Sidebar</span></Link></li>
											<li><Link to={"blog-masonry"}><span>Masonry</span></Link></li>
											<li><Link to={"blog-details-sidebar"}><span>Blog Details</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-3 col-md-5 col-sm-6 footer-col-4">
									<div className="widget widget_info">
										<h5 className="footer-title">Talk To Us</h5>
										<ul>
											<li><strong>Support</strong>support@example.com</li>
											<li><strong>Skype</strong>toraExample</li>
											<li><strong>Sales</strong>tora@example.com</li>
										</ul>
									</div>
									<div className="widget">		
										<h5 className="footer-title">Stay In Touch</h5>
										<ul className="list-inline ft-social-bx">
											<li><Link to={"#"} className="btn button-sm"><i className="fa fa-facebook"></i></Link></li>
											<li><Link to={"#"} className="btn button-sm"><i className="fa fa-twitter"></i></Link></li>
											<li><Link to={"#"} className="btn button-sm"><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to={"#"} className="btn button-sm"><i className="fa fa-google-plus"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-left">
									<p className="m-b0">© 2021 Themetrades. 
									<img src={logo} className="footer-b-logo m-lr5" width="50" alt=""/> 
									All Rights Reserved.</p>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-right">
									<ul className="link-inline">
										<li><Link to={"/"}>Home</Link></li>
										<li><Link to={"about-1"}>About</Link></li>
										<li><Link to={"faq-1"}>FAQs</Link></li>
										<li><Link to={"contact-1"}>Contact</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer3;