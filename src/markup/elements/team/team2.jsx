import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import TeamPic1 from "../../../images/team/pic1.jpg"
import TeamPicGif1 from "../../../images/team/pic1.gif"
import TeamPic2 from "../../../images/team/pic2.jpg"
import TeamPicGif2 from "../../../images/team/pic2.gif"
import TeamPic3 from "../../../images/team/pic3.jpg"
import TeamPicGif3 from "../../../images/team/pic3.gif"
import TeamPic4 from "../../../images/team/pic4.jpg"
import TeamPicGif4 from "../../../images/team/pic4.gif"

const content = [
	{
		thumb: TeamPic4,
		thumbGif: TeamPicGif4,
		Name: "Michel H. Bohman",
		Work: "CEO & Founder",
    },
	{
		thumb: TeamPic1,
		thumbGif: TeamPicGif1,
		Name: "Sonar Z. Moyna",
		Work: "Programer",
    },
	{
		thumb: TeamPic2,
		thumbGif: TeamPicGif2,
		Name: "Kalina GH. Mollika",
		Work: "Manager",
    },
	{
		thumb: TeamPic3,
		thumbGif: TeamPicGif3,
		Name: "Falikaz DJ. Pauls",
		Work: "Web Designer",
    },
]

class Team2 extends Component{
	
	render(){
		return(
			<>
				<div className="row">
					{content.map((item, id) => (
						<div className="col-lg-3 col-md-6 col-sm-6">
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
			</>
		);
	}
}

export default Team2;