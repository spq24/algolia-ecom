import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Elements
import BlogSidebar from '../../elements/blog/blog-sidebar';

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import blogDefaultPic1 from "../../../images/blog/grid/pic1.jpg"
import blogDefaultPic2 from "../../../images/blog/grid/pic2.jpg"
import blogDefaultPic3 from "../../../images/blog/grid/pic3.jpg"
import blogDefaultPic4 from "../../../images/blog/grid/pic4.jpg"
import blogDefaultPic5 from "../../../images/blog/grid/pic5.jpg"
import blogDefaultPic6 from "../../../images/blog/grid/pic6.jpg"

const content = [
	{
		thumb: blogDefaultPic1,
        title: "Ways To Tell You're Suffering From An Obession.",
		text: "Knowing that, you’ve optimised your pages countless amount of times, written tons.",
		postDate: "Dec 07 2020",
		authorName: "George",
		comment: "06",
    },
	{
		thumb: blogDefaultPic2,
        title: "Facts About Agency That Will Blow Your Mind.",
		text: "Knowing that, you’ve optimised your pages countless amount of times, written tons.",
		postDate: "Dec 05 2020",
		authorName: "Michel",
		comment: "04",
    },
	{
		thumb: blogDefaultPic3,
        title: "The 5 Steps Needed For Putting Agency Into Action.",
		text: "Knowing that, you’ve optimised your pages countless amount of times, written tons.",
		postDate: "March 14 2020",
		authorName: "Kalina",
		comment: "03",
    },
	{
		thumb: blogDefaultPic4,
        title: "Ten Reasons Why People Love Agency.",
		text: "Knowing that, you’ve optimised your pages countless amount of times, written tons.",
		postDate: "July 23 2020",
		authorName: "Falikaz",
		comment: "15",
    },
	{
		thumb: blogDefaultPic5,
        title: "The Ten Reasons Tourists Love Agency.",
		text: "Knowing that, you’ve optimised your pages countless amount of times, written tons.",
		postDate: "May 28 2020",
		authorName: "Michel",
		comment: "07",
    },
	{
		thumb: blogDefaultPic6,
        title: "The Cheapest Way To Earn Your Free Ticket To.",
		text: "Knowing that, you’ve optimised your pages countless amount of times, written tons.",
		postDate: "August 14 2020",
		authorName: "Sonar",
		comment: "02",
    },
]

class BlogList extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Blog List</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Blog List</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-md-12 col-lg-8 col-xl-8 m-md-b50">
										{content.map((item, id) => (
											<div className="blog-post blog-md clearfix">
												<div className="ttr-post-media">
													<Link to={"blog-details-sidebar"}><img src={item.thumb} alt=""/></Link>
												</div>
												<div className="ttr-post-info">
													<h5 className="post-title"><Link to={"/blog-details-sidebar"}>{item.title}</Link></h5>
													<ul className="media-post">
														<li className="date"><Link to={"#"}>{item.postDate}</Link></li>
													</ul>
													<p>{item.text}</p>
													<div className="post-extra">
														<Link to={"/blog-details-sidebar"} className="btn black radius-xl">READ MORE</Link>
													</div>
												</div>
											</div>
										))}
										<div className="col-lg-12 text-center">
											<Link to={"#"} className="btn button-md radius-xl">Load More</Link>
										</div>
									</div>
									<div className="col-md-12 col-lg-4 col-xl-4 sticky-top">
										<BlogSidebar />
									</div>					
								</div>					
							</div>					
						</div>					
						
					</div>
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default BlogList;