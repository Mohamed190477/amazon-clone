import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Header from "./Header";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <div className="checkout__adContainer">
            <img
              src="https://www.niemanlab.org/images/spotify-ad-insertion.png"
              alt=""
              className="checkout__ad"
            />
          </div>
          <div>
            <h3>Hello, {user ? user.email : "Guest"}</h3>
            <h2 className="checkout__title">Your shopping basket</h2>
            {basket.map((item, index) => (
              <CheckoutProduct
                id={basket[index].id}
                title={basket[index].title}
                image={basket[index].image}
                price={basket[index].price}
                rating={basket[index].rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
