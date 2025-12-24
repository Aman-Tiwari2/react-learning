import React from "react";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <nav className="bg-emerald-900 text-white py-7 px-10 flex items-center justify-between">
      <h2 className="text-3xl text-white">Website</h2>
      <div className="flex gap-10 items-center ">
       <Link to='/'>Home</Link>
       <Link to='/about'>About</Link>
       <Link to='/contact'>Contact</Link>
       <Link to='/Product'>Product</Link>
      </div>
    </nav>
  );
};

export default Header;
