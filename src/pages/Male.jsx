import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiMale } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { add } from "../components/redux/features/cartSlice";

function Male() {
   const [data, setData] = useState([]);
   const dispatch = useDispatch()

   useEffect(() => {
      async function fetchData() {
         // You can await here
         try {
            const res = await axios.get("https://fakestoreapi.com/products");
            setData(res.data);
         } catch (error) {
            console.log(error);
         }
      }
      fetchData();
   }, []);
   return (
      <div>
         <h1>
            Welcome to my male wears page <BiMale />
         </h1>
         <main>
            <div className="images">
               {data?.map((image, id) => {
                  return (
                     <div className="image" key={id}>
                        <img src={image.image} alt={image.title} />
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                        <button onClick={() => dispatch(add(image))}>Add To Cart</button>
                     </div>
                  );
               })}
            </div>
         </main>
      </div>
   );
}

export default Male;
