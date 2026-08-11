import { useState } from "react"

function ProductCard(props){
    const [purchased, setPurchased] = useState(false)
    return(
        <div>
            <h1>Product Card</h1>
            <p>Product: {props.product}</p>
            <p>Price: {props.price}</p>
            <p>Category: {props.category}</p>
            <p>Brand: {props.brand}</p>
            <button onClick={()=>setPurchased(true)}>{purchased ? "Purchased" : "Buy Now"}</button>
        </div>
    )
}

export default ProductCard