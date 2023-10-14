import React from "react";
import { BiFemale } from "react-icons/bi";
import { useSelector } from "react-redux";

function Female() {
   const cartser= useSelector(state=> state.cart)
   console.log(cartser);
   return (
      <div>
         <h1>
            Welcome to my female wears page <BiFemale />
         </h1>
      </div>
   );
}

export default Female;
