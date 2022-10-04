import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();
  let totalPrice = 0;
  console.log("basket: ", basket[0]);
  for (let i = 0; i < basket.length; i++) {
    totalPrice = totalPrice + Number(basket[i].price);
  }
  console.log(totalPrice);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
