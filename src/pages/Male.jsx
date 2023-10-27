import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../components/redux/features/cartSlice";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Male() {
   const [data, setData] = useState([]);
   const dispatch = useDispatch()

   async function fetchData() {
      // You can await here
      try {
         const res = await axios.get("https://fakestoreapi.com/products");
         setData(res.data);
      } catch (error) {
         console.log("res.data");
         console.log(error);
      }
  }
  
   useEffect(() => {
      fetchData();
   }, []);
   return (
     <div className="bg-slate-50">
       <h3 className="">Men's Fashion</h3>
       <span>{data.length} products available</span>
       <main>
         <div className="grid grid-cols-4 gap-3 w-10/12 m-auto">
           {data?.map((item, id) => {
             return (
               <div className="bg-white p-3" key={id}>
                 <img
                   className="max-w-[10rem] h-[10rem] object-fill"
                   src={item.image} 
                   alt={item.title}
                 />
                 <h5>{item.title}</h5>
                 {/* <p>{item.description}</p> */}
                 <button
                   className="bg-amber-500 text p-2 rounded text-slate-100 hover:bg-orange-500 items-center flex"
                   onClick={() => dispatch(add(item))}
                 >
                   <ShoppingBagIcon />
                   Shop now
                 </button>
               </div>
             );
           })}
         </div>
       </main>
     </div>
   );
}

export default Male;
