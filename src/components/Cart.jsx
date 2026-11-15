
import React from 'react'

function Cart({ cart }) {

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  )

  return (
    <div className="cart">

      <h2>Shopping Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={`${product.id}-${index}`}>
              {product.name} is in your cart - $
              {product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ${total.toFixed(2)}</h3>

    </div>
  )
}

export default Cart
