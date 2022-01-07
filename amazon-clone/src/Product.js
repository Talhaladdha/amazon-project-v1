import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image }) {
    const [{cart}, dispatch] = useStateValue();

    const addToCart = () => {

        dispatch( {
            type: "ADD_TO_CART",
            item: {
            id: id,
            title: title,
            price: price,
            image: image,
            }
        }
        );
   }
    return (
        <div className="product">
            <div className="product--info">

                <img className="product--image" src={image} alt="" />
                <p>{title}</p>

                <p className="product--price">
                    <bold>₹</bold>
                    <strong>{price}</strong>

                </p>

            </div>

            <button className="product--button" onClick = {addToCart} >Add to Cart</button>  

        </div>
    )
}

export default Product