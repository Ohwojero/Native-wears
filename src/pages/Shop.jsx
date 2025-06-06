import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offer from '../component/offer/Offer'
import NewCollections from '../component/newCollection/NewCollection'
import NewsLetter from '../component/newsletter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
     <NewCollections />
     <NewsLetter />
    </div>
  )
}

export default Shop