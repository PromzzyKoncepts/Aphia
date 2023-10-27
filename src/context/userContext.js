import axios from "axios";
import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const userContext = createContext(null);

export const UserProvider = (props) => {
   const [authUser, setAuthUser] = useState(null);
   const [loading, setLoading] = useState(true); // Add loading state
   const baseUrl = "https://lmtechtestauth.onrender.com";

   const signIn = async (body) => {
      try {
         const res = await axios.post(`${baseUrl}/login`, body);
         if (res.data.success === true) {
            const decodedToken = jwt_decode(res.data.message);
            localStorage.setItem("authToken", res.data.message); 
            setAuthUser(decodedToken);
            return res.data;
         } else {
            throw new Error("Authentication failed");
         }
      } catch (error) {
         return null;
      }
   };

   const signOut = () => {
      localStorage.removeItem("authToken"); 
      setAuthUser(null);
   };

   useEffect(() => {
      const storedToken = localStorage.getItem("authToken"); // Retrieve from localStorage
      if (storedToken) {
         const decodedToken = jwt_decode(storedToken);
         setAuthUser(decodedToken);
      }
      setLoading(false); // Set loading to false once authentication check is done
   }, []);

   return (
      <userContext.Provider value={{ authUser, actions: { signIn, signOut } }}>
         {loading ? <p>Loading...</p> : props.children}
      </userContext.Provider>
   );
};

export default userContext;
