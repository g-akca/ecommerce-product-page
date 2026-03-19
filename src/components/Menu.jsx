import { motion } from "framer-motion";
import CloseIcon from "./icons/CloseIcon";

import { navLinks } from "../data/navLinks";

function Menu({ closeMenu }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-62.5 h-full bg-white p-6 z-20 tablet:w-75 tablet:py-12 tablet:px-20 desktop:hidden"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ ease: "easeInOut" }}
    >
      <button type="button" className="cursor-pointer mb-14" onClick={closeMenu}>
        <CloseIcon className="transition-all hover:text-grey-950" />
      </button>

      <nav>
        <ul className="flex flex-col gap-6">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="text-[18px] font-bold text-grey-950">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
}

export default Menu;