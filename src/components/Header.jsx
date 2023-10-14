import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import aphia from "../assets/aphia.png";
import jumiagif from "../assets/Jumiagif.gif";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import userContext from "../context/userContext";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
  const allCartItems = useSelector((state) => state.cart); //access the cart proprty of the reducer in the store
  return (
    <div>
      <header>
        <img src={aphia} alt="aphia logo" className="header_logo"></img>
        <nav>
          <NavLink className="text-black" to="/">
            Home
          </NavLink>
          <p
            className="items-center"
            onMouseEnter={handleCategories}
            onMouseLeave={handleCategories}
          >
            My account <ArrowDropDownIcon />
            {isCategories && (
              <section className="categories rounded">
                <p>
                  {authUser ? (
                    <NavLink
                      className="bg-amber-500 p-2 rounded text-white"
                      to="/logout"
                    >
                      Log Out
                    </NavLink>
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

                {/* <p>
                   <NavLink to="/fashion/male">Male</NavLink>
                 </p>
                 <p>
                   <NavLink to="/fashion/female">Female</NavLink>
                 </p>
                 <p>
                   <NavLink to="/groceries">Groceries</NavLink>
                 </p>
                 <p>
                   <NavLink to="/appliances">Appliances</NavLink>
                 </p> */}
              </section>
            )}
          </p>
          <NavLink
            to="/cart"
            className="hover-icon flex items-center gap-3 text-black"
          >
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={allCartItems.length} color="secondary">
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
