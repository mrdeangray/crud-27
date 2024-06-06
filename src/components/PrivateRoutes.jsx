import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoutes = () => {
  const {currUser} = useContext(AuthContext)
  return currUser? <Outlet />:<Navigate to={`/`}/>
  
};

export default PrivateRoutes;
