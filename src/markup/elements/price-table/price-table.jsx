import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PriceTable extends Component{
	
	render(){
		return(
			<>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.3s">
						<div className="pricebox inner-box red m-b30">
							<h3 className="title">Basic Plan</h3>
							<div className="price"><sub>$</sub>49.99<sub>/mo</sub></div>
							<ul className="price-list">
								<li>Increase traffic 130%</li>
								<li>Backlink analysis</li>
								<li>Organic traffic 215%</li>
								<li>10 Free Optimization</li>
								<li>24/7 support</li>
							</ul>
							<Link to={"#"} className="btn-link">Get a free trial</Link>
							<i className="flaticon flaticon-presentation"></i>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.6s">
						<div className="pricebox inner-box blue m-b30">
							<h3 className="title">Starter Plan</h3>
							<div className="price"><sub>$</sub>59.99<sub>/mo</sub></div>
							<ul className="price-list">
								<li>Increase traffic 130%</li>
								<li>Backlink analysis</li>
								<li>Organic traffic 215%</li>
								<li>10 Free Optimization</li>
								<li>24/7 support</li>
							</ul>
							<Link to={"#"} className="btn-link">Get a free trial</Link>
							<i className="flaticon flaticon-target"></i>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="0.9s">
						<div className="pricebox inner-box orange">
							<h3 className="title">Extended Plan</h3>
							<div className="price"><sub>$</sub>69.99<sub>/mo</sub></div>
							<ul className="price-list">
								<li>Increase traffic 130%</li>
								<li>Backlink analysis</li>
								<li>Organic traffic 215%</li>
								<li>10 Free Optimization</li>
								<li>24/7 support</li>
							</ul>
							<Link to={"#"} className="btn-link">Get a free trial</Link>
							<i className="flaticon flaticon-rocket"></i>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default PriceTable;