import axios from "axios";
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const userContext = createContext(null);

export const UserProvider = (props) => {
   const [authUser, setAuthUser] = useState(null);
   const baseUrl = "https://lmtechtestauth.onrender.com";

   const signIn = async (body) => {
      try {
         const res = await axios.post(`${baseUrl}/login`, body);
         if (res.data.success === true ) {
            const decodedToken = jwt_decode(res.data.message);
            Cookies.set("authToken", res.data.message, { expires: 500 });
            setAuthUser(decodedToken);
            return res.data;
         } else {
            throw new Error("Authentication failed");
         }
      } catch (error) {
         return null;
      }
   };

   // Function to sign out and remove the token from cookies
   const signOut = () => {
      Cookies.remove("authToken"); // Remove token from cookies
      setAuthUser(null);
   };

   // Initialize the authUser from cookies on component mount
   useEffect(() => {
      const storedToken = Cookies.get("authToken");
      if (storedToken) {
         const decodedToken = jwt_decode(storedToken);
         setAuthUser(decodedToken);
      }
   }, []);

   return (
      <userContext.Provider value={{ authUser, actions: { signIn, signOut } }}>
         {props.children}
      </userContext.Provider>
   );
};


export default userContext;



