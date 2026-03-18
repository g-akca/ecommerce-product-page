import CartIcon from "./CartIcon";

import menuIcon from "/images/icon-menu.svg";
import logoImg from "/images/logo.svg";
import avatarImg from "/images/image-avatar.png";

function Header() {
  return (
    <header 
      className="
        px-6 pb-6 pt-5 flex justify-between items-center tablet:pb-8 tablet:pt-7 tablet:px-0 
        tablet:max-w-200 tablet:w-full tablet:border-b tablet:border-b-grey-100 desktop:max-w-350
      "
    >
      <div className="h-5 flex gap-4 items-end desktop:items-center desktop:gap-14">
        <img src={menuIcon} alt="Menu icon" className="h-3.75 desktop:hidden" />
        <img src={logoImg} alt="Logo titled sneakers" className="h-full" />

        <nav className="hidden desktop:block">
          <ul className="flex gap-8 text-[15px]">
            <li><a href="#" className="transition-all hover:text-grey-950">Collections</a></li>
            <li><a href="#" className="transition-all hover:text-grey-950">Men</a></li>
            <li><a href="#" className="transition-all hover:text-grey-950">Women</a></li>
            <li><a href="#" className="transition-all hover:text-grey-950">About</a></li>
            <li><a href="#" className="transition-all hover:text-grey-950">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="h-6 flex gap-6 items-center tablet:gap-12 tablet:h-12.5">
        <CartIcon className="h-5 cursor-pointer transition-all hover:text-grey-950" />
        <img src={avatarImg} alt="User avatar" className="h-full rounded-full cursor-pointer hover:border-2 hover:border-orange-500" />
      </div>
    </header>
  )
}

export default Header;