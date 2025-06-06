import React from 'react'
import './newCollection.css'
import new_collection from './data_collection'
import ItemDetails from '../item/ItemDetails'
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTION</h1>
        <hr />

        <div className='corrections'>
          {
            new_collection.map((item, index)=>{
              return <ItemDetails key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
            })
          }
        </div>
    </div>
  )
}

export default NewCollections