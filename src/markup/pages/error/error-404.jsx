import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Error extends Component {
	render(){
		return (
			<>
				<div className="account-form error-404">
					<div className="account-form-inner">
						<div className="account-container">
							<div className="error-page">
								<h2 className="error-title">4<span></span>4</h2>
								<h5>The Page you were looking for, couldn't be found.</h5>
								<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
								<div className="">
									<Link to={"/"} className="btn button-md radius-xl m-b15 m-r5">Back</Link>
									<Link to={"/"} className="btn button-md radius-xl m-b15 outline outline-2">Back To Home</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Error;