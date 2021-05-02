import { render, screen } from "../../test-utils";
import { useSelector } from "react-redux";
import Cart from "./index";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

test("renders correctly when cart is empty", () => {
  useSelector.mockReturnValueOnce([]).mockReturnValueOnce(0);
  render(<Cart />);
  const total = screen.getByText("Total");
  expect(total.closest("div")).toHaveTextContent("$0");
});

test("renders correctly when there are products in cart", () => {
  useSelector
    .mockReturnValueOnce([
      {
        discountedPrice: 539.98,
        id: "classic",
        name: "Classic Ad",
        quantity: 3,
        price: 269.99,
      },
    ])
    .mockReturnValueOnce(539.98);
  render(<Cart />);

  const total = screen.getByText("Total");
  expect(total.closest("div")).toHaveTextContent("$539.98");
});
