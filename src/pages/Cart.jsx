import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../components/redux/features/cartSlice";

const Cart = () => {
   const allItems = useSelector(state => state.cart)
   const dispatch = useDispatch()
   return (
      <div className="w-10/12 m-auto">
         <h1 className="text-2xl">Welcome to your cart <span>
            ({allItems.length}) items</span></h1>
         {allItems.map((item, id) => {
            return (
               <div className="cart-content" key={id}>
                  <img src={item.image} alt={item.title} className="w-10" />
                  <h3>{item.title}</h3>
                  <button className="bg bg-orange-500 text p-2 rounded text-slate-100" onClick={()=> dispatch(remove(item.id))}>Remove</button>
               </div>
            )
         })}
      </div>
   );
};

export default Cart;
