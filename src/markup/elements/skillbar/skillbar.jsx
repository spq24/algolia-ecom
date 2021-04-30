import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class skillbar extends Component{
	
	render(){
		return(
			<>
				<div className="section-area section-sp1 bg-white">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="heading-bx">
									<h2 className="title-head">Project Overview</h2>
									<p className="m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley..</p>
									<Link to={"/portfolio-single-1"} className="btn button-md radius-xl">View Projects</Link>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="skillbar-bar-main">
									<div className="skillbar-box">
										<h6 className="title">Jquery - 4 years Experience</h6>
										<div className="skillbar appear">
											<p className="skillbar-bar" style={{width:"95%"}}></p>
											<span className="skill-bar-percent">96%</span>
										</div>
									</div>
									<div className="skillbar-box">
										<h6 className="title">Wordpress - 6 years Experience</h6>
										<div className="skillbar appear">
											<p className="skillbar-bar" style={{width:"92%"}}></p>
											<span className="skill-bar-percent">92%</span>
										</div>
									</div>
									<div className="skillbar-box">
										<h6 className="title">HTML5 - 5 years Experience</h6>
										<div className="skillbar appear">
											<p className="skillbar-bar" style={{width:"79%"}}></p>
											<span className="skill-bar-percent">79%</span>
										</div>
									</div>
									<div className="skillbar-box">
										<h6 className="title">Photography - 6 years Experience</h6>
										<div className="skillbar appear">
											<p className="skillbar-bar" style={{width:"86%"}}></p>
											<span className="skill-bar-percent">86%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default skillbar;