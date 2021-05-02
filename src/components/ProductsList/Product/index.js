import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";

const MIN_QUANTITY_TO_ADD = 1;

const Product = ({ id, name, price, promo }) => {
  const [quantity, setQuantity] = useState(MIN_QUANTITY_TO_ADD);
  const dispatch = useDispatch();

  const { discountedUnitPrice, description } = promo;

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (quantity < MIN_QUANTITY_TO_ADD) return;

    dispatch(addToCart({ id, quantity }));
  };

  return (
    <div className="product-container">
      <h3>{name}</h3>
      <div className="promo-description">{description}</div>
      <div>
        <span>Price: </span>
        <span className={`price${discountedUnitPrice ? " promo-applied" : ""}`}>
          ${price}
        </span>
        {discountedUnitPrice && (
          <span className="discounted">${discountedUnitPrice}</span>
        )}
      </div>
      <label htmlFor={`${id}-quantity`}>
        Quantity to add:
        <input
          id={`${id}-quantity`}
          className="quantity-input"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min={MIN_QUANTITY_TO_ADD}
        />
      </label>
      <button className="add-button" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  promo: PropTypes.shape({
    description: PropTypes.string,
    discountedUnitPrice: PropTypes.number,
  }),
};

export default Product;
