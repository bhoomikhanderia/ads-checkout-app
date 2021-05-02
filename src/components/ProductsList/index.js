import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import { getProductsList, getIsLoading, getToken } from "../../redux/selectors";
import Product from "./Product";
import LoadingSpinner from "../LoadingSpinner";

function ProductsList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const productsList = useSelector(getProductsList);
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, token]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <h2>Products </h2>
      <div className="products-list">
        {productsList.map(({ name, id, price, promo }) => (
          <Product key={id} id={id} name={name} price={price} promo={promo} />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
