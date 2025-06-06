import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './Breadcrum.css'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <FaArrowRight /> SHOP <FaArrowRight />{product.category}<FaArrowRight />{product.name}
    </div>
  )
}

export default Breadcrum