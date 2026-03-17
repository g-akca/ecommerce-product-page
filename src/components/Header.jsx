import menuIcon from "/images/icon-menu.svg";
import logoImg from "/images/logo.svg";
import cartIcon from "/images/icon-cart.svg";
import avatarImg from "/images/image-avatar.png";

function Header() {
  return (
    <header className="px-6 pb-6 pt-5 flex justify-between items-center">
      <div className="h-5 flex gap-4 items-end">
        <img src={menuIcon} alt="Menu icon" className="h-3.75" />
        <img src={logoImg} alt="Logo titled sneakers" className="h-full" />
      </div>

      <div className="h-6 flex gap-6 items-center">
        <img src={cartIcon} alt="Cart icon" className="h-5" />
        <img src={avatarImg} alt="User avatar" className="h-full" />
      </div>
    </header>
  )
}

export default Header;