import React from 'react'
import data_Products from './data_product'
import './popular.css'
import ItemDetails from '../item/ItemDetails'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN MEN</h1>
        <hr />
        
        <div className='popular-item'>
            {
                data_Products.map((item, index)=>{
                    return <ItemDetails key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })
            }
            
            
        </div>
    </div>
  )
}

export default Popular