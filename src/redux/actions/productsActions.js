import { getProducts, getPricingRules } from "../../api";

export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
export const LOAD_PRODUCTS_FAILURE = "LOAD_PRODUCTS_FAILURE";

const loadProducts = () => ({
  type: LOAD_PRODUCTS,
});

const loadProductsSuccess = (products, promos) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  products,
  promos,
});

const loadProductsFailure = () => ({
  type: LOAD_PRODUCTS_FAILURE,
});

export const fetchProducts = () => (dispatch, getState) => {
  const { token } = getState().customer;

  dispatch(loadProducts());
  return Promise.all([getProducts(), getPricingRules(token)])
    .then((response) => {
      const [productsList, promos] = response;
      if (productsList && promos) {
        dispatch(loadProductsSuccess(productsList, promos));
      } else {
        dispatch(loadProductsFailure());
      }
    })
    .catch(() => {
      dispatch(loadProductsFailure());
    });
};
