import { Route ,Outlet,Navigate } from "react-router-dom";

import React from 'react'
import { useSelector } from "react-redux";
import authSlice from '../../store/signup';

function PrivatePages() {

    const { userData } = useSelector((state) => state.authSlice);

    let auth =userData.accessToken


  return (
   auth ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivatePages