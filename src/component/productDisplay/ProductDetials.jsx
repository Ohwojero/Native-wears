import React, { useContext } from "react";
import "./productDetails.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { ShopContext } from "../../context/ShopContext";
const ProductDetials = (props) => {
    const {product} = props;
    const {addCart} = useContext(ShopContext)
  return (
    <div className="product-display">
      <div className="product-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img  className="product-main-img"src={product.image} alt="" />
            </div>
      </div>
      <div className="product-right">
            <h1>{product.name}</h1>

            <div className="star-wrapper">
           < FaStar  className="star"/>
           < FaStar className="star" />
           < FaStar  className="star"/>
           < FaStar  className="star"/>
            <FaStarHalfStroke  className="star" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
 
            </div>

            <div className="productdisplay-right-description">
            Native Nigerian wears are traditional outfits that reflect the rich cultural heritage, diversity, and artistry of Nigeria's many ethnic groups. These attires vary by region and tribe, often distinguished by their vibrant fabrics, bold patterns, and symbolic meanings.
            </div>

            <div className="productdisplay-right-size">
                <h1>Select Size</h1>

                <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>addCart(product.id)}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern Wears the fit you</p>
      </div>
    </div>
  );
};

export default ProductDetials;
