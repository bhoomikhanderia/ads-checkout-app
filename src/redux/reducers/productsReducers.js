import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
} from "../actions/productsActions";

const initialState = {
  isLoading: false,
  productsList: [],
  hasError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        productsList: action.products.map((product) => {
          const promo = action.promos[product.id] || {};

          return { ...product, promo };
        }),
        hasError: false,
      };
    }
    case LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};
