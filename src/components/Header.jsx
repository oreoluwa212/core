import React from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import SimpleBtn from "./buttons/SimpleBtn";
import { logo } from "../assets";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-[5%] bg-black text-white z-50">
      <div className="">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="hidden lgss:flex font-medium gap-[4rem]">
        <a href="#artworks" className="hover:underline">
          Artworks
        </a>
        <a href="#invest" className="hover:underline">
          Invest
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
      </nav>
      <div className="hidden lgss:flex space-x-7 items-center">
        <PiShoppingCartSimpleFill className="text-2xl" />
        <SimpleBtn className={"px-[32px]"}>Log In</SimpleBtn>
        <SimpleBtn className={"px-[32px] border-white border"}>
          Sign Up
        </SimpleBtn>
      </div>
    </header>
  );
};

export default Header;
