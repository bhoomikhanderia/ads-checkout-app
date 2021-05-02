export const products = [
  {
    id: "classic",
    name: "Classic Ad",
    productDetail: "Offers the most basic level of advertisement",
    price: 269.99,
  },
  {
    id: "standOut",
    name: "Stand out Ad",
    productDetail:
      "Allows advertisers to use a company logo and use a longer presentation text",
    price: 322.99,
  },
  {
    id: "premium",
    name: "Premium Ad",
    productDetail:
      "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
    price: 394.99,
  },
];

export const pricingRules = {
  myer: {
    standOut: {
      description: "5 for 4 deal",
      deal: {
        buy: 5,
        for: 4,
      },
    },
    premium: {
      discountedUnitPrice: 389.99,
    },
  },
  secondBite: {
    classic: {
      description: "3 for 2 deal",
      deal: {
        buy: 3,
        for: 2,
      },
    },
  },
  axilCoffee: {
    standOut: {
      discountedUnitPrice: 299.99,
    },
  },
};
