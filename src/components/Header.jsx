import { useState } from "react";
import { useCart } from "../context/CartContext";

import CartIcon from "./icons/CartIcon";
import Cart from "./Cart";

import navLinks from "../data/navLinks";

import menuIcon from "/images/icon-menu.svg";
import logoImg from "/images/logo.svg";
import avatarImg from "/images/image-avatar.png";

function Header({ openMenu }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  const totalQty = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <header 
      className="
        px-6 pb-6 pt-5 w-full flex justify-between items-center relative tablet:pb-8 tablet:pt-7 tablet:px-0 
        tablet:max-w-200 tablet:border-b tablet:border-b-grey-100 desktop:max-w-350
      "
    >
      <div className="h-5 flex gap-4 items-end desktop:items-center desktop:gap-14">
        <button type="button" className="cursor-pointer" onClick={openMenu}>
          <img src={menuIcon} alt="Menu icon" className="h-3.75 desktop:hidden" />
        </button>

        <img src={logoImg} alt="Logo titled sneakers" className="h-full" />

        <nav className="hidden desktop:block">
          <ul className="flex gap-8 text-[15px]">
            {navLinks.map(link => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="
                    relative transition-all hover:text-grey-950 after:absolute 
                    after:left-1/2 after:-translate-x-1/2 after:-bottom-12.25 after:h-1 
                    after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="h-6 flex gap-6 items-center tablet:gap-12 tablet:h-12.5">
        <div className="relative">
          <button type="button" onClick={toggleCart} className="relative flex justify-center items-center cursor-pointer">
            <CartIcon className={`h-5 transition-all hover:text-grey-950 ${totalQty > 0 ? "text-grey-950" : ""}`} />
              
            {totalQty > 0 && (
              <div className="absolute left-3 -top-1 w-4.75 h-3.25 bg-orange-500 rounded-[6.5px] flex items-center justify-center">
                <span className="text-white font-bold text-[10px] leading-auto">{totalQty}</span>
              </div>
            )}
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