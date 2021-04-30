import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import testPic1 from '../../../images/testimonials/pic1.jpg';
import testPic2 from '../../../images/testimonials/pic2.jpg';
import testPic3 from '../../../images/testimonials/pic3.jpg';
import testPic4 from '../../../images/testimonials/pic4.jpg';
import testPic5 from '../../../images/testimonials/pic5.jpg';
import testPic6 from '../../../images/testimonials/pic6.jpg';

class Team1 extends Component{
	
	componentDidMount() {
		
		// Search Form Popup
		var searchBtn = document.querySelector(".team-media")
        var searchForm = document.querySelector(".team-section")
        var closeBtn = document.querySelector(".close-team")
		
        searchBtn.addEventListener('click',function(){
            searchForm.classList.add("active")
        })

        closeBtn.addEventListener('click',function(){
            searchForm.classList.remove("active")
        })
    }
	
	render(){
		return(
			<>
				<div className="section-sp2 team-area" data-name="MEMBER">
					<div className="heading-bx text-center">
						<h2 className="title-head m-b0">Our Team Experts</h2>
						<p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
					</div>
					<div className="team-mambers">
						<div className="team-mambers-area">
							<div className="item">
								<div className="team-media get-member-info" data-id="TeamMember_1">
									<Link to={"#"}><img src={testPic1} alt=""/></Link>
								</div>
							</div>
							<div className="item">
								<div className="team-media get-member-info" data-id="TeamMember_2">
									<Link to={"#"}><img src={testPic2} alt=""/></Link>
								</div>
							</div>
							<div className="item">
								<div className="team-media get-member-info" data-id="TeamMember_3">
									<Link to={"#"}><img src={testPic3} alt=""/></Link>
								</div>
							</div>
							<div className="item">
								<div className="team-media get-member-info" data-id="TeamMember_4">
									<Link to={"#"}><img src={testPic4} alt=""/></Link>
								</div>
							</div>
							<div className="item">
								<div className="team-media get-member-info" data-id="TeamMember_5">
									<Link to={"#"}><img src={testPic5} alt=""/></Link>
								</div>
							</div>
							<div className="item">
								<div className="team-media get-member-info" data-id="TeamMember_6">
									<Link to={"#"}><img src={testPic6} alt=""/></Link>
								</div>
							</div>
						</div>
						<div className="team-members-section">
							<div className="team-section" data-info="TeamMember_1">
								<div className="team-box">
									<div className="team-media">
										<img src="assets/images/team/pic1.gif" alt=""/>
									</div>
									<div className="team-info">
										<h4 className="team-title"><Link to={"#"}>Michel H. Bohman</Link></h4>
										<span>Ceo & Founder</span>
										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
										<ul className="list-inline team-social">
											<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
										</ul>
									</div>
								</div>
								<Link to={"#"} className="close-team">&times;</Link>
							</div>
							<div className="team-section" data-info="TeamMember_2">
								<div className="team-box">
									<div className="team-media">
										<img src="assets/images/team/pic2.gif" alt=""/>
									</div>
									<div className="team-info">
										<h4 className="team-title"><Link to={"#"}>Sonar Z. Moyna</Link></h4>
										<span>Programer</span>
										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
										<ul className="list-inline team-social">
											<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
										</ul>
									</div>
								</div>
								<Link to={"#"} className="close-team">&times;</Link>
							</div>
							<div className="team-section" data-info="TeamMember_3">
								<div className="team-box">
									<div className="team-media">
										<img src="assets/images/team/pic3.gif" alt=""/>
									</div>
									<div className="team-info">
										<h4 className="team-title"><Link to={"#"}>Kalina GH. Mollika</Link></h4>
										<span>Manager</span>
										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
										<ul className="list-inline team-social">
											<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
										</ul>
									</div>
								</div>
								<Link to={"#"} className="close-team">&times;</Link>
							</div>
							<div className="team-section" data-info="TeamMember_4">
								<div className="team-box">
									<div className="team-media">
										<img src="assets/images/team/pic4.gif" alt=""/>
									</div>
									<div className="team-info">
										<h4 className="team-title"><Link to={"#"}>Falikaz DJ. Pauls</Link></h4>
										<span>Web Designer</span>
										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
										<ul className="list-inline team-social">
											<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
										</ul>
									</div>
								</div>
								<Link to={"#"} className="close-team">&times;</Link>
							</div>
							<div className="team-section" data-info="TeamMember_5">
								<div className="team-box">
									<div className="team-media">
										<img src="assets/images/team/pic5.gif" alt=""/>
									</div>
									<div className="team-info">
										<h4 className="team-title"><Link to={"#"}>Kalina GH. Mollika</Link></h4>
										<span>Manager</span>
										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
										<ul className="list-inline team-social">
											<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
										</ul>
									</div>
								</div>
								<Link to={"#"} className="close-team">&times;</Link>
							</div>
							<div className="team-section" data-info="TeamMember_6">
								<div className="team-box">
									<div className="team-media">
										<img src="assets/images/team/pic6.gif" alt=""/>
									</div>
									<div className="team-info">
										<h4 className="team-title"><Link to={"#"}>Falikaz DJ. Pauls</Link></h4>
										<span>Web Designer</span>
										<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
										<ul className="list-inline team-social">
											<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-google-plus"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
											<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
										</ul>
									</div>
								</div>
								<Link to={"#"} className="close-team">&times;</Link>
							</div>
						</div>
						<div className="text-center">
							<Link to={"team"} className="btn button-md radius-xl">Apply Now</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Team1;