import React from "react";
import "../../styles/customer.scss";

function Customer() {
  return (
    <div className="customer">
      <label htmlFor="customer">Select Customer </label>
      <select id="customer">
        <option value="">Default</option>
        <option value="axilCoffeeRoasters">Axil Coffee Roasters</option>
        <option value="myer">Myer</option>
        <option value="secondBite">SecondBite</option>
      </select>
    </div>
  );
}

export default Customer;
