import "./styles/app.scss";
import Customer from "./components/Customer";
import Products from "./components/Products";

function App() {
  return (
    <div className="app">
      <h1>Welcome to Seek's Ad Checkout ~</h1>
      <Customer />
      <Products />
    </div>
  );
}

export default App;
