function ProductThumbnail({ src, index, currentIndex, setCurrentIndex }) {
  const isActive = currentIndex === index;

  return (
    <div className="relative cursor-pointer group" onClick={() => setCurrentIndex(index)}>
      <img
        src={src}
        alt="Photo of sneakers"
        className={`rounded-[10px] ${isActive ? "outline-2 outline-orange-500" : ""}`}
      />

      <div className={`absolute inset-0 rounded-[10px] transition-all group-hover:block ${isActive ? "bg-white/75" : "group-hover:bg-white/50"}`}></div>
    </div>
  )
}

export default ProductThumbnail;