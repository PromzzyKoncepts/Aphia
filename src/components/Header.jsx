import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import aphia from "../assets/aphia.png";
import jumiagif from "../assets/Jumiagif.gif";
import { useSelector } from "react-redux";
import userContext from "../context/userContext";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const { authUser } = useContext(userContext);
  const [isCategories, setIsCategories] = useState(false);
  const handleCategories = () => setIsCategories((prev) => !prev);
  const allCartItems = useSelector((state) => state.cart.items); //access the cart proprty of the reducer in the store
  return (
    <div>
      <header>
        <img src={aphia} alt="aphia logo" className="header_logo"></img>

        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Search for products, categories, brands"
            />

            <button type="submit" class="searchButton">
              <SearchIcon />
            </button>
          </div>
        </div>

        <nav className="flex flex-row justify-center items-center">
          <div>
            <NavLink className="text-black" to="/">
              Home
            </NavLink>
          </div>
          <div>
          <p
            className="items-center"
            onMouseEnter={handleCategories}
            onMouseLeave={handleCategories}
          >
            {authUser ? ` Hi ${authUser.username}` : "My account"}
            <ArrowDropDownIcon />
            {isCategories && (
              <section className="categories rounded">
                <p>
                  {authUser ? (
                    <div className="flex flex-col">
                      <NavLink className="rounded text-white" to="/orders">
                        Orders
                      </NavLink>{" "}
                      <br />
                      <NavLink
                        className="bg-amber-500 p-2 rounded text-white"
                        to="/logout"
                      >
                        Log Out
                      </NavLink>
                    </div>
                  ) : (
                    <>
                      <p className=" mb-3">
                        <NavLink
                          className="bg-amber-500 p-2 rounded text-white"
                          to="/login"
                        >
                          Login
                        </NavLink>
                      </p>
                      <p>
                        <NavLink className="text-white" to="/register">
                          SignUp
                        </NavLink>
                      </p>
                    </>
                  )}
                </p>

                
              </section>
            )}
          </p>
            </div>
          <NavLink
            to="/cart"
            className="hover-icon flex items-center gap-3 text-black"
          >
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={allCartItems?.length} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>{" "}
            Cart
          </NavLink>
          <NavLink
            className="bg-amber-500 px-3 py-1 rounded font-bold text-white"
            to="/dashboard"
          >
            Sell
          </NavLink>
        </nav>
      </header>
      <img src={jumiagif} alt="gif" />
    </div>
  );
};

export default Header;
