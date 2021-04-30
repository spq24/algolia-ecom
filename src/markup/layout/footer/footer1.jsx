import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../../../images/logo-white.png';

class Footer1 extends Component{
	render(){
		return(
			<>
				<footer>
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-12 col-lg-8 col-md-12 col-sm-12 order-2 order-lg-1">
									<div className="row">
										<div className="col-12 col-lg-6 col-md-6 col-sm-6">
											<div className="widget list-2">
												<h5 className="footer-title">Visit our studio at</h5>
												<ul>
													<li><Link to={"/"}>Home</Link></li>
													<li><Link to={"about-1"}>About Us</Link></li>
													<li><Link to={"blog-standard"}>Company News</Link></li>
													<li><Link to={"portfolio-grid-wide"}>Projects</Link></li>
													<li><Link to={"event"}>Events</Link></li>
													<li><Link to={"faq-1"}>Faq's</Link></li>
													<li><Link to={"contact-1"}>Talk To Us</Link></li>
													<li><Link to={"services-1"}>Services</Link></li>
													<li><Link to={"contact-1"}>Contact Us</Link></li>
													<li><Link to={"team"}>Our Team</Link></li>
												</ul>
											</div>
										</div>
										<div className="col-12 col-lg-6 col-md-6 col-sm-6">
											<div className="widget footer_talkus">
												<h5 className="footer-title">Message us</h5>
												<p>2005 Stokes Isle Apt. 896, Venaville <br/>10010, USA</p>
												<h5 className="footer-title">Useful Links</h5>
												<p>info@yourdomain.com<br/>(+68) 120034509</p>
											</div>
										</div>
										<div className="col-12 col-lg-12 col-md-12 col-sm-12">
											<div className="footer-innner-btm">
												<div className="footer-logo">
													<Link to={"index"}><img src={logo} alt=""/></Link>
												</div>
												<div className="copyright-bx">
													<p>© 2021 Themetrades. All Rights Reserved.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-md-12 col-sm-12 order-1 order-lg-2">
									<div className="subscribe-form">
										<h5 className="footer-title">Sign Up For A Newsletter</h5>
										<p className="text-capitalize m-b20">Weekly Breaking news analysis and cutting edge advices on job searching.</p>
										<form className="subscription-form">
											<div className="ajax-message"></div>
											<input name="email" required="required"  className="form-control" placeholder="Your Email Address" type="email"/>
											<button name="submit" defaultValue="Submit" type="submit" className="btn btn-block black">Submit</button>	
										</form>
										<h5 className="footer-title">Follow Us</h5>
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
				</footer>
				
			</>
		);
	}
}

export default Footer1;
