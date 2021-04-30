import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';

// Images
import PortImg1 from './../../../images/portfolio/image_1.jpg';
import PortImg4 from './../../../images/portfolio/image_4.jpg';
import PortImg5 from './../../../images/portfolio/image_5.jpg';
import PortImg8 from './../../../images/portfolio/image_8.jpg';
import PortImg13 from './../../../images/portfolio/image_13.jpg';
import PortImg14 from './../../../images/portfolio/image_14.jpg';
import PortImg15 from './../../../images/portfolio/image_15.jpg';
import PortImg16 from './../../../images/portfolio/image_16.jpg';

// Portfolio Content
const content = [
	{ 
		thumb: PortImg1, 
		tag: ['design',],
		title: "Creative Design",
		exetitle: "Development",
		
	},
	{ 
		thumb: PortImg13, 
		tag: ['seo',],
		title: "Web Development",
		exetitle: "Designer",
	},
	{ 
		thumb: PortImg14, 
		tag: ['development',],
		title: "Marketing",
		exetitle: "Manager",
	},
	{ 
		thumb: PortImg4, 
		tag: ['design',],
		title: "Creative Design",
		exetitle: "CEO",
	},
	{ 
		thumb: PortImg5, 
		tag: ['development',],
		title: "Creative Design",
		exetitle: "Development",
	},
	{ 
		thumb: PortImg16, 
		tag: ['design',],
		title: "Web Development",
		exetitle: "Designer",
	},
	{ 
		thumb: PortImg15, 
		tag: ['seo',],
		title: "Marketing",
		exetitle: "Manager",
	},
	{ 
		thumb: PortImg8, 
		tag: ['development',],
		title: "Creative Design",
		exetitle: "CEO",
	},
]

const FilterList = ({dataFilter, defaultTag, activeFilter}) => {                                                               
	return (	
		<li className={`${activeFilter ? 'btn active' : 'btn'}` } onClick={() => defaultTag(dataFilter)} >
			<Link to={"#"}>{dataFilter}</Link>
		</li> 
	);
};

function PortfolioContent(){
	const [tag, setTag] = useState('Show All');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'Show All' ? setFilterdImages(content) : setFilterdImages(content.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
			
			<>
			
			<div className="feature-filters clearfix center m-b40">
				<ul className="filters" data-toggle="buttons">
					<FilterList 
						dataFilter="Show All" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Show All' ? true : false }	
					/>
					<FilterList 
						dataFilter="design" 
						defaultTag={setTag} 
						activeFilter={ tag === 'design' ? true : false }
					/>
					<FilterList 
						dataFilter="seo" 
						defaultTag={setTag} 
						activeFilter={ tag === 'seo' ? true : false }
					/>
					<FilterList 
						dataFilter="development"
						defaultTag={setTag} 
						activeFilter={ tag === 'development' ? true : false }	
					/>
				</ul>
			</div>
			
			<Masonry className="row sp40">
				{filteredImages.map((item, index)=>(	
					<div className="action-card col-lg-6 col-md-6 col-sm-12" key={index}>
						<div className="portfolio-box style-1">
							<div className="portfolio-media">
								<img src={item.thumb}  alt="" />	
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to={"/portfolio-single-2"}>{item.title}</Link></h4>
								<span className="exe-title">{item.exetitle}</span>	
							</div>
						</div>
					</div>
				))}	
			</Masonry>
			
		</>
		
	);
}

class PortMasonry extends Component{
	render(){
		return(
			<>
				<PortfolioContent />
			</>
		)
	}
}
export default PortMasonry;