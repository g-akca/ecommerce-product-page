import { useState } from "react";

import CartIcon from "./icons/CartIcon";
import Cart from "./Cart";

import menuIcon from "/images/icon-menu.svg";
import logoImg from "/images/logo.svg";
import avatarImg from "/images/image-avatar.png";

function Header({ openMenu }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header 
      className="
        px-6 pb-6 pt-5 w-full flex justify-between items-center relative tablet:pb-8 tablet:pt-7 tablet:px-0 
        tablet:max-w-200 tablet:border-b tablet:border-b-grey-100 desktop:max-w-350
      "
    >
      <div className="h-5 flex gap-4 items-end desktop:items-center desktop:gap-14">
        <button className="cursor-pointer">
          <img src={menuIcon} alt="Menu icon" onClick={openMenu} className="h-3.75 desktop:hidden" />
        </button>

        <img src={logoImg} alt="Logo titled sneakers" className="h-full" />

        <nav className="hidden desktop:block">
          <ul className="flex gap-8 text-[15px]">
            <li><a href="#" className="relative transition-all hover:text-grey-950 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-12.25 after:h-1 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full">Collections</a></li>
            <li><a href="#" className="relative transition-all hover:text-grey-950 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-12.25 after:h-1 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full">Men</a></li>
            <li><a href="#" className="relative transition-all hover:text-grey-950 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-12.25 after:h-1 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full">Women</a></li>
            <li><a href="#" className="relative transition-all hover:text-grey-950 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-12.25 after:h-1 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full">About</a></li>
            <li><a href="#" className="relative transition-all hover:text-grey-950 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-12.25 after:h-1 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="h-6 flex gap-6 items-center tablet:gap-12 tablet:h-12.5">
        <div className="relative">
          <button onClick={() => setIsCartOpen(prev => !prev)}>
            <CartIcon className="h-5 cursor-pointer transition-all hover:text-grey-950" />
          </button>

          {isCartOpen && (
            <Cart />
          )}
        </div>

        <img src={avatarImg} alt="User avatar" className="h-full rounded-full cursor-pointer hover:border-2 hover:border-orange-500" />
      </div>
    </header>
  )
}

export default Header;