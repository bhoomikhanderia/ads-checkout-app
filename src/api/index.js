import { products, pricingRules } from "./data";

// Mock API calls
export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, products);
  });
}

export function getPricingRules(token) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000, pricingRules[token] || {});
  });
}
