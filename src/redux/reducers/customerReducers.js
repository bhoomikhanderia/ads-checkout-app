import { GET_CUSTOMER } from "../actions/customerActions";

const initialState = {
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
