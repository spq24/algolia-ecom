import React, { Component } from 'react';

// Images
import bgPic2 from '../../../images/background/bg2.png';

class Subscribe extends Component{
	
	render(){
		return(
			<>
				<div className="section-area section-sp2 bg-dark-gray" style={{backgroundImage: "url("+bgPic2+")", backgroundSize:"cover",}}>
					<div className="container">
						<div className="row">
							<div className="col-md-12 heading-bx style2 text-center text-white">
								<h2 className="title-head">Subscribe to recieve weekly <br/>news via email.</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
							</div>
						</div>
						<div className="subscribe-action">
							<form className="subscription-form">
								<div className="ajax-message"></div>
								<div className="input-group">
									<input name="email" required="required"  className="form-control" placeholder="Your Email Address" type="email"/>
									<span className="input-group-btn">
										<button name="submit" valueDefault="Submit" type="submit" className="btn radius-xl">Subscribe</button>
									</span> 
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Subscribe;