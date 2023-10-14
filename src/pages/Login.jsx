import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const Login = () => {
   const {
      actions: { signIn },
   } = useContext(userContext);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [isLoading, setIsLoading] = useState(false);
   const [errors, setErrors] = useState("");

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const body = {
         email,
         password,
      };

      try {
         setIsLoading(true);
         const res = await signIn(body);
         if (res) {
            setIsLoading(false);
            setErrors("");
            navigate("/");
         }
      } catch (error) {
         setErrors(`${error.response.data.message}`);
         setIsLoading(false);
         console.log(error.response.data.message);
      }
   };

   return (
      <form onSubmit={(e) => handleSubmit(e)}>
         <h1>Login </h1>
         {errors && <h3>{errors}</h3>}
         <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email"
         />
         <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
         />
         <button>{isLoading ? "Loading" : "Submit"}</button>
      </form>
   );
};

export default Login;
