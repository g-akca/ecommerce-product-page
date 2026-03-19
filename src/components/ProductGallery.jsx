import { useState } from "react";

import IconButton from "./IconButton";
import PreviousIcon from "./icons/PreviousIcon";
import NextIcon from "./icons/NextIcon";
import CloseIcon from "./icons/CloseIcon";

import product1Thumbnail from "/images/image-product-1-thumbnail.jpg";
import product2Thumbnail from "/images/image-product-2-thumbnail.jpg";
import product3Thumbnail from "/images/image-product-3-thumbnail.jpg";
import product4Thumbnail from "/images/image-product-4-thumbnail.jpg";

function ProductGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/ecommerce-product-page/images/image-product-1.jpg",
    "/ecommerce-product-page/images/image-product-2.jpg",
    "/ecommerce-product-page/images/image-product-3.jpg",
    "/ecommerce-product-page/images/image-product-4.jpg",
  ];

  function prevImage() {
    currentIndex === 0 ? setCurrentIndex(images.length - 1) : setCurrentIndex(prev => prev - 1);
  }

  function nextImage() {
    currentIndex === images.length - 1 ? setCurrentIndex(0) : setCurrentIndex(prev => prev + 1);
  }

  return (
    <section className="flex flex-col gap-8 desktop:w-md desktop:flex-none">
      <div 
        onClick={() => setIsOpen(true)}
        className="
          relative h-75 w-full p-4 bg-cover bg-center cursor-pointer
          tablet:h-72.5 tablet:rounded-[15px] desktop:h-111.25
        "
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="desktop:hidden">
          <IconButton onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2">
            <PreviousIcon className="w-3 text-grey-950 transition-all group-hover:text-orange-500" />
          </IconButton>
          
          <IconButton onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2">
            <NextIcon className="w-3 text-grey-950 transition-all group-hover:text-orange-500" />
          </IconButton>
        </div>
      </div>

      <div className="hidden desktop:grid h-22 w-full grid-cols-4 gap-8">
        <div className="relative cursor-pointer group" onClick={() => setCurrentIndex(0)}>
          <img src={product1Thumbnail} alt="Photo of sneakers" className={`rounded-[10px] ${currentIndex === 0 ? "outline-2 outline-orange-500" : ""}`} />
          <div className={`absolute inset-0 rounded-[10px] transition-all group-hover:block ${currentIndex === 0 ? "bg-white/75" : "group-hover:bg-white/50"}`} />
        </div>

        <div className="relative cursor-pointer group" onClick={() => setCurrentIndex(1)}>
          <img src={product2Thumbnail} alt="Photo of sneakers" className={`rounded-[10px] ${currentIndex === 1 ? "outline-2 outline-orange-500" : ""}`} />
          <div className={`absolute inset-0 rounded-[10px] transition-all group-hover:block ${currentIndex === 1 ? "bg-white/75" : "group-hover:bg-white/50"}`} />
        </div>

        <div className="relative cursor-pointer group" onClick={() => setCurrentIndex(2)}>
          <img src={product3Thumbnail} alt="Photo of sneakers" className={`rounded-[10px] ${currentIndex === 2 ? "outline-2 outline-orange-500" : ""}`} />
          <div className={`absolute inset-0 rounded-[10px] transition-all group-hover:block ${currentIndex === 2 ? "bg-white/75" : "group-hover:bg-white/50"}`} />
        </div>

        <div className="relative cursor-pointer group" onClick={() => setCurrentIndex(3)}>
          <img src={product4Thumbnail} alt="Photo of sneakers" className={`rounded-[10px] ${currentIndex === 3 ? "outline-2 outline-orange-500" : ""}`} />
          <div className={`absolute inset-0 rounded-[10px] transition-all group-hover:block ${currentIndex === 3 ? "bg-white/75" : "group-hover:bg-white/50"}`} />
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
          <div className="w-[60vh] flex flex-col items-center">
            <div className="w-full flex justify-end mb-6">
              <button onClick={() => setIsOpen(false)} className="text-white cursor-pointer transition-all hover:text-orange-500">
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
              <div className="relative cursor-pointer group" onClick={() => setCurrentIndex(0)}>
                <img src={product1Thumbnail} alt="Photo of sneakers" className={`rounded-[10px] ${currentIndex === 0 ? "outline-2 outline-orange-500" : ""}`} />
                <div className={`absolute inset-0 rounded-[10px] transition-all group-hover:block ${currentIndex === 0 ? "bg-white/75" : "group-hover:bg-white/50"}`} />
              </div>

              <div className="relative cursor-pointer group" onClick={() => setCurrentIndex(1)}>
                <img src={product2Thumbnail} alt="Photo of sneakers" className={`rounded-[10px] ${currentIndex === 1 ? "outline-2 outline-orange-500" : ""}`} />
                <div className={`absolute inset-0 rounded-[10px] transition-all group-hover:block ${currentIndex === 1 ? "bg-white/75" : "group-hover:bg-white/50"}`} />
              </div>

              <div className="relative cursor-pointer group" onClick={() => setCurrentIndex(2)}>
                <img src={product3Thumbnail} alt="Photo of sneakers" className={`rounded-[10px] ${currentIndex === 2 ? "outline-2 outline-orange-500" : ""}`} />
                <div className={`absolute inset-0 rounded-[10px] transition-all group-hover:block ${currentIndex === 2 ? "bg-white/75" : "group-hover:bg-white/50"}`} />
              </div>

              <div className="relative cursor-pointer group" onClick={() => setCurrentIndex(3)}>
                <img src={product4Thumbnail} alt="Photo of sneakers" className={`rounded-[10px] ${currentIndex === 3 ? "outline-2 outline-orange-500" : ""}`} />
                <div className={`absolute inset-0 rounded-[10px] transition-all group-hover:block ${currentIndex === 3 ? "bg-white/75" : "group-hover:bg-white/50"}`} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductGallery;