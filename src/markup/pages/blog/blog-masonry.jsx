import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';
import Masonry from 'react-masonry-component';

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import blogDefaultPic1 from "../../../images/blog/masonry/pic1.jpg"
import blogDefaultPic2 from "../../../images/blog/masonry/pic2.jpg"
import blogDefaultPic3 from "../../../images/blog/masonry/pic3.jpg"
import blogDefaultPic4 from "../../../images/blog/masonry/pic4.jpg"
import blogDefaultPic5 from "../../../images/blog/masonry/pic5.jpg"
import blogDefaultPic6 from "../../../images/blog/masonry/pic6.jpg"
import authorPic1 from "../../../images/testimonials/pic1.jpg"
import authorPic2 from "../../../images/testimonials/pic2.jpg"
import authorPic3 from "../../../images/testimonials/pic3.jpg"
import authorPic4 from "../../../images/testimonials/pic4.jpg"
import authorPic5 from "../../../images/testimonials/pic5.jpg"
import authorPic6 from "../../../images/testimonials/pic6.jpg"

// Portfolio Content
const content = [
	{
		thumb: blogDefaultPic1,
		authorImg: authorPic1,
        title: "Ways To Tell You're Suffering From An Obession.",
		text: "You will see in the guide all my years of valuable experience together with.",
		postDate: "April 14 2020",
		authorName: "George",
		comment: "07",
    },
	{
		thumb: blogDefaultPic2,
		authorImg: authorPic2,
        title: "Facts About Agency That Will Blow Your Mind.",
		text: "You will see in the guide all my years of valuable experience together with.",
		postDate: "April 14 2020",
		authorName: "Michel",
		comment: "05",
    },
	{
		thumb: blogDefaultPic3,
		authorImg: authorPic3,
        title: "The 5 Steps Needed For Putting Agency Into Action.",
		text: "You will see in the guide all my years of valuable experience together with.",
		postDate: "April 14 2020",
		authorName: "Kalina",
		comment: "18",
    },
	{
		thumb: blogDefaultPic4,
		authorImg: authorPic4,
        title: "Ten Reasons Why People Love Agency.",
		text: "You will see in the guide all my years of valuable experience together with.",
		postDate: "April 14 2020",
		authorName: "Falikaz",
		comment: "12",
    },
	{
		thumb: blogDefaultPic5,
		authorImg: authorPic5,
        title: "The Ten Reasons Tourists Love Agency.",
		text: "You will see in the guide all my years of valuable experience together with.",
		postDate: "April 14 2020",
		authorName: "Kalina",
		comment: "18",
    },
	{
		thumb: blogDefaultPic6,
		authorImg: authorPic6,
        title: "The Cheapest Way To Earn Your Free Ticket To.",
		text: "You will see in the guide all my years of valuable experience together with.",
		postDate: "April 14 2020",
		authorName: "Falikaz",
		comment: "12",
    },
]

class BlogMasonry extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Blog Masonry</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Blog Masonry</li>
									</ul>
								</div>
							 </div>
						</div>
						<ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
							<div className="container">
								<Masonry className="row">
									{content.map((item, id) => (
										<div className="action-card col-lg-4 col-md-6 col-sm-12">
											<div className="recent-news style-2">
												<div className="action-box">
													<img src={item.thumb} alt=""/>
												</div>
												<div className="info-bx">
													<ul className="media-post">
														<li className="date"><Link to={"/blog-details-sidebar"}>{item.postDate}</Link></li>
														<li className="admin"><Link to={"/blog-details-sidebar"}><img src={item.authorImg} alt=""/>By {item.authorName}</Link></li>
														<li className="comment"><Link to={"/blog-details-sidebar"}><i className="ti ti-comment-alt"></i><span>{item.comment}</span></Link></li>
													</ul>
													<h5 className="post-title"><Link to={"/blog-details-sidebar"}>{item.title}</Link></h5>
													<p>{item.text}</p>
													<div className="post-extra">
														<Link to={"/blog-details-sidebar"} className="btn black radius-xl">READ MORE</Link>
													</div>
												</div>
											</div>
										</div>
									))}
									<div className="col-lg-12 text-center">
										<Link to={"#"} className="btn button-md radius-xl">Load More</Link>
									</div>
								</Masonry>
							</div>					
						</div>					
						
					</div>
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default BlogMasonry;