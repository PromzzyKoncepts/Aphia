import React from "react";
import "../stylesheets/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div flex flex-row>
        <h3>Categories</h3>

        <div>
          <NavLink>Shoes</NavLink>
        </div>
        <div>
          <NavLink>Fashion</NavLink>
        </div>
        <div>
          <NavLink>Accessories</NavLink>
        </div>
        <div>
          <NavLink>Phone & Tablets</NavLink>
        </div>

        <div>
          <NavLink>Other Categories</NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
