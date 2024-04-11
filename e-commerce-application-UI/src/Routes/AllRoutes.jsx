import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SellerDashBoard from '../Private/Seller/SellerDashBoard';
import Addproduct from '../Private/Seller/Addproduct';
import Cart from '../Private/Customer/Cart';
import Explore from '../Private/Customer/Explore';
import Wishlist from '../Private/Customer/Wishlist';
import Home from '../Public/Home';
import AddAddress from '../Private/Common/AddAddress';
import EditProfile from '../Private/Common/EditProfile';
import Register from '../Public/Register';
import App from '../App';
import Login from '../Public/Login';



const AllRoutes=()=>{
    const user={
          id: "123",
          username:"rachel",
          role :"customer",
          authenticated: true,
          accessExpiration:3600,
          refreshExpiration:1234000
        }
        const {role, authenticated}=user;
        let routes=[];

    if(authenticated){
        (role ==="seller")?
        routes.push(
            <Route path="/seller-dashboard" element={<SellerDashBoard/>} />,
            <Route path="/addproduct" element={<Addproduct/>} />
         )
        : (role ==="customer") &&
        routes.push(
            <Route path="/cart" element={<Cart/>} />,
            <Route path="/explore" element={<Explore/>} />,
            <Route path="/wishlist" element={<Wishlist/>} />
         )
         routes.push(
            <Route path="/home" element={<Home/>} />,
            <Route path="/addaddress" element={<AddAddress/>} />,
            <Route path="/editprofile" element={<EditProfile/>} />
         )
    }
    else{
        (role === "customer") &&
        routes.push(
            <Route path="/" element={<Home/>} />,
            <Route path="/login" element={<Login/>} />,
            <Route path="/register" element={<Register/>} />,
            <Route path="/explore" element={<Explore/>} /> 
        )
    }
    return (
    <Routes>
        <Route path='/' element={<App />}>{routes}</Route>
    </Routes>
    )
  
}
 
export default AllRoutes;