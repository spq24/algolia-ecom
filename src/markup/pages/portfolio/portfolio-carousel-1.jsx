import React, { Component } from 'react';

// Layout
import Header from '../../layout/header/header4';

// Elements
import PortSlider from '../../elements/portfolio/portfolio-slider-1';

class PortCarousel1 extends Component {
	
	render(){
		return (
			<>
				<Header />
				
				<PortSlider />
				
			</>
		);
	}
}

export default PortCarousel1;