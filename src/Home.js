import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroDec-20/Dec_AuCC_Seasonal_3000x1200-2X._CB414979991_.jpg"
          alt=""
        ></img>
        <div className="home__row">
          <Product
            id="12553537"
            title="Dharma"
            price={19.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51e+ieln0GL._AC_SX368_.jpg"
            rating={4}
          />
          <Product
            id="12553536"
            title="The Great Rivalry"
            price={9.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51dBfbnKqfL._AC_SX368_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="12553535"
            title="Indian Icon:Royal Enfield"
            price={10.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/510ordYTv6L._AC_SX184_.jpg"
            rating={5}
          />
          <Product
            id="12553533"
            title="The Gun Island"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51KU3vnYPaL._AC_SX368_.jpg"
            rating={3}
          />
          <Product
            id="12553534"
            title="A Road Well Travelled"
            price={5.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51b14qkq57L._AC_SX368_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12553532"
            title="Our Hindu Rashtra"
            price={19.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/4177j7Jcv6L._AC_SX368_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
