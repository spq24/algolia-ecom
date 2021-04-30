import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper} from 'simple-react-lightbox';
import { useLightbox } from 'simple-react-lightbox'; 

//Images
import thumb1 from '../../images/our-work/thumb/pic1.jpg';
import thumb2 from '../../images/our-work/thumb/pic2.jpg';
import thumb3 from '../../images/our-work/thumb/pic3.jpg';
import thumb4 from '../../images/our-work/thumb/pic4.jpg';
import thumb5 from '../../images/our-work/thumb/pic5.jpg';
import thumb6 from '../../images/our-work/thumb/pic6.jpg';
import thumb_Large1 from '../../images/our-work/large/pic1.jpg';
import thumb_Large2 from '../../images/our-work/large/pic2.jpg';
import thumb_Large3 from '../../images/our-work/large/pic3.jpg';
import thumb_Large4 from '../../images/our-work/large/pic4.jpg';
import thumb_Large5 from '../../images/our-work/large/pic5.jpg';
import thumb_Large6 from '../../images/our-work/large/pic6.jpg';

//background image
import bnr2 from './../../images/background/bg1.jpg';

const imageBlog = [
	{ smollimg: thumb1, Large_img: thumb_Large1, tag: ['Designing','Hammer',] , },
	{ smollimg: thumb2, Large_img: thumb_Large2, tag: ['Painting','Hammer',] , }, 
	{ smollimg: thumb3, Large_img: thumb_Large3, tag: ['Hammer'] , }, 
	{ smollimg: thumb4, Large_img: thumb_Large4, tag: ['Builder','Electric' ], },
	{ smollimg: thumb5, Large_img: thumb_Large5, tag: ['Electric','Designing',], }, 
	{ smollimg: thumb6, Large_img: thumb_Large6, tag: ['Builder', 	] , }, 
]

// Masonry section
const masonryOptions = {                                          
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end


// Light Gallery on icon click
const Iconimage = props => {
	const { openLightbox } = useLightbox()

  return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="icon-bx-xs check-km" >
      <i className="fa fa-picture-o"></i>
    </Link>
  )
}

const options = {
	settings: {
		overlayColor: "#fff",
		backgroundColor: "#FDC716",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#FDC716",
		iconColor: "rgba(255, 255, 255, 1)",
	},
	caption: {
		captionColor: "#a6cfa5",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};


const TagLi = ({name, handlesettag, tagActive}) => {                                                               
	return ( 
			
		<li className={` tag ${tagActive ? 'btn active' : 'btn'}` } onClick={() => handlesettag(name)} >
			<input type="radio" />
			<Link to={"#"} className="site-button-secondry button-skew" >	<span>{name} {''}</span> </Link>
		</li> 
	);
};

class ProjectSection extends Component{
	render(){
		return(
			
				<div className="section-full bg-img-fix content-inner-2 overlay-black-middle" style={{backgroundImage:"url("+ bnr2 +")" }}>
					<div className="container">
						<div className="section-head  text-center text-white">
							<h2 className="text-uppercase">Our Projects</h2>
							<div className="dez-separator-outer ">
								<div className="dez-separator bg-white style-skew"></div>
							</div>
							<p>Because of best quality & service, victory has always been our goal, we only repRecent the best talent. We’ll do everything for you which can put you at ease with the correct guidance, simplicity & honesty.</p>
						</div>
						<PortfolioItem />
					</div>
				</div>		
			
		)
	}
} 

function PortfolioItem(){
	const [tag, setTag] = useState('Show All');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'Show All' ? setFilterdImages(imageBlog) : setFilterdImages(imageBlog.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
		<div>
			<div className="site-filters clearfix center m-b40">
				<ul className="filters" data-toggle="buttons">
					<TagLi name="Show All"  handlesettag={setTag} tagActive={ tag === 'Show All' ? true : false }	/>
					<TagLi name="Builder"  handlesettag={setTag} tagActive={ tag === 'Builder' ? true : false }	/>
					<TagLi name="Electric" handlesettag={setTag} tagActive={ tag === 'Electric' ? true : false }	 />
					<TagLi name="Painting"  handlesettag={setTag} tagActive={ tag === 'Painting' ? true : false }	/>
					<TagLi name="Hammer"  handlesettag={setTag} tagActive={ tag === 'Hammer' ? true : false }	/>
				</ul>
			</div>
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<div className="clearfix">
						<ul className=" dez-gallery-listing gallery-grid-4 gallery lightgallery">
							<Masonry
								className={'my-gallery-class'} // default ''
								options={masonryOptions} // default {}
								disableImagesLoaded={false} // default false
								updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
								imagesLoadedOptions={imagesLoadedOptions} // default {}
							>
								{filteredImages.map((item, index)=>(	
									<li className="home card-container col-lg-4 col-md-4 col-sm-6 " key={index}>
										<div className="dez-box dez-gallery-box">
											<div className="dez-media dez-img-overlay1 dez-img-effect zoom-slow">	
												<img src={item.Large_img}  alt="" /> 
												<div className="overlay-bx">
													<div className="overlay-icon"> 
														<Link to={"project-details"}> <i className="fa fa-link icon-bx-xs"></i> </Link>
														<Iconimage />	
													</div>
												</div>	
												
											</div>
										</div>
									</li>
								))}	
							</Masonry>	
						</ul>
					</div>	
				</SRLWrapper>
			</SimpleReactLightbox>	
		</div>
	);
}

export default ProjectSection;