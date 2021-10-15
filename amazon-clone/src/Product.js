import React from 'react';
import'./Product.css';

function Product({id,title,price,image}) {
    return (
        <div className="product">
            <div className="product--info">

             <img className="product--image"src={image}alt="" /> 
             <p>{title}</p>
            
            <p className="product--price">
            <bold>₹</bold>
            <strong>{price}</strong>
            
            </p>

             </div>

             <button className="product--button">Add to Cart</button>  
            
        </div>
    )
}

export default Product