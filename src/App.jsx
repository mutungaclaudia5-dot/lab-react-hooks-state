import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

function App() {

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state
  const [cart, setCart] = useState([])

  // Add products to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  // Category filtering state
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>

      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Use the filter to view products by category,
        add items to your cart, and toggle between light and dark mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Category Filter */}
      <label>Filter by Category: </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product List */}
      <h2>Products</h2>

      <ProductList
        addToCart={addToCart}
        selectedCategory={selectedCategory}
      />

      {/* Shopping Cart */}
      <Cart cart={cart} />

    </div>
  )
}

export default App
