import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import Team1 from "../../../images/team/pic1.jpg"
import TeamGif1 from "../../../images/team/pic1.gif"
import Team2 from "../../../images/team/pic2.jpg"
import TeamGif2 from "../../../images/team/pic2.gif"
import Team3 from "../../../images/team/pic3.jpg"
import TeamGif3 from "../../../images/team/pic3.gif"
import Team4 from "../../../images/team/pic4.jpg"
import TeamGif4 from "../../../images/team/pic4.gif"
import Team5 from "../../../images/team/pic5.jpg"
import TeamGif5 from "../../../images/team/pic5.gif"
import Team6 from "../../../images/team/pic6.jpg"
import TeamGif6 from "../../../images/team/pic6.gif"

const content = [
	{
		thumb: Team4,
		thumbGif: TeamGif4,
		Name: "Michel H. Bohman",
		Work: "CEO & Founder",
    },
	{
		thumb: Team1,
		thumbGif: TeamGif1,
		Name: "Sonar Z. Moyna",
		Work: "Programer",
    },
	{
		thumb: Team2,
		thumbGif: TeamGif2,
		Name: "Kalina GH. Mollika",
		Work: "Manager",
    },
	{
		thumb: Team3,
		thumbGif: TeamGif3,
		Name: "Falikaz DJ. Pauls",
		Work: "Web Designer",
    },
	{
		thumb: Team5,
		thumbGif: TeamGif5,
		Name: "Kalina GH. Mollika",
		Work: "Manager",
    },
	{
		thumb: Team6,
		thumbGif: TeamGif6,
		Name: "Falikaz DJ. Pauls",
		Work: "Web Designer",
    },
]

class Team extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt1 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Team</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Team</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 team-page" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h2 className="title-head m-b0">Meet Our Awesome <br/>Team Mamber</h2>
									<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
								</div>
								<div className="row">
									{content.map((item, id) => (
										<div className="col-lg-4 col-md-6 col-sm-6">
											<div className="team-mamber m-b20">
												<div className="team-media">
													<img src={item.thumb} alt=""/>
													<img src={item.thumbGif} className="gif" alt=""/>
													<ul className="team-social">
														<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
														<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
														<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
														<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
													</ul>
												</div>
												<div className="team-info">
													<h4 className="title"><Link to={"#"}>{item.Name}</Link></h4>
													<span>{item.Work}</span>
												</div>
											</div>
										</div>
									))}
								</div>
								<div className="text-center section-sp4">
									<h3 className="title-head m-b20">Start working together?</h3>
									<Link to={"#"} className="btn button-md radius-xl">Find out more</Link>
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

export default Team;