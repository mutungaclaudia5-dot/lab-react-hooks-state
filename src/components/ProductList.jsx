
import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  {
    id: 1,
    name: 'Apple',
    category: 'Fruits',
    price: 1,
    inStock: true
  },
  {
    id: 2,
    name: 'Milk',
    category: 'Dairy',
    price: 2.5,
    inStock: false
  }
]

function ProductList({ addToCart, selectedCategory }) {

  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === selectedCategory
        )

  return (
    <div className="product-list">

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}

    </div>
  )
}

export default ProductList
