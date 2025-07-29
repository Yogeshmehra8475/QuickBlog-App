import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const nevigate = useNavigate();

  const logout = ()=>{
    nevigate("/")
  }

  return (
    <>
      <div>
        <img
          src={assets.logo}
          alt=""
          className="w-32 sm:w-40 cursor-pointer"
          onClick={() => nevigate("/")}/>
          <button onClick={logout} className="text-sm px-8 py-2 bg-primary text-white rounded-full curspr-pointer">Logout</button>
      </div>
    </>
  );
};

export default Layout;
