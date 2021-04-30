import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';

// Home Pages
import Index from './pages/home/index';
import Index2 from './pages/home/index-2';
import Index3 from './pages/home/index-3';

// About Pages
import AboutUs1 from './pages/about/about-1';
import AboutUs2 from './pages/about/about-2';
import AboutUs3 from './pages/about/about-3';

// Services Pages
import Services1 from './pages/services/services-1';
import Services2 from './pages/services/services-2';
import Services3 from './pages/services/services-3';
import ServicesDetails from './pages/services/services-details';

// Company History Pages
import CompanyHistory1 from './pages/company-history/company-history-1';
import CompanyHistory2 from './pages/company-history/company-history-2';

// My Account Pages
import MyAccount from './pages/my-account/my-account';

// Event Pages
import Event from './pages/event/event';

// Team Pages
import Team from './pages/team/team';

// Faq Pages
import Faq from './pages/faq/faq-1';

// Contact Pages
import Contact1 from './pages/contact/contact-1';

// Error Pages
import Error404 from './pages/error/error-404';

// Shop Pages
import Shop from './pages/shop/shop';
import ShopCart from './pages/shop/shop-cart';
import ShopCheckout from './pages/shop/shop-checkout';
import ShopDetails from './pages/shop/shop-details';
import ShopSidebar from './pages/shop/shop-sidebar';

// Portfolio Pages
import PortfolioGrid2 from './pages/portfolio/portfolio-grid-2';
import PortfolioGrid3 from './pages/portfolio/portfolio-grid-3';
import PortfolioGrid4 from './pages/portfolio/portfolio-grid-4';
import PortfolioGridWide from './pages/portfolio/portfolio-grid-wide';
import PortfolioMasonryGrid2 from './pages/portfolio/portfolio-masonry-grid-2';
import PortfolioMasonryGrid3 from './pages/portfolio/portfolio-masonry-grid-3';
import PortfolioMasonryGrid4 from './pages/portfolio/portfolio-masonry-grid-4';
import PortfolioMasonryGridWide from './pages/portfolio/portfolio-masonry-grid-wide';
import PortfolioCarousel1 from './pages/portfolio/portfolio-carousel-1';
import PortfolioCarousel2 from './pages/portfolio/portfolio-carousel-2';
import PortfolioCarousel3 from './pages/portfolio/portfolio-carousel-3';
import PortfolioCarousel4 from './pages/portfolio/portfolio-carousel-4';
import PortfolioSingle1 from './pages/portfolio/portfolio-single-1';
import PortfolioSingle2 from './pages/portfolio/portfolio-single-2';
import PortfolioSingle3 from './pages/portfolio/portfolio-single-3';
import PortfolioSingle4 from './pages/portfolio/portfolio-single-4';

// Blog Pages
import BlogStandard from './pages/blog/blog-standard';
import BlogClassic from './pages/blog/blog-classic';
import BlogClassicSidebar from './pages/blog/blog-classic-sidebar';
import BlogList from './pages/blog/blog-list';
import BlogMasonry from './pages/blog/blog-masonry';
import BlogDetailsSidebar from './pages/blog/blog-details-sidebar';

class Markup extends Component{
	render(){
		return(
			<>
				<BrowserRouter>
					<Switch>

						{/* Home Pages */}
						<Route path='/' exact component={Shop} />
						<Route path='/index-2' exact component={Index2} />
						<Route path='/index-3' exact component={Index3} />

						{/* About Pages */}
						<Route path='/about-1' exact component={AboutUs1} />
						<Route path='/about-2' exact component={AboutUs2} />
						<Route path='/about-3' exact component={AboutUs3} />

						{/* Services Pages */}
						<Route path='/services-1' exact component={Services1} />
						<Route path='/services-2' exact component={Services2} />
						<Route path='/services-3' exact component={Services3} />
						<Route path='/services-details' exact component={ServicesDetails} />

						{/* Company History Pages */}
						<Route path='/company-history-1' exact component={CompanyHistory1} />
						<Route path='/company-history-2' exact component={CompanyHistory2} />

						{/* My Account Pages */}
						<Route path='/my-account' exact component={MyAccount} />

						{/* Event Pages */}
						<Route path='/event' exact component={Event} />

						{/* Team Pages */}
						<Route path='/team' exact component={Team} />

						{/* Faq Pages */}
						<Route path='/faq-1' exact component={Faq} />

						{/* Contact Pages */}
						<Route path='/contact-1' exact component={Contact1} />

						{/* Error Pages */}
						<Route path='/error-404' exact component={Error404} />

						{/* Shop Pages */}
						<Route path='/shop' component={Shop} />
						<Route path='/shop-cart' component={ShopCart} />
						<Route path='/shop-checkout' component={ShopCheckout} />
						<Route path='/shop-details' component={ShopDetails} />
						<Route path='/shop-sidebar' component={ShopSidebar} />

						{/* Portfolio Pages */}
						<Route path='/portfolio-grid-2' component={PortfolioGrid2} />
						<Route path='/portfolio-grid-3' component={PortfolioGrid3} />
						<Route path='/portfolio-grid-4' component={PortfolioGrid4} />
						<Route path='/portfolio-grid-wide' component={PortfolioGridWide} />
						<Route path='/portfolio-masonry-grid-2' component={PortfolioMasonryGrid2} />
						<Route path='/portfolio-masonry-grid-3' component={PortfolioMasonryGrid3} />
						<Route path='/portfolio-masonry-grid-4' component={PortfolioMasonryGrid4} />
						<Route path='/portfolio-masonry-grid-wide' component={PortfolioMasonryGridWide} />
						<Route path='/portfolio-masonry-grid-wide' component={PortfolioMasonryGridWide} />
						<Route path='/portfolio-carousel-1' component={PortfolioCarousel1} />
						<Route path='/portfolio-carousel-2' component={PortfolioCarousel2} />
						<Route path='/portfolio-carousel-3' component={PortfolioCarousel3} />
						<Route path='/portfolio-carousel-4' component={PortfolioCarousel4} />
						<Route path='/portfolio-single-1' component={PortfolioSingle1} />
						<Route path='/portfolio-single-2' component={PortfolioSingle2} />
						<Route path='/portfolio-single-3' component={PortfolioSingle3} />
						<Route path='/portfolio-single-4' component={PortfolioSingle4} />

						{/* Blog Pages */}
						<Route path='/blog-standard' component={BlogStandard} />
						<Route path='/blog-classic' component={BlogClassic} />
						<Route path='/blog-classic-sidebar' component={BlogClassicSidebar} />
						<Route path='/blog-list' component={BlogList} />
						<Route path='/blog-masonry' component={BlogMasonry} />
						<Route path='/blog-details-sidebar' component={BlogDetailsSidebar} />

					</Switch>
				</BrowserRouter>

				<BackToTop />

			</>
		);
	}
}

export default Markup;