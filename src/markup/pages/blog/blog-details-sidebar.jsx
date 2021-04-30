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
import DefaultPic1 from '../../../images/blog/default/pic1.jpg';
import GalleryPic2 from '../../../images/gallery/pic2.jpg';
import GalleryPic5 from '../../../images/gallery/pic5.jpg';
import TestPic1 from '../../../images/testimonials/pic1.jpg';
import TestPic2 from '../../../images/testimonials/pic2.jpg';
import TestPic3 from '../../../images/testimonials/pic3.jpg';

class BlogDetailsSidebar extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					<div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Blog Details</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
										<li>Blog Details</li>
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
										<div className="blog-lg blog-single">
											<div className="action-box blog-lg">
												<img src={DefaultPic1} alt=""/>
											</div>
											<div className="info-bx">
												<div className="media-box">
													<ul className="media-post">
														<li><Link to={"#"}><i className="fa fa-calendar"></i>May 14 2020</Link></li>
														<li><Link to={"#"}><i className="fa fa-comments-o"></i>10 Comment</Link></li>
													</ul>
												</div>
												<div className="ttr-post-title">
													<h4 className="post-title">Why every startup should adopt Amazon’s Hot Air. Why every startup should adopt.</h4>
												</div>
												<div className="ttr-post-text">
													<p>It is used every day in all types of businesses; Email newsletters, websites, print and online advertisements, presentations, social media updates, flyers, and brochures; the list goes on and on</p>
													<blockquote className="wp-block-quote">
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris eget velit blandit pulvinar. </p>
													</blockquote>
													<p>David Ogilvy, the advertising legend once said that, On average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar." As Ogilvy points out, your headline is the first (and sometimes the only) thing that your audience will read.</p>
													<ul className="wp-block-gallery columns-6 is-cropped">
														<li className="blocks-gallery-item"><img alt="" src={GalleryPic2}/></li>
														<li className="blocks-gallery-item"><img alt="" src={GalleryPic5}/></li>
													</ul>
													<ul>
														<li>Praesent nunc libero, hendrerit quis nisl tempor, pharetra bibendum nisl. </li>
														<li>Duis tincidunt semper enim ac volutpat. Quisque porta nulla vel tristique convallis. </li>
														<li>Nulla lacus consequat velit, sed consectetur lacus ligula uttempus tortor orci.</li>
														<li>Donec tristique, velit sed dignissim vehicula, massa augue eu dictum libero risus.</li>
													</ul>
													<p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
													<p>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content that their readers crave, but even the best struggle with delivering content to the right person at the right time.</p>
												</div>
												<div className="ttr-divider bg-gray"><i className="icon-dot c-square"></i></div>
												<div className="ttr-post-meta d-flex">
													<div className="post-tags"> 
														<Link to={"#"}>Creative</Link> 
														<Link to={"#"}>Media</Link> 
														<Link to={"#"}>Fashion</Link> 
														<Link to={"#"}>Photography</Link> 
													</div>
													<div className="share-post ml-auto">
														<ul className="social">
															<li>Share:</li>
															<li><Link to={"#"}><i className="fa fa-facebook"></i></Link></li>
															<li><Link to={"#"}><i className="fa fa-twitter"></i></Link></li>
															<li><Link to={"#"}><i className="fa fa-pinterest"></i></Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										
										<div className="author-box blog-user m-b60">
											<div className="author-profile-info">
												<div className="author-profile-pic">
													<img src={TestPic2} alt=""/>
												</div>
												<div className="author-profile-content">
													<h6>Sonar Z. Moyna</h6>
													<p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
													<ul className="list-inline m-b0">
														<li><Link to={"#"} className="btn-link"><i className="fa fa-facebook"></i></Link></li>
														<li><Link to={"#"} className="btn-link"><i className="fa fa-google-plus"></i></Link></li>
														<li><Link to={"#"} className="btn-link"><i className="fa fa-instagram"></i></Link></li>
														<li><Link to={"#"} className="btn-link"><i className="fa fa-twitter"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
										
										<div className="clear" id="comment-list">
											<div className="comments-area" id="comments">
												<h2 className="comments-title">8 Comments</h2>
												<div className="clearfix">
													<ol className="comment-list">
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> 
																	<img  className="avatar photo" src={TestPic1} alt=""/> 
																	<cite className="fn">George</cite> 
																	<span className="says">says:</span> 
																</div>
																<div className="comment-meta"> 
																	<Link to={"#"}>December 02, 2020 at 10:45 am</Link> 
																</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. </p>
																<div className="reply"> 
																	<Link to={"#"} className="comment-reply-link">Reply</Link> 
																</div>
															</div>
															<ol className="children">
																<li className="comment odd parent">
																	<div className="comment-body">
																		<div className="comment-author vcard"> 
																			<img  className="avatar photo" src={TestPic2} alt=""/> 
																			<cite className="fn">Falikaz</cite> 
																			<span className="says">says:</span> 
																		</div>
																		<div className="comment-meta"> 
																			<Link to={"#"}>December 02, 2020 at 10:45 am</Link> 
																		</div>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.</p>
																		<div className="reply"> 
																			<Link to={"#"} className="comment-reply-link">Reply</Link> 
																		</div>
																	</div>
																	<ol className="children">
																		<li className="comment odd parent">
																			<div className="comment-body">
																				<div className="comment-author vcard"> 
																					<img  className="avatar photo" src={TestPic3} alt=""/> 
																					<cite className="fn">Kalina</cite> 
																					<span className="says">says:</span> 
																				</div>
																				<div className="comment-meta"> 
																					<Link to={"#"}>December 02, 2020 at 10:45 am</Link> 
																				</div>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.</p>
																				<div className="reply"> 
																					<Link to={"#"} className="comment-reply-link">Reply</Link> 
																				</div>
																			</div>
																		</li>
																	</ol>
																</li>
															</ol>
														</li>
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> 
																	<img  className="avatar photo" src={TestPic1} alt=""/> 
																	<cite className="fn">Sonar</cite> 
																	<span className="says">says:</span> 
																</div>
																<div className="comment-meta"> 
																	<Link to={"#"}>December 02, 2020 at 10:45 am</Link> 
																</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.</p>
																<div className="reply"> 
																	<Link to={"#"} className="comment-reply-link">Reply</Link> 
																</div>
															</div>
														</li>
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> 
																	<img className="avatar photo" src={TestPic2} alt=""/> 
																	<cite className="fn">Michel</cite> 
																	<span className="says">says:</span> 
																</div>
																<div className="comment-meta"> 
																	<Link to={"#"}>December 02, 2020 at 10:45 am</Link> 
																</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.</p>
																<div className="reply"> 
																	<Link to={"#"} className="comment-reply-link">Reply</Link> 
																</div>
															</div>
														</li>
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> 
																	<img className="avatar photo" src={TestPic3} alt=""/> 
																	<cite className="fn">Falikaz</cite> 
																	<span className="says">says:</span> 
																</div>
																<div className="comment-meta"> 
																	<Link to={"#"}>December 02, 2020 at 10:45 am</Link> 
																</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, ac elementum ligula blandit ac.</p>
																<div className="reply"> 
																	<Link to={"#"} className="comment-reply-link">Reply</Link> 
																</div>
															</div>
														</li>
													</ol>
													
													<div className="comment-respond" id="respond">
														<h4 className="comment-reply-title" id="reply-title">Leave a Reply </h4>
														<form className="comment-form" id="commentform">
															<p className="comment-form-author">
																<label for="author">Name <span className="required">*</span></label>
																<input type="text" valueDefault="" name="Author"  placeholder="Author" id="author"/>
															</p>
															<p className="comment-form-email">
																<label for="email">Email <span className="required">*</span></label>
																<input type="text" valueDefault="" placeholder="Email" name="email" id="email"/>
															</p>
															<p className="comment-form-url">
																<label for="url">Website</label>
																<input type="text"  valueDefault=""  placeholder="Website"  name="url" id="url"/>
															</p>
															<p className="comment-form-comment">
																<label for="comment">Comment</label>
																<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
															</p>
															<p className="form-submit">
																<input type="submit" valueDefault="Submit Comment" className="submit" id="submit" name="submit"/>
															</p>
														</form>
													</div>
												</div>
											</div>
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

export default BlogDetailsSidebar;