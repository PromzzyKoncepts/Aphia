import React, { useContext } from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import userContext from "../context/userContext";

const Protected = ({ Children }) => {
  const { authUser } = useContext(userContext);
  return (
    authUser ? <Outlet/>   : <Navigate to="/login" replace />
  );
};

export default Protected;
