import React from "react";
import "./Home.css";
import Prime from "./5e0f1eed2dd641e886100dd7a7695d60.webp";
import Product from "./Product";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <img className="home__image" src={Prime} alt="prime" />
          <div className="home__row">
            <Product
              id="1"
              title="The lean startup"
              image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/149322/1.jpg?1106"
              price={29.99}
              rating={5}
            />
            <Product
              id="2"
              title="The lean startup"
              image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/149322/1.jpg?1106"
              price="100"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="3"
              title="The lean startup"
              image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/149322/1.jpg?1106"
              price="100"
              rating={5}
            />
            <Product
              id="4"
              title="The lean startup"
              image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/149322/1.jpg?1106"
              price="100"
              rating={5}
            />
            <Product
              id="5"
              title="The lean startup"
              image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/149322/1.jpg?1106"
              price="100"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="6"
              title="The lean startup"
              image="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/149322/1.jpg?1106"
              price="100"
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
