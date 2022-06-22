import React from 'react'
import Product from "../Product/index"
import {products, productsEcomerce} from "../../data"
import "./style.css"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Proyects</h1>
            <h2 className="pl-title-p">Shopping Cart whit JavaScript</h2>
            <p className="pl-desc">
            Shopping cart using vanilla JS, making you have all the functionality of a current shopping cart!
            </p>
        </div>
        <div className="pl-list">
            {products.map((item) => (
              <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
        <div className="pl-texts">
            <h2 className="pl-title-p">E-Comerce whit HTML y CSS</h2>
            <p className="pl-desc">
            Layout of a complete E-Commerce, with sections such as home, products, blogs, about us, and much more!, applying a correct use of inheritance and styles.
            </p>
        </div>
        <div className="pl-list">
            {productsEcomerce.map((item) => (
              <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
    
    

    
  )
}

export default ProductList