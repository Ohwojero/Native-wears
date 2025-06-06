import React from 'react'
import ItemDetails from '../item/ItemDetails'
import data_products from './data_products'
import './relatedProduct.css'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />

        <div className='relatedProducts-item'>
            {
                data_products.map((item, index)=>{
                    return <ItemDetails key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts