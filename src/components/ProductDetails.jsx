import CartIcon from "./CartIcon";

import minusIcon from "/images/icon-minus.svg";
import plusIcon from "/images/icon-plus.svg";

function ProductDetails() {
  return (
    <section className="px-6 flex flex-col gap-8 tablet:px-0 tablet:gap-6">
      <div>
        <p className="mb-4 uppercase text-[12px] tracking-[1.85px] leading-auto font-bold tablet:mb-6 tablet:text-[13px] tablet:tracking-[2px]">Sneaker company</p>
        <h2 className="mb-4 text-[28px] leading-8 font-bold text-grey-950 tablet:mb-6 tablet:text-[44px] tablet:leading-12">Fall Limited Edition Sneakers</h2>

        <p className="text-[15px] tablet:text-base">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      </div>

      <div className="flex justify-between tablet:flex-col tablet:gap-2">
        <div className="flex gap-4 tablet:gap-6">
          <p className="text-[28px] leading-8 font-bold text-grey-950">$125.00</p>
          <p className="w-12.75 h-6.75 bg-grey-950 rounded-md text-white font-bold text-center">50%</p>
        </div>

        <p className="line-through font-bold">$250.00</p>
      </div>

      <div className="flex flex-col gap-4 font-bold text-grey-950 tablet:flex-row tablet:gap-2">
        <div className="bg-grey-50 rounded-[10px] p-4 h-14 flex justify-between items-center tablet:w-75 tablet:px-6">
          <button>
            <img src={minusIcon} alt="Minus icon" />
          </button>

          <span>
            0
          </span>

          <button>
            <img src={plusIcon} alt="Plus icon" />
          </button>
        </div>

        <button 
          className="p-4 h-14 bg-orange-500 rounded-[10px] 
            shadow-[0_20px_50px_rgba(255,126,27,0.25)] 
            flex justify-center items-center gap-4 cursor-pointer tablet:grow
          "
        >
          <CartIcon className="h-4" />
          <span className="leading-auto">Add to cart</span>
        </button>
      </div>
    </section>
  )
}

export default ProductDetails;