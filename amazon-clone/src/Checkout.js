import React from 'react'
import './Checkout.css';

function Checkout() {
    return (
        <div className="checkout">

            <div className="checkput--left">
                <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv"/>
                <div>
                    <h3 className="checkout--title"> Your shopping details </h3>

                </div>


            </div>


            <div className="checkput--right">

                <div >
                    <h3>  subtotal (2 items) </h3>
                </div>



            </div>

        </div>
    )
}

export default Checkout
