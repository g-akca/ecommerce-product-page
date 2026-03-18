import IconButton from "./IconButton";

import previousIcon from "/images/icon-previous.svg";
import nextIcon from "/images/icon-next.svg";
import product1Thumbnail from "/images/image-product-1-thumbnail.jpg";
import product2Thumbnail from "/images/image-product-2-thumbnail.jpg";
import product3Thumbnail from "/images/image-product-3-thumbnail.jpg";
import product4Thumbnail from "/images/image-product-4-thumbnail.jpg";

function ProductGallery() {
  return (
    <section className="flex flex-col gap-8 desktop:w-md desktop:flex-none">
      <div 
        className="
          h-75 w-full p-4 flex items-center bg-[url('/images/image-product-1.jpg')] bg-cover bg-center
          tablet:h-72.5 tablet:rounded-[15px] desktop:h-111.25
        "
      >
        <div className="grow flex justify-between items-center desktop:hidden">
          <IconButton>
            <img src={previousIcon} alt="Previous icon" className="w-2.5" />
          </IconButton>
          
          <IconButton>
            <img src={nextIcon} alt="Next icon" className="w-2.5" />
          </IconButton>
        </div>
      </div>

      <div className="hidden desktop:grid h-22 w-full grid-cols-4 gap-8">
        <div className="relative">
          <img src={product1Thumbnail} alt="Photo of sneakers" className="rounded-[10px] outline-2 outline-orange-500" />
          <div className="absolute inset-0 bg-white/75 rounded-[10px]" />
        </div>

        <div className="relative">
          <img src={product2Thumbnail} alt="Photo of sneakers" className="rounded-[10px]" />
          <div className="absolute inset-0 bg-white/75 rounded-[10px] hidden" />
        </div>

        <div className="relative">
          <img src={product3Thumbnail} alt="Photo of sneakers" className="rounded-[10px]" />
          <div className="absolute inset-0 bg-white/75 rounded-[10px] hidden" />
        </div>

        <div className="relative">
          <img src={product4Thumbnail} alt="Photo of sneakers" className="rounded-[10px]" />
          <div className="absolute inset-0 bg-white/75 rounded-[10px] hidden" />
        </div>
      </div>
    </section>
  )
}

export default ProductGallery;