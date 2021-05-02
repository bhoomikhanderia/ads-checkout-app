export const formatNumber = (number) => Math.floor(number * 100) / 100;
export const calculatePrice = (a, b) => formatNumber(a * b);

export const getOfferPrice = (promo, quantity, price) => {
  const { discountedUnitPrice, deal } = promo;
  if (discountedUnitPrice) return calculatePrice(discountedUnitPrice, quantity);

  if (deal && quantity >= deal.buy) {
    const discountValue =
      Math.floor(quantity / deal.buy) * (deal.buy - deal.for) * price;

    return formatNumber(price * quantity - discountValue);
  }

  return null;
};
