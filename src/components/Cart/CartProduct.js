import React from "react";
import PropTypes from "prop-types";
import { calculatePrice } from "../../utils";

const CartProduct = ({ name, quantity, price, discountedPrice }) => {
  return (
    <div className="cart-product">
      <div className="quantity">
        {quantity} <span aria-hidden="true">X</span>
      </div>
      <h3 className="name">{name}</h3>
      <div>
        {discountedPrice && (
          <div className="discounted">${discountedPrice}</div>
        )}
        <div className={`price${discountedPrice ? " promo-applied" : ""}`}>
          ${calculatePrice(price, quantity)}
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number,
};

export default CartProduct;
