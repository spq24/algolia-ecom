import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';

// Images
import PortImg1 from './../../../images/portfolio/portfolio-1/image_1.jpg';
import PortImg2 from './../../../images/portfolio/portfolio-1/image_2.jpg';
import PortImg3 from './../../../images/portfolio/portfolio-1/image_3.jpg';
import PortImg4 from './../../../images/portfolio/portfolio-1/image_4.jpg';
import PortImg5 from './../../../images/portfolio/portfolio-1/image_5.jpg';
import PortImg6 from './../../../images/portfolio/portfolio-1/image_6.jpg';
import PortImg7 from './../../../images/portfolio/portfolio-1/image_7.jpg';
import PortImg8 from './../../../images/portfolio/portfolio-1/image_8.jpg';
import PortImg9 from './../../../images/portfolio/portfolio-1/image_9.jpg';
import PortImg10 from './../../../images/portfolio/portfolio-1/image_10.jpg';
import PortImg11 from './../../../images/portfolio/portfolio-1/image_11.jpg';
import PortImg12 from './../../../images/portfolio/portfolio-1/image_12.jpg';

// Portfolio Content
const content = [
	{ 
		thumb: PortImg12, 
		tag: ['development',],
		title: "Creative Design",
		exetitle: "Development",
		
	},
	{ 
		thumb: PortImg11, 
		tag: ['design',],
		title: "Web Development",
		exetitle: "Designer",
	},
	{ 
		thumb: PortImg8, 
		tag: ['seo',],
		title: "Creative Design",
		exetitle: "Development",
	},
	{ 
		thumb: PortImg7, 
		tag: ['design',],
		title: "Web Development",
		exetitle: "Designer",
	},
	{ 
		thumb: PortImg6, 
		tag: ['development',],
		title: "Marketing",
		exetitle: "Manager",
	},
	{ 
		thumb: PortImg5, 
		tag: ['design',],
		title: "Creative Design",
		exetitle: "CEO",
	},
	{ 
		thumb: PortImg10, 
		tag: ['seo',],
		title: "Marketing",
		exetitle: "Manager",
	},
	{ 
		thumb: PortImg9, 
		tag: ['development',],
		title: "Creative Design",
		exetitle: "CEO",
	},
	{ 
		thumb: PortImg1, 
		tag: ['seo',],
		title: "Creative Design",
		exetitle: "Development",
	},
	{ 
		thumb: PortImg2, 
		tag: ['design',],
		title: "Web Development",
		exetitle: "Designer",
	},
	{ 
		thumb: PortImg3, 
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
			
			<Masonry className="row nosp">
				{filteredImages.map((item, index)=>(	
					<div className="action-card col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
						<div className="portfolio-box style-3 m-b0">
							<div className="portfolio-media">
								<img src={item.thumb}  alt="" />	
							</div>
							<div className="portfolio-info">
								<h4 className="title"><Link to={"portfolio-single-1"}>{item.title}</Link></h4>
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