import React from 'react'
import Product from "../Product/index"
import {products} from "../../data"
import "./style.css"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Proyects</h1>
            <p className="pl-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam autem, facilis harum odio quae obcaecati voluptate eos ducimus fugiat libero adipisci illum ea asperiores dolor similique dignissimos quisquam est odit.
            </p>
        </div>
        <div className="pl-list">
            {products.map((item) => (
              <Product key={item.id} img={item.img} link={item.link}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList