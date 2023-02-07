import React from "react";
import cart1 from "../../assets/images/cart.png";


const CartWidget = () => {

    return(
        <div>    
            <img src={cart1} alt="cart" className="cartIcon" ></img>
            <div className="cartCount" >
            <span id="contador-productos">3</span>
            </div>
        </div>
    );
};

export {CartWidget}