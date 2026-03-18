function Menu({ closeMenu }) {
  return (
    <div className="bg-white p-6 fixed left-0 w-62.5 h-full z-10">
      <button onClick={closeMenu}>

      </button>

      <nav>
        <ul></ul>
      </nav>
    </div>
  )
}

export default Menu;