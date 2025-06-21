import React, { useEffect, useState } from 'react'

import './popular.css'
import ItemDetails from '../item/ItemDetails'

// Configurable backend base URL
const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

const Popular = () => {

  const [populars,setPopulars] = useState([]);
  useEffect(()=>{
    fetch(`${BACKEND_BASE_URL}/popular`)
    .then((response)=>response.json())
    .then((data)=>setPopulars(data))
  },[])

  return (
    <div className='popular'>
        <h1>POPULAR IN Women</h1>
        <hr />
        
        <div className='popular-item'>
            {
                populars.map((item, index)=>{
                    return <ItemDetails key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
                })
            }
            
            
        </div>
    </div>
  )
}

export default Popular
