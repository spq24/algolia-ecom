import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import {Link as ScrollTo} from 'react-scroll';
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination, Highlight } from 'react-instantsearch-dom';
import css from '../../../App.css'
// Layout
import Header from '../../layout/header/header1';
import Footer from '../../layout/footer/footer1';

// Images
import bannerPic1 from '../../../images/banner/banner1.jpg';
import pattern1 from '../../../images/pattern/pt1.png';
import ProductPic1 from "../../../images/product/pic1.jpg"
import ProductPic2 from "../../../images/product/pic2.jpg"
import ProductPic3 from "../../../images/product/pic3.jpg"
import ProductPic4 from "../../../images/product/pic4.jpg"
import ProductPic5 from "../../../images/product/pic5.jpg"
import ProductPic6 from "../../../images/product/pic6.jpg"
import ProductPic7 from "../../../images/product/pic7.jpg"
import ProductPic8 from "../../../images/product/pic8.jpg"
import ProductPic9 from "../../../images/product/pic9.jpg"

function Hit(props) {
  const { hit } = props;
  return (
    <div>
      <div className="item-box">
        <div className="item-media">
          <img src={hit.image ? hit.image : 'https://via.placeholder.com/250.png'} alt={hit.name} />
          <ul>
            <li>
              <OverlayTrigger overlay={<Tooltip id="addToCart">Add To Cart</Tooltip>}>
                <Link to={"#"}>
                  <i className="fa fa-shopping-bag"></i>
                </Link>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger overlay={<Tooltip id="addToWishlist">Add To Wishlist</Tooltip>}>
                <Link to={"#"}>
                  <i className="fa fa-heart"></i>
                </Link>
              </OverlayTrigger>
            </li>
          </ul>
        </div>
        <div className="item-info">
          <h6 className="title">
            <Link to="shop-details">
              <Highlight attribute="name" hit={props.hit} />
            </Link>
          </h6>
          <div className="price">
            <span>{hit.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

class Shop extends Component {
  render(){
    const searchClient = algoliasearch('CG5KK6RMZU', '7bd4c591fd4ba8cd9610646b8e3af30c');

    return (
      <>
        <Header />

        <div className="page-content bg-white">
          <div className="page-banner ovpr-dark overlay-dotted ovdt2 parallax" style={{backgroundImage: "url("+bannerPic1+")"}}>
            <div className="container">
              <div className="page-banner-entry">
                <h1 className="text-white">Shop</h1>
                <div className="breadcrumb-row">
                  <ul className="list-inline">
                    <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                    <li>Shop</li>
                  </ul>
                </div>
                </div>
            </div>
            <ScrollTo smooth={true} to="content-area" className="banner-bottom scroll-page"><i className="ti-arrow-down"></i></ScrollTo>
          </div>
          <InstantSearch searchClient={searchClient} indexName="ecommerce_github">
            <div className="content-block" id="content-area">
              <div className="section-area section-sp2 bg-gray" style={{ display: 'flex', justifyContent: 'center', backgroundImage: "url(" + pattern1 + ")" }}>
                <SearchBox />
              </div>
              <div className="section-area section-sp2 bg-gray" style={{backgroundImage: "url("+pattern1+")"}}>
                <div className="container">
                  <div className="row">
                    <Hits hitComponent={Hit} />
                  </div>
                  <div className="pagination-bx rounded-sm text-center clearfix m-b0 page-shadow">
                    <Pagination />
                  </div>
                </div>
              </div>

            </div>
          </InstantSearch>
        </div>

        <Footer />

      </>
    );
  }
}

export default Shop;