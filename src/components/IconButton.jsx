function IconButton({ children, onClick, className }) {
  return (
    <button type="button" onClick={onClick} className={`group w-10 h-10 p-1 bg-white rounded-full flex justify-center items-center cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

export default IconButton;