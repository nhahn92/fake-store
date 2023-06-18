import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../components/Header/ProductCard/ProductCard'

// Goal: Show product cards when the page loads
function Homepage() {
  // Creates state to hold the products
  const[products, setProducts] = useState([])

  // Retrieves data from API
  // https://fakestoreapi.com/products
  useEffect(
    () => {
      axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        console.log(res.data)
        // Stores data in state
        setProducts(res.data)
      })
      .catch(err => console.log(err))
    }, [] // Runs only once when page loads; causes infinite loop without it
  )

  // Filters out unique categories
  const uniqueCategories = products.reduce(function (acc, curr) {
    if (acc.indexOf(curr.category) === -1) {
      acc.push(curr.category);
    }
    return acc;
  }, []);

  return (
    <div className="homepage-container">
        <div className="category-filter-container">
          <p className="category-filter-button">all</p>
            {
              // Creates p tags for each product category
              uniqueCategories.map(item => <p className="category-filter-button" key={item[0]}>{item}</p>)
            }
        </div>
        <div className="products-container">
            {
              // Creates a div for each product
              products.map(item => <ProductCard
                key={item.id}
                product={item} />)
            }
        </div>
    </div>
  )
}

export default Homepage