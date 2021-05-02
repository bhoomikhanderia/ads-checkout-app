import React from "react";
import { useDispatch } from "react-redux";
import { getCustomer } from "../../redux/actions/customerActions";
import "../../styles/customer.scss";

function Customer() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(getCustomer(e.target.value));
  };

  return (
    <div className="customer">
      <label htmlFor="login-as">Select Customer: </label>
      <select id="login-as" onChange={handleChange}>
        <option value="">Default</option>
        <option value="myer">Myer</option>
        <option value="secondBite">SecondBite</option>
        <option value="axilCoffee">Axil Coffee Roasters</option>
      </select>
    </div>
  );
}

export default Customer;
