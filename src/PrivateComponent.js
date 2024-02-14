import React from "react";
import {Navigate,Outlet} from 'react-router-dom'
import Login from "./login";

const PrivateComponent=()=>{
    const auth=localStorage.getItem('user');
    return auth?<Outlet/>:<Navigate to="/signup"/>;
    
}
export default PrivateComponent;