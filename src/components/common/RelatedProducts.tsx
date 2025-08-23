import React from 'react'
import ProductCard from './ProductCard'

const RelatedProducts = () => {
  return (
    <div className='py-20'>
      <h2 className="font-bold text-4xl pb-6">Related Products</h2>
      <div className="grid grid-cols-4 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

    </div>
  )
}

export default RelatedProducts