import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../components/redux/features/cartSlice";

const Cart = () => {
   const allItems = useSelector(state => state.cart)
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Welcome to your cart</h1>
         {allItems.map((item, id) => {
            return (
               <div className="cart-content" key={id}>
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <button onClick={()=> dispatch(remove(item.id))}>Remove</button>
               </div>
            )
         })}
      </div>
   );
};

export default Cart;
