import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../../images/logo.png';
import logoWhite from '../../../images/logo-white.png';
import adv from '../../../images/adv/adv.jpg';

class Header extends Component{
	
	componentDidMount() {
		
		// Search Form Popup
		var searchBtn = document.getElementById("quik-search-btn")
        var searchForm = document.querySelector(".nav-search-bar")
        var closeBtn = document.getElementById("search-remove")
		
        searchBtn.addEventListener('click',function(){
            searchForm.classList.add("show")
        })

        closeBtn.addEventListener('click',function(){
            searchForm.classList.remove("show")
        })

        // Mobile Menu sidebar function
        var btn = document.querySelector('.menuicon');
        var nav = document.querySelector('.menu-links');
       
        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);

        // Mobile Submenu open close function
        var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
        for (var y = 0; y < navMenu.length; y++) {
            navMenu[y].addEventListener('click', function () { menuClick(this) });
        }

        function menuClick(current) {
            const active = current.classList.contains("open")
            navMenu.forEach(el => el.classList.remove('open'));
            
            if(active){
                current.classList.remove('open') 
                console.log("active")
            } else{
                current.classList.add('open');
                console.log("close")
            }
        }
		
    }
	
	render(){
		return(
			<>
				{/* <!-- Header Top ==== --> */}
				<header className="header rs-nav header-transparent">
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container-fluid clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo">
									<Link to={"/"}><img src={logoWhite} alt=""/></Link>
								</div>
								{/* <!-- Mobile Nav Button ==== --> */}
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/* <!-- Author Nav ==== --> */}
								<div className="secondary-menu">
									<div className="secondary-inner">
										<ul>
											<li className="search-btn"><button id="quik-search-btn" type="button" className="btn-link"><i className="fa fa-search"></i></button></li>
										</ul>
									</div>
								</div>
								{/* <!-- Navigation Menu ==== --> */}
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to={"/"}><img src={logo} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li className="active"><Link to={"#"}>Home<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to={"/"}><span>Home Classic</span> </Link></li>
												<li><Link to={"index-2"}><span>Home Modern</span></Link></li>
												<li><Link to={"index-3"}><span>Home Simple</span></Link></li>
											</ul>
										</li>
										<li className="has-mega-menu "><Link to="#">Pages<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li><Link to="#">Pages</Link>
													<ul>
														<li><Link to={"about-1"}><span>About Us Simple</span></Link></li>
														<li><Link to={"about-2"}><span>About Us Classic</span></Link></li>
														<li><Link to={"about-3"}><span>About Us Modern</span></Link></li>
														<li><Link to={"event"}><span>Event</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Pages</Link>
													<ul>
														<li><Link to={"services-1"}><span>Services Simple</span></Link></li>
														<li><Link to={"services-2"}><span>Services Classic</span></Link></li>
														<li><Link to={"services-3"}><span>Services Modern</span></Link></li>
														<li><Link to={"services-details"}><span>Services Details</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Pages</Link>
													<ul>
														<li><Link to={"company-history-1"}><span>Company History 1</span></Link></li>
														<li><Link to={"company-history-2"}><span>Company History 2</span></Link></li>
														<li><Link to="faq-1"><span>FAQ's</span></Link></li>
														<li><Link to={"team"}><span>Team</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Pages</Link>
													<ul>
														<li><Link to={"my-account"}><span>My Account</span></Link></li>
														<li><Link to={"contact-1"}><span>Contact Us</span></Link></li>
														<li><Link to={"error-404"}><span>404 Page</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="add-mega-menu"><Link to={"#"}>Shop<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu add-menu">
												<li className="add-menu-left">
													<h5 className="menu-adv-title">Our Product</h5>
													<ul>
														<li><Link to={"shop"}><span>Shop</span> </Link></li>
														<li><Link to={"shop-sidebar"}><span>Shop Sidebar</span></Link></li>
														<li><Link to={"shop-cart"}><span>Cart</span></Link></li>
														<li><Link to={"shop-checkout"}><span>Checkout</span></Link></li>
														<li><Link to={"shop-details"}><span>Product Details</span></Link></li>
													</ul>
												</li>
												<li className="add-menu-right">
													<img src={adv} alt=""/>
												</li>
											</ul>
										</li>
										<li className="has-mega-menu "><Link to={"#"}>Portfolio <i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li><Link to={"#"}>Portfolio Grid</Link>
													<ul>
														<li><Link to={"portfolio-grid-2"}><span>Portfolio Grid 2</span></Link></li>
														<li><Link to={"portfolio-grid-3"}><span>Portfolio Grid 3</span></Link></li>
														<li><Link to={"portfolio-grid-4"}><span>Portfolio Grid 4</span></Link></li>
														<li><Link to={"portfolio-grid-wide"}><span>Portfolio Grid Wide</span></Link></li>
													</ul>
												</li>
												<li><Link to={"#"}>Portfolio Masonry</Link>
													<ul>
														<li><Link to={"portfolio-masonry-grid-2"}><span>Masonry Grid 2</span></Link></li>
														<li><Link to={"portfolio-masonry-grid-3"}><span>Masonry Grid 3</span></Link></li>
														<li><Link to={"portfolio-masonry-grid-4"}><span>Masonry Grid 4</span></Link></li>
														<li><Link to={"portfolio-masonry-grid-wide"}><span>Masonry Grid Wide</span></Link></li>
													</ul>
												</li>
												<li><Link to={"#"}>Portfolio Style</Link>
													<ul>
														<li><Link to={"portfolio-carousel-1"}><span>Portfolio Carousel 1</span></Link></li>
														<li><Link to={"portfolio-carousel-2"}><span>Portfolio Carousel 2</span></Link></li>
														<li><Link to={"portfolio-carousel-3"}><span>Portfolio Carousel 3</span></Link></li>
														<li><Link to={"portfolio-carousel-4"}><span>Portfolio Carousel 4</span></Link></li>
													</ul>
												</li>
												<li><Link to={"#"}>Portfolio Single</Link>
													<ul>
														<li><Link to={"portfolio-single-1"}><span>Portfolio Single 1</span></Link></li>
														<li><Link to={"portfolio-single-2"}><span>Portfolio Single 2</span></Link></li>
														<li><Link to={"portfolio-single-3"}><span>Portfolio Single 3</span></Link></li>
														<li><Link to={"portfolio-single-4"}><span>Portfolio Single 4</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to={"#"}>Blog <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu left">
												<li><Link to={"blog-standard"}><span>Blog Standard</span></Link></li>
												<li><Link to={"blog-classic"}><span>Blog Classic</span></Link></li>
												<li><Link to={"blog-classic-sidebar"}><span>Blog Classic Sidebar</span></Link></li>
												<li><Link to={"blog-list"}><span>Blog List Sidebar</span></Link></li>
												<li><Link to={"blog-masonry"}><span>Masonry</span></Link></li>
												<li><Link to={"blog-details-sidebar"}><span>Blog Details</span></Link></li>
											</ul>
										</li>
									</ul>
									<div className="nav-social-link">
										<Link to={"#"}><i className="fa fa-facebook"></i></Link>
										<Link to={"#"}><i className="fa fa-google-plus"></i></Link>
										<Link to={"#"}><i className="fa fa-linkedin"></i></Link>
									</div>
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</Sticky>
					{/* <!-- Search Box ==== --> */}
					<div className="nav-search-bar">
						<form action="#">
							<input name="search" defaultValue="" type="text" className="form-control" placeholder="Type to search"/>
							<span><i className="ti-search"></i></span>
						</form>
						<span id="search-remove"><i className="ti-close"></i></span>
					</div>
				</header>
				{/* <!-- Header Top END ==== --> */}
			</>
		);
	}
}

export default Header;
