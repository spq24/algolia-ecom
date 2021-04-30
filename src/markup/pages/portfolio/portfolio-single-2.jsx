import React, { Component } from 'react';

// Layout
import Header from '../../layout/header/header4';
import Footer from '../../layout/footer/footer1';

// Elements
import ClientLogo from "../../elements/client-logo/logo-carousel";
import PortSlider from "../../elements/portfolio/portfolio-slider-3";
import PortSlider1 from "../../elements/portfolio/portfolio-slider-2";
import Counter from "../../elements/counter/counter2";
import Skillbar from "../../elements/skillbar/skillbar";

// Images
import pattern1 from '../../../images/pattern/pt1.png';
import portFullPic2 from '../../../images/portfolio/full/pic2.jpg';

class PortSingle2 extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="content-block" id="content-area">
						
						<div className="section-area bg-white">
							<PortSlider1 />
						</div>					
						
						<Skillbar />
						
						<div className="section-area bg-gray section-sp1">
							<div className="container">
								<Counter />
							</div>
						</div>
						
						<div className="section-area">
							<img src={portFullPic2} alt=""/>
						</div>
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container-max wow fadeIn" data-wow-delay="0.4s">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Related Work</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								
								<PortSlider />
								
							</div>
						</div>
						
						<div className="section-area section-sp2 bg-white" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">We Are Known By The <br/>Companies We Keep</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<ClientLogo />
							</div>
						</div>
						
					</div>
					
				</div>
				
				<Footer />
								
			</>
		);
	}
}

export default PortSingle2;