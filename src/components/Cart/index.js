import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import {
  productsInCartSelector,
  totalAmountSelector,
} from "../../redux/selectors";

const Cart = () => {
  const addedProducts = useSelector(productsInCartSelector);
  const total = useSelector(totalAmountSelector);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-products">
        {addedProducts.map((product) => (
          <CartProduct key={product.id} {...product} />
        ))}
      </div>
      <div className="cart-summary">
        <div className="item">
          <h3 className="label">Total</h3>
          <div className="cart-total">${total}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
