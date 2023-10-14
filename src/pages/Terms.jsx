import React, { useState } from "react";

function Terms() {
   const [user, setUser] = useState({
      name: " ",
      address: {
         street: "",
         location: {
            path: "",
         },
      },
   });

   let {
      name,
      address: {
         street,
         location: { path },
      },
   } = user;

   function handleName(e) {
      const { name, value } = e.target;
      setUser({
         [name]: value,
         ...user.address,
      });
      console.log(user);
   }

   function handleStreet(e) {}

   function handlePath(e) {}

   // console.log(user);
   return (
      <div>
         <h1>Terms and agreement </h1>
         <form>
            <input
               type="text"
               value={name}
               name="name"
               placeholder="enter name"
               onChange={handleName}
            />
            <input
               type="text"
               value={street}
               name="street"
               placeholder="enter street"
               onChange={handleStreet}
            />
            <input
               type="text"
               value={path}
               name="path"
               placeholder="enter path"
               onChange={handlePath}
            />
            <button type="submit">Go!</button>
         </form>
      </div>
   );
}

export default Terms;
