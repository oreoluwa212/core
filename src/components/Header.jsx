import React, { useContext, useEffect, useState } from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import SimpleBtn from "./buttons/SimpleBtn";
import { logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../zustand/CartStore";
import { FaTimes } from "react-icons/fa";
import BlackBtn from "./buttons/BlackBtn";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items: cartItems } = useCartStore();
  const [dummyState, setDummyState] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path, sectionId) => {
    navigate(path, { state: { sectionId } });
    setIsMenuOpen(false); // Close menu after navigation
  };

  const handleClearCart = () => {
    clearCart();
    setDummyState(!dummyState);
  };

  useEffect(() => {
    setDummyState(!dummyState);
  }, [cartItems]);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-6 px-[5%] bg-black text-white z-50">
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <nav className="hidden lgss:flex font-medium gap-[4rem]">
        <button
          onClick={() => handleNavigation("/", "home")}
          className="hover:underline"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("/", "artworks")}
          className="hover:underline"
        >
          Artworks
        </button>
        <button
          onClick={() => handleNavigation("/", "about")}
          className="hover:underline"
        >
          About
        </button>
      </nav>
      <div className="hidden lgss:flex space-x-7 items-center">
        <Link to={"/cart"}>
          <div className="relative">
            <PiShoppingCartSimpleFill className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs">
              {cartItems.length}
            </span>
          </div>
        </Link>
        <SimpleBtn className={"px-[32px]"}>Log In</SimpleBtn>
        <SimpleBtn
          onClick={handleClearCart}
          className={
            "px-[32px] hover:bg-white hover:text-black hover:font-semibold border-white border"
          }
        >
          Sign Up
        </SimpleBtn>
      </div>
      <div className="flex lgss:hidden text-white text-2xl gap-7">
        <div className="relative">
          <PiShoppingCartSimpleFill size={24} />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs">
            {cartItems.length}
          </span>
        </div>
        <button onClick={handleMenuToggle} className="focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center space-y-6 pt-20 z-50`}
      >
        <button
          onClick={handleMenuToggle}
          className="absolute top-8 right-6 text-black text-[28px] focus:outline-none"
        >
          <FaTimes />
        </button>
        <button
          onClick={() => handleNavigation("/", "home")}
          className="text-black hover:underline"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("/", "artworks")}
          className="text-black hover:underline"
        >
          Artworks
        </button>
        <button
          onClick={() => handleNavigation("/", "about")}
          className="text-black hover:underline"
        >
          About
        </button>
        <div className="pt-10 w-full flex flex-col items-center gap-4">
          <BlackBtn className={"w-[60%] py-2"}>Sign Up</BlackBtn>
          <BlackBtn className={"w-[60%] py-2"}>Log In</BlackBtn>
        </div>
      </div>
    </header>
  );
};

export default Header;
