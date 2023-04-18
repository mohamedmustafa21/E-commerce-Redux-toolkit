import { Route ,Outlet,Navigate } from "react-router-dom";

import React from 'react'
import { useSelector } from "react-redux";
import authSlice from '../../store/signup';

function PrivatePages() {

    const { userData } = useSelector((state) => state.authSlice);

    let auth = userData.email ? userData.email : localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')).email : null;
   



  return (
   auth ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivatePages