import axios from "axios";
import { createContext, useState } from "react";

const userContext = createContext(null);

export const UserProvider = (props) => {
   const [authUser, setAuthUser] = useState(null);
   const baseUrl = "https://lmtechtestauth.onrender.com";
   const signIn = async (body) => {
      const res = await axios.post(`${baseUrl}/login`, body);
      if (res.data.success === true) {
         setAuthUser(res.data);
         return res.data;
      } else if (res.data.success === false) {
         return null;
      } else {
         throw new Error();
      }
   };

   const signOut = () => setAuthUser(null);

   return (
      <userContext.Provider value={{ authUser, actions: { signIn, signOut } }}>
         {props.children}
      </userContext.Provider>
   );
};

export default userContext;
