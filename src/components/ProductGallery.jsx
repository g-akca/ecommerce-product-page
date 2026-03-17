import IconButton from "./IconButton";

import previousIcon from "/images/icon-previous.svg";
import nextIcon from "/images/icon-next.svg";

function ProductGallery() {
  return (
    <section className="h-75 p-4 flex items-center bg-[url('/images/image-product-1.jpg')] bg-cover bg-center">
      <div className="grow flex justify-between items-center">
        <IconButton>
          <img src={previousIcon} alt="Previous icon" className="w-2.5" />
        </IconButton>
        
        <IconButton>
          <img src={nextIcon} alt="Next icon" className="w-2.5" />
        </IconButton>
      </div>
    </section>
  )
}

export default ProductGallery;