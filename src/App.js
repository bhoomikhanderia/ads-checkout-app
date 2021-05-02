import "./styles/app.scss";
import Customer from "./components/Customer";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="app">
      <h1>Welcome to Seek's Ad Checkout ~</h1>
      <Customer />
      <ProductsList />
      <Cart />
    </div>
  );
}

export default App;
