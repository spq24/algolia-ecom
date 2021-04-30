import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll'
import {Nav, Tab} from 'react-bootstrap'

// Layout
import Header from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';

class MyAccount extends Component {
	
	render(){
		return (
			<>
				<Header/>
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">My Account</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>My Account</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container wow fadeIn" data-wow-delay="0.4s">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Usefull Product</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="my-account">
											<Tab.Container defaultActiveKey="tabOne">
												<Tab.Content>
													<Nav className="item-list">
														<Nav.Item><Nav.Link eventKey="tabOne">Login</Nav.Link></Nav.Item>
														<Nav.Item><Nav.Link eventKey="tabTwo">Register</Nav.Link></Nav.Item>
													</Nav>
													<Tab.Pane eventKey="tabOne">
														<form action="#">
															<div className="form-group">
																<input type="text" className="form-control" id="LoginUserName" aria-describedby="home-tab" placeholder="Username"/>
															</div>
															<div className="form-group">
																<input type="password" className="form-control" id="LoginPassword" aria-describedby="home-tab" placeholder="password"/>
															</div>
															<div className="form-group">
																<button type="button" className="btn primary radius-xl">login</button>
																<button type="button" className="btn-link primary forgot-pass">Forgot Password ?</button>
															</div>											
														</form>
													</Tab.Pane>
													<Tab.Pane eventKey="tabTwo">
														<form action="#">
															<div className="form-group">
																<input type="text" className="form-control" id="RegisterName" aria-describedby="home-tab" placeholder="Name"/>
															</div>
															<div className="form-group">
																<input type="email" className="form-control" id="RegisterEmail1" aria-describedby="home-tab" placeholder="Email"/>
															</div>
															<div className="form-group">
																<input type="text" className="form-control" id="RegisterUserName" aria-describedby="home-tab" placeholder="Username"/>
															</div>
															<div className="form-group">
																<input type="password" className="form-control" id="RegisterPassword" aria-describedby="home-tab" placeholder="password"/>
															</div>	
															<div className="form-group">
																<button type="button" className="btn primary radius-xl">Register Now</button>
															</div>													
														</form>
													</Tab.Pane>
												</Tab.Content>
											</Tab.Container>
										</div>
									</div>
								</div>
							</div>
						</div>
					
					</div>
				</div>
				
				<Footer/>
				
			</>
		);
	}
}

export default MyAccount;