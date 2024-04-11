import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { FaBell, FaCoins } from 'react-icons/fa';

import { Logout } from '@mui/icons-material';


const Header = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='flex item-center justify-around text-slate-950 text-slate-100 py-2  border-b-2 border-slate-1 text-center text-lg'>
        <Link to={"/"}><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart"/></Link>
        <section className='flex items-center gap-2 bg-slate-200 w-[32rem] rounded-md'><CiSearch /><input className='w-full text-lg bg-slate-200' type="text" placeholder="Search for Products, Brands and More" value="" ></input></section>
        <Link to={"/login"} className='relative group transition-all'>
          <p className='flex items-center justify-around  w-24  rounded-md hover:bg-blue-1000 hover:text-black'>
           <CgProfile />Login <IoIosArrowDown className='rotate-180 transition-all hover:rotate-0'/>
          </p>
          <div className=' flex justify-around absolute top-10 hidden w-60 flex-col gap-1 rounded-md bg-white py=3  shadow-md transition-all group-hover:flex '>
          <Link to={"/register"} className='flex item-center gap-5'>  New customer? <p className='text-blue-600 '>Sign Up</p></Link>
            <Link to={"MyProfile"} className='flex  gap-2'><CgProfile />My Profile</Link>
            <Link to={"/Superoinszone"} className='flex gap-2' ><FaCoins />SuperCoins Zone</Link>
          <Link to={"/orders"} className='flex gap-2 '><BsBox />Orders</Link>
           <Link to={"/wishlist"} className='flex gap-2 '><GoHeart />Wishlist</Link>
          <Link to={"/notifications"} className='flex gap-2'><FaBell/>Notification</Link>
           <Link to={"/logout"} className='flex gap-2'><Logout />LogOut</Link>
          </div>
         </Link>
         <Link to={"/register"} className='flex items-center gap-2'><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller" class="_1XmrCc"/>Become a seller</Link>
         </div>
  );
};


export default Header;