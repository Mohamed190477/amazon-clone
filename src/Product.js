import React from "react";
import "./Product.css";
import Star from "./star-outline-filled.png";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into data
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  let arr = [];
  for (let i = 0; i < rating; i++) {
    arr.push(<img className="product__rateStar" src={Star} alt="star" />);
  }

  return (
    <div className="product">
      <div className="prouct__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{arr}</div>
      </div>
      <img src={image} alt="product" />
      <div className="product__buttonContainer">
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  );
};

export default Product;
