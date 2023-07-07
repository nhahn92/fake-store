import { useEffect, useState, useContext } from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ThemeContext } from '../../contexts/ThemeContext'

// Goal: Show product cards and unique product categories when the page loads
function Homepage() {
  // Dark Mode state
  // Change to use global state
  // Note: {} not []
  const {darkMode} = useContext(ThemeContext)

  // Creates state to hold the products
  const [products, setProducts] = useState([])

  // Creates state to hold unique product categories
  const [categories, setCategories] = useState([])

  useEffect(
    () => {
      // Retrieves all product data from API
      // Data is a collection (array) of objects
      axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        console.log(res.data)
        // Stores data in state
        setProducts(res.data)
      })
      .catch(err => console.log(err))

      // Retrieves unique product categories from API
      // Data is an array:
      // ["men's clothing", 'jewelery', 'electronics', "women's clothing"]
      axios.get(`https://fakestoreapi.com/products/categories`)
      .then(res => {
        console.log(res.data)
        // Stores data in state
        setCategories(res.data)
      })
      .catch(err => console.log(err))
    }, [], // Runs only once when page loads; causes infinite loop without it
  )

  // Retrieves products from API for a specific category, which is passed as a parameter on click
  // Data is a collection (array) of objects
  // Changes the data held in "products" state
  const showCategoryProducts = (category) => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => {
      // Stores data in state
      setProducts(res.data)
    })
    .catch(err => console.log(err))
  }

  // Retrieves all product data from API for "all" button
  // Data is a collection (array) of objects
  // Changes the data held in "products" state
  const showAllProducts = () => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        // Stores data in state
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  }
  
  // Renders the page
  return (
    // If darkMode is true, adds "homepage-dark" class
    <div className={darkMode?"homepage-container homepage-dark" : "homepage-container"}>
        <div className="category-filter-container">
          <p
            className="category-filter-button"
            id="all-button"
            onClick={() => showAllProducts()}
          >all</p>
          {
            // Creates p tags for each product category
            // Unique categories are retrieved from "categories" state
            categories.map(item => <p
              className="category-filter-button"
              // Previous problem solved!
              // Turned function call into arrow function to stop it from running on page load
              onClick={() => showCategoryProducts(item)}
              key={item[0]}
            >{item}</p>)
          }
        </div>
        <div className="products-container">
            {
              // Creates a div for each product
              products.map(item => <ProductCard
                key={item.id}
                product={item}
              />)
            }
        </div>
    </div>
  )
}

export default Homepage