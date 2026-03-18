import CloseIcon from "./icons/CloseIcon";

function Menu({ closeMenu }) {
  return (
    <div className="bg-white p-6 fixed left-0 w-62.5 h-full z-20">
      <button className="cursor-pointer mb-14" onClick={closeMenu}>
        <CloseIcon className="transition-all hover:text-grey-950" />
      </button>

      <nav>
        <ul className="flex flex-col gap-6">
          <li><a href="#" className="text-[18px] font-bold text-grey-950">Collections</a></li>
          <li><a href="#" className="text-[18px] font-bold text-grey-950">Men</a></li>
          <li><a href="#" className="text-[18px] font-bold text-grey-950">Women</a></li>
          <li><a href="#" className="text-[18px] font-bold text-grey-950">About</a></li>
          <li><a href="#" className="text-[18px] font-bold text-grey-950">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;