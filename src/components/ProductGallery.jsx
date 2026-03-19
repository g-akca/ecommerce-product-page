import { useState } from "react";

import IconButton from "./IconButton";
import ProductThumbnail from "./ProductThumbnail";
import PreviousIcon from "./icons/PreviousIcon";
import NextIcon from "./icons/NextIcon";
import Lightbox from "./Lightbox";

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

  const thumbnails = [
    product1Thumbnail,
    product2Thumbnail,
    product3Thumbnail,
    product4Thumbnail,
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
        className="relative h-75 w-full p-4 bg-cover bg-center cursor-pointer tablet:h-72.5 tablet:rounded-[15px] desktop:h-111.25"
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

      {isOpen && (
        <Lightbox
          closeLightbox={() => setIsOpen(false)}
          images={images}
          thumbnails={thumbnails}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          prevImage={prevImage}
          nextImage={nextImage}
        />
      )}
    </section>
  )
}

export default ProductGallery;