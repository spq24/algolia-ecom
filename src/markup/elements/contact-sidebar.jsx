import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import IconImg1 from "../../images/icon/contact/icon1.png"
import IconImg2 from "../../images/icon/contact/icon2.png"
import IconImg3 from "../../images/icon/contact/icon3.png"
import Logo from "../../images/logo.png"

class ContactSidebar extends Component{
	
	componentDidMount() {
		
		// Contact Sidebar
        var asideBtn = document.querySelector(".slideinfo")
        var contactSidebar = document.querySelector(".contact-sidebar")
        var closeBtn = document.getElementById("clase-btn")

        asideBtn.addEventListener('click',function(){
            contactSidebar.classList.add("open")
        })

        closeBtn.addEventListener('click',function(){
            contactSidebar.classList.remove("open")
        })        
    }
	
	render(){
		return(
			<>
				<div className="slideinfo">
					<ul className="slide-social">
						<li>Social Link</li>
						<li className="sc-link"><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
						<li className="sc-link"><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
						<li className="sc-link"><Link to={"#"}><i className="fa fa-linkedin"></i></Link></li>
					</ul>
					<Link to={"#"} className="slider-contact btn contact-sidebtn">Contact US</Link>
				</div>
				<div className="contact-sidebar content-scroll">
					<div className="inner">
						<div className="logo">
							<img src={Logo} alt=""/>
						</div>
						<h4 className="title">Contact Us For Any Informations</h4>
						<ul className="contact-infolist">
							<li>
								<img src={IconImg1} alt=""/>
								<h6 className="contact-title">Contact Number</h6>
								<p>+001 123 456 790 <br/>(02)  3424 44 00</p>
							</li>
							<li>
								<img src={IconImg2} alt=""/>
								<h6 className="contact-title">Email Address</h6>
								<Link to="#">info@yourdomain.com</Link><br/>
								<Link to="#">example@support.com</Link>
							</li>
							<li>
								<img src={IconImg3} alt=""/>
								<h6 className="contact-title">Address</h6>
								<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
							</li>
						</ul>
						<h4 className="title">Get In Touch</h4>
						<form className="contact-bx ajax-form">
							<div className="ajax-message"></div>
							<div className="row placeani">
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<label>Your Name</label>
											<input name="name" type="text" required className="form-control"/>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group"> 
											<label>Your Email Address</label>
											<input name="email" type="email" className="form-control" required />
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<label>Type Message</label>
											<textarea name="message" rows="4" className="form-control" required ></textarea>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<button name="submit" type="submit" valueDefault="Submit" className="btn button-md"> Send Message</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="contact-sidebtn close" id="clase-btn">
					<i className="ti-close"></i>
				</div>
			</>
		);
	}
}

export default ContactSidebar;