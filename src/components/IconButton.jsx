function IconButton({ children }) {
  return (
    <button className="group w-10 h-10 p-1 bg-white rounded-full flex justify-center items-center cursor-pointer">
      {children}
    </button>
  )
}

export default IconButton;