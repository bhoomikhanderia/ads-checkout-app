export const GET_CUSTOMER = "GET_CUSTOMER";

export const getCustomer = (token) => ({
  type: GET_CUSTOMER,
  token,
});
