import { ADD_TO_CART } from "../actions/cartActions";
import { GET_CUSTOMER } from "../actions/customerActions";

const initialState = {
  addedProductsIds: [],
  quantityById: {},
};

const addedProductsIds = (state = initialState.addedProductsIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state.includes(action.id) ? state : [...state, action.id];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, quantity } = action;

      return {
        ...state,
        [id]: (state[id] || 0) + quantity,
      };
    default:
      return state;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addedProductsIds: addedProductsIds(state.addedProductsIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
    case GET_CUSTOMER:
      return {
        addedProductsIds: [],
        quantityById: {},
      };
    default:
      return state;
  }
};
