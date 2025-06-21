import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import { IoIosArrowDropdown } from "react-icons/io";
import ItemDetails from '../component/item/ItemDetails'
import Carousel from '../component/carousel/Carousel';
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-categgory'>
          <Carousel />

        <div className='shopcategory-indexSort'>
            <p><span className='spandetails'>Showing 1-12</span> out of 30 Products</p>

            <div className='shopcategory-sort'>
            <IoIosArrowDropdown />
            </div>
        </div>
          <div className='shopcategory-products'>
              {
                all_product.map((item, index)=>{
                 if (props.category ===item.category){
                  return <ItemDetails key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                 } else{
                  return null;
                 }
                })
              }
          </div>
          <div className='shopcategory-loadmore'>
              Explore More
          </div>
    </div>
  )
}

export default ShopCategory