import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import TeamPic7 from "../../../images/team/pic7.jpg"
import TeamPic8 from "../../../images/team/pic8.jpg"
import TeamPic9 from "../../../images/team/pic9.jpg"

class Team3 extends Component{
	
	render(){
		return(
			<>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.3s">
						<div className="team-mamber team-box2 m-t60 red m-sm-t0">
							<div className="team-media">
								<img src={TeamPic8} alt=""/>
								<ul className="team-social">
									<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
									<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
								</ul>
							</div>
							<div className="team-info red">
								<h4 className="title"><Link to={"#"}>Michel H. Bohman</Link></h4>
								<span>CEO & Founder</span>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.6s">
						<div className="team-mamber team-box2 m-t30 blue m-md-t80">
							<div className="team-media">
								<img src={TeamPic9} alt=""/>
								<ul className="team-social">
									<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
									<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
								</ul>
							</div>
							<div className="team-info blue">
								<h4 className="title"><Link to={"#"}>Sonar Z. Moyna</Link></h4>
								<span>Programer</span>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="0.9s">
						<div className="team-mamber team-box2 m-b20 orange m-md-t80">
							<div className="team-media">
								<img src={TeamPic7} alt=""/>
								<ul className="team-social">
									<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
									<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
								</ul>
							</div>
							<div className="team-info orange">
								<h4 className="title "><Link to={"#"}>Kalina GH. Mollika</Link></h4>
								<span>Manager</span>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Team3;