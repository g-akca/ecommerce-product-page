import IconButton from "./IconButton";
import ProductThumbnail from "./ProductThumbnail";
import PreviousIcon from "./icons/PreviousIcon";
import NextIcon from "./icons/NextIcon";
import CloseIcon from "./icons/CloseIcon";

function Lightbox({ closeLightbox, images, thumbnails, currentIndex, setCurrentIndex, prevImage, nextImage }) {
  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div className="w-[60vh] flex flex-col items-center">
        <div className="w-full flex justify-end mb-6">
          <button type="button" onClick={closeLightbox} className="text-white cursor-pointer transition-all hover:text-orange-500">
            <CloseIcon />
          </button>
        </div>

        <div className="relative w-full mb-10 aspect-square bg-cover bg-center rounded-[15px]" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
          <IconButton onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute -left-6.75 top-1/2 -translate-y-1/2 w-14 h-14">
            <PreviousIcon className="w-5 text-grey-950 transition-all group-hover:text-orange-500" />
          </IconButton>
          
          <IconButton onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute -right-6.75 top-1/2 -translate-y-1/2 w-14 h-14">
            <NextIcon className="w-5 text-grey-950 transition-all group-hover:text-orange-500" />
          </IconButton>
        </div>

        <div className="grid w-[80%] grid-cols-4 gap-8">
          {thumbnails.map((thumb, index) => (
            <ProductThumbnail
              key={thumb}
              src={thumb}
              index={index}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lightbox;
