import React, { Component } from 'react';
import Count from '../../elements/counter/counter-sensor';

class Counter1 extends Component{
	render(){
		return(
			<>
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
						<div className="counter-style-2">
							<div className="feature-lg text-primary m-b10">
								<span className="icon-cell"><i className="la la-user"></i></span> 
							</div>
							<div className="counter-bx">
								<Count counter={25}/>
							</div>
							<span className="counter-text">Clients</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
						<div className="counter-style-2">
							<div className="feature-lg text-primary m-b10">
								<span className="icon-cell"><i className="la la-trophy"></i></span> 
							</div>
							<div className="counter-bx">
								<Count counter={35}/>
							</div>
							<span className="counter-text">Awards</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
						<div className="counter-style-2">
							<div className="feature-lg text-primary m-b10">
								<span className="icon-cell"><i className="la la-industry"></i></span> 
							</div>
							<div className="counter-bx">
								<Count counter={180}/>
							</div>
							<span className="counter-text">Projects</span>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
						<div className="counter-style-2">
							<div className="feature-lg text-primary m-b10">
								<span className="icon-cell"><i className="la la-pencil-square-o"></i></span> 
							</div>
							<div className="counter-bx">
								<Count counter={120}/>
							</div>
							<span className="counter-text">Media Posts</span>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Counter1;