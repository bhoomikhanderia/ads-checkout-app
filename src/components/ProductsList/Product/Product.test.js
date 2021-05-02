import { render, screen, fireEvent } from "../../../test-utils";
import Product from ".";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("renders Product component", () => {
  test("renders price and discounted price correctly when there is a promo", () => {
    const promo = {
      discountedUnitPrice: 299.99,
    };
    render(
      <Product id="standard" name="Standard" price={322.99} promo={promo} />
    );

    const discountedPrice = screen.getByText("$299.99");

    expect(discountedPrice).toHaveClass("discounted");
  });
});

describe("addToCart action", () => {
  test("should be dispatched when addToCart button is clicked", () => {
    render(<Product id="standard" name="Standard" price={322.99} promo={{}} />);

    const addToCartButton = screen.getByText("Add to cart");

    fireEvent.click(addToCartButton);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
