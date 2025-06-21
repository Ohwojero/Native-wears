import React, { useEffect, useState } from 'react'
import './newCollection.css'

import ItemDetails from '../item/ItemDetails'

// Configurable backend base URL
const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

const NewCollections = () => {
  const [collection, setCollection] = useState([])

  useEffect(()=>{
    fetch(`${BACKEND_BASE_URL}/newCollection`)
    .then((response)=>response.json())
    .then((data)=>setCollection(data));
  },[])
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTION</h1>
        <hr />

        <div className='corrections'>
          {
            collection.map((item, index)=>{
              return <ItemDetails key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
            })
          }
        </div>
    </div>
  )
}

export default NewCollections
