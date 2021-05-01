const products = [
  {
    sku: "ca",
    name: "Classic Ad",
    productDetail: "Offers the most basic level of advertisement",
    price: 269.99,
  },
  {
    sku: "soa",
    name: "Stand out Ad",
    productDetail:
      "Allows advertisers to use a company logo and use a longer presentation text",
    price: 322.99,
  },
  {
    sku: "pa",
    name: "Premium Ad",
    productDetail:
      "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
    price: 394.99,
  },
];

const offers = {
  secondBite: {
    ca: {
      offerDetail: "Gets a 3 for 2 deal on Classic Ads",
      qty: 3,
      discountQty: 2,
    },
  },
  axilCoffeeRoasters: {
    soa: {
      offerDetail:
        "Gets a discount on Stand out Ads where the price drops to $299.99 per ad",
      offerPrice: 299.99,
    },
  },
  myer: {
    soa: {
      offerDetail: "Gets a 5 for 4 deal on Stand out Ads",
      qty: 5,
      discountQty: 4,
    },
    pa: {
      offerDetail:
        "Gets a discount on Premium Ads where the price drops to $389.99 per ad",
      offerPrice: 389.99,
    },
  },
};
