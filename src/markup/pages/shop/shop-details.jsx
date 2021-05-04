import React, { Component } from 'react';
import algoliasearch from 'algoliasearch';
import { Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';
import {OverlayTrigger, Tooltip, Nav, Tab} from 'react-bootstrap'

// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Elements
//import ProductSlider from "../../elements/shop/product-slider";

// Images
import Banner4 from "../../../images/banner/banner4.jpg"
import pattern1 from '../../../images/pattern/pt1.png';
// import ProductPic1 from "../../../images/product/pic2.jpg"
// import ProductPic2 from "../../../images/product/pic3.jpg"
// import ProductPic3 from "../../../images/product/pic4.jpg"
// import ProductPic4 from "../../../images/product/pic5.jpg"
// import TestiPic1 from "../../../images/testimonials/pic1.jpg"
// import TestiPic2 from "../../../images/testimonials/pic2.jpg"
// import TestiPic3 from "../../../images/testimonials/pic3.jpg"

class ShopDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      categories: [],
      shortDescription: '',
      image: '',
      manufacturer: '',
      salePrice: 0.00,
      shipping: '',
      type: '',
      url: ''
    };
  }


  componentDidMount() {
    const client = algoliasearch(process.env.REACT_APP_ALGOLIA_KEY, process.env.REACT_APP_ALGOLIA_SECRET);
    const index = client.initIndex('ecommerce_github');
    const id = window.location.pathname.split('/')[2]
    if(id) {
      index.getObject(id).then(object => {
        this.setState({
          name: object.name,
          categories: object.categories,
          shortDescription: object.shortDescription,
          image: object.image,
          manufacturer: object.manufacturer,
          salePrice: object.salePrice,
          shipping: object.shipping,
          type: object.type,
          url: object.url
        })
      });
    }
  }

  render(){
    const product = this.state;

    return (
      <>

        <Header />

        <div className="page-content bg-white">
          <div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+Banner4+")"}}>
            <div className="container">
              <div className="page-banner-entry">
                <h1 className="text-white">Shop Details</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                    <li>Shop Details</li>
                  </ul>
                </div>
                </div>
            </div>
            <ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
          </div>

          <div className="content-block" id="content-area">

            <div className="section-area section-sp1 bg-white" style={{backgroundImage: "url("+pattern1+")"}}>
              <div className="container">
                <div className="row product-info">
                  <div className="col-lg-6 col-md-6 col-sm-12 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="product-img">
                      <div className="product-gallery on-show-slider">
                        <Tab.Container id="product-gallery" defaultActiveKey="tabOne">
                          <Tab.Content>
                            <Tab.Pane eventKey="tabOne">
                              <img className="demo" src={product.image} alt=""/>
                            </Tab.Pane>
                          </Tab.Content>
                          <Nav className="item-list">
                            <Nav.Item>
                              <Nav.Link eventKey="tabOne">
                                <div className="ttr-media">
                                  <img src={product.thumbnailImage} alt=""/>
                                </div>
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Tab.Container>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.8s">
                    <div className="product-full-info sticky-top">
                      <h4 className="product-title">{product.name}</h4>
                      <div className="price">
                        <span>${product.salePrice}</span>
                      </div>
                      <div className="ttr-divider bg-gray"></div>
                      <div className="product-quantity">
                        <h6 className="title">QUANTITY</h6>
                        <div className="quantity btn-quantity style-1">
                          <input id="quantity" className="form-control" type="number" name="quantity"/>
                        </div>
                      </div>
                      <div className="product-btn">
                        <OverlayTrigger overlay={<Tooltip id="addToCart">Add To Cart</Tooltip>}>
                          <Link to={"#"} className="btn button-md">
                            <i className="la la-shopping-cart"></i> Add To Cart
                          </Link>
                        </OverlayTrigger>
                        <OverlayTrigger overlay={<Tooltip id="addToCart">Add To Wishlist</Tooltip>}>
                          <Link to={"#"} className="btn button-md">
                            <i className="la la-heart-o"></i>
                          </Link>
                        </OverlayTrigger>
                      </div>
                      <div className="ttr-divider bg-gray"></div>
                      <div className="product-meta">
                        <div className="posted_in meta-item">
                          <h6 className="title">Categories:</h6>
                          {
                            product.categories.map(name => {
                              return <Link to="#">{name}</Link>
                            })
                          }

                        </div>
                        <div className="tagged_as meta-item">
                          <h6 className="title">Shipping:</h6>
                          <Link to="#">{product.shipping && product.shipping.toLowerCase().includes('free') ? product.shipping : `$${product.shipping}`}</Link>
                        </div>
                        <div className="tagged_as meta-item">
                          <h6 className="title">Details:</h6>
                          <a href={product.url} target="_blank" rel="noreferrer">bestbuy.com <i className="fa fa-external-link"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row wow fadeIn" data-wow-delay="0.4s">
                  <div className="col-md-12">
                    <div className="ttr-tabs product-description tabs-site-button">
                      <Tab.Container id="product-description" defaultActiveKey="tabDesc">
                        <Nav className="nav nav-tabs">
                          <Nav.Item><Nav.Link eventKey="tabDesc">Description</Nav.Link></Nav.Item>
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane eventKey="tabDesc">
                            <p className="m-b10">{product.shortDescription}</p>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
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

export default ShopDetails;