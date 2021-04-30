import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll'
import {Accordion, Card} from 'react-bootstrap';

// Layout
import Header1 from "../../layout/header/header1";
import Footer from "../../layout/footer/footer1";

// Elements
import Testimonial from "../../elements/testimonial/testimonial2";

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import bgPic1 from '../../../images/background/bg1.jpg';

class Faq extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">About Us Simple</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>About Us Simple</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					<div className="content-block" id="content-area">
						<div className="section-area section-sp2 team-page bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Frequently asked questions</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-12">
										<Accordion className="ttr-accordion faq-bx" defaultActiveKey="0">
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="0">
													<Link to="#">How can we help your business?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="1">
													<Link to="#">What are the advantages of Mitech?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="1">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="2">
													<Link to="#">How working process is simplified?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="3">
													<Link to="#">What are the advantages of Mitech?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="3">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="4">
													<Link to="#">How can we help your business?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="4">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
										</Accordion>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12">
										<Accordion className="ttr-accordion faq-bx" defaultActiveKey="0">
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="0">
													<Link to="#">How can we help your business?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="1">
													<Link to="#">What are the advantages of Mitech?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="1">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="2">
													<Link to="#">How working process is simplified?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="3">
													<Link to="#">What are the advantages of Mitech?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="3">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="4">
													<Link to="#">How can we help your business?</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="4">
													<Card.Body>
														Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
										</Accordion>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp2 ovpr-dark about-video2 bg-fix" style={{backgroundImage:"url("+bgPic1+")", backgroundPosition:"top",}}>
							<div className="container">
								<div className="heading-bx text-center text-white">
									<h2 className="title-head m-b0">What clients talk about us</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								
								<Testimonial />
							</div>
						</div>
					
					</div>
				</div>
				
				<Footer/>
				
			</>
		);
	}
}

export default Faq;