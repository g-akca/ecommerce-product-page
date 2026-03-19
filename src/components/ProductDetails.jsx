import { useCart } from "../context/CartContext";
import { useState } from "react";

import CartIcon from "./icons/CartIcon";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";

function ProductDetails() {
  const { cart, addToCart } = useCart();

  const product = {
    name: "Fall Limited Edition Sneakers",
    price: 125,
    thumbnail: "/ecommerce-product-page/public/images/image-product-1-thumbnail.jpg"
  }

  const [quantity, setQuantity] = useState(cart.find(item => item.name === product.name) ? cart.find(item => item.name === product.name).quantity : 0);

  return (
    <section className="px-6 flex flex-col gap-8 tablet:px-0 tablet:gap-6 desktop:gap-8">
      <div>
        <p className="mb-4 uppercase text-[12px] tracking-[1.85px] leading-auto font-bold tablet:mb-6 tablet:text-[13px] tablet:tracking-[2px] desktop:leading-4">Sneaker company</p>
        <h2 className="mb-4 text-[28px] leading-8 font-bold text-grey-950 tablet:mb-6 tablet:text-[44px] tablet:leading-12 desktop:mb-8">Fall Limited Edition Sneakers</h2>

        <p className="text-[15px] tablet:text-base">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      </div>

      <div className="flex justify-between tablet:flex-col tablet:gap-2">
        <div className="flex gap-4 tablet:gap-6">
          <p className="text-[28px] leading-8 font-bold text-grey-950">${product.price.toFixed(2)}</p>
          <p className="w-12.75 h-6.75 bg-grey-950 rounded-md text-white font-bold text-center">50%</p>
        </div>

        <p className="line-through font-bold">$250.00</p>
      </div>

      <div className="flex flex-col gap-4 font-bold text-grey-950 tablet:flex-row tablet:gap-2 desktop:gap-4">
        <div className="bg-grey-50 rounded-[10px] p-4 h-14 flex justify-between items-center tablet:w-75 tablet:px-6 desktop:w-39.25 desktop:px-2">
          <button onClick={() => setQuantity(prev => prev === 0 ? 0 : prev - 1)}>
            <MinusIcon className="text-orange-500 cursor-pointer transition-all hover:text-orange-300" />
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity(prev => prev + 1)}>
            <PlusIcon className="text-orange-500 cursor-pointer transition-all hover:text-orange-300" />
          </button>
        </div>

        <button 
          className="p-4 h-14 bg-orange-500 rounded-[10px] 
            shadow-[0_20px_50px_rgba(255,126,27,0.25)] transition-all
            flex justify-center items-center gap-4 cursor-pointer hover:bg-orange-300 tablet:grow
          "
          onClick={() => addToCart(product, quantity)}
        >
          <CartIcon className="h-4" />
          <span className="leading-auto">Add to cart</span>
        </button>
      </div>
    </section>
  )
}

export default ProductDetails;