import { createSelector } from "reselect";
import { formatNumber, getOfferPrice } from "../utils";

const getAddedProductsIds = (state) => state.cart.addedProductsIds;
const getQuantityById = (state) => state.cart.quantityById;

export const getProductsList = (state) => state.products.productsList;
export const getIsLoading = (state) => state.products.isLoading;
export const getToken = (state) => state.customer.token;

export const productsInCartSelector = createSelector(
  [getAddedProductsIds, getQuantityById, getProductsList],
  (addedProductsIds, quantityById, productsList) =>
    addedProductsIds.map((productId) => {
      const { promo, ...product } = productsList.find(
        (product) => product.id === productId
      );
      const { price } = product;
      const quantity = quantityById[productId] || 0;

      return {
        ...product,
        quantity,
        discountedPrice: getOfferPrice(promo, quantity, price),
      };
    })
);

export const totalAmountSelector = createSelector(
  productsInCartSelector,
  (productsInCart) =>
    formatNumber(
      productsInCart.reduce((acc, item) => {
        return acc + (item.discountedPrice || item.price * item.quantity);
      }, 0)
    )
);
