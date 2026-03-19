import { useCart } from "../context/CartContext";

import CartItem from "./CartItem";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div 
      className="
        absolute top-full mt-8 -right-16 z-40
        w-[96vw] max-w-90 min-h-64 bg-white rounded-[10px] 
        shadow-[0_20px_50px_rgba(29,32,38,0.1)] py-6
        tablet:w-90 tablet:right-1/2 tablet:translate-x-1/2 tablet:mt-7
      "
    >
      <h2 className="px-3 font-bold text-grey-950 pb-5.75 border-b border-b-grey-100">Cart</h2>

      {cart.length === 0 ? (
        <div className="pt-6 px-6">
          <p className="font-bold pt-12 text-center">Your cart is empty.</p>
        </div>
      ) : (
        <div className="pt-6 px-6 flex flex-col gap-6">
          {cart.map(item => (
            <CartItem
              key={item.name}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}

          <button type="button" className="p-4 h-14 bg-orange-500 rounded-[10px] transition-all cursor-pointer hover:bg-orange-300">
            <span className="text-grey-950 font-bold">Checkout</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart;