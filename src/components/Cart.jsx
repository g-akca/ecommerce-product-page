function Cart() {
  return (
    <div 
      className="
        absolute top-full mt-8 -right-16
        w-[96vw] max-w-90 h-64 bg-white rounded-[10px] 
        shadow-[0_20px_50px_rgba(29,32,38,0.1)] py-6
        tablet:w-90 tablet:right-1/2 tablet:translate-x-1/2 tablet:mt-7
      "
    >
      <h2 className="px-3 font-bold text-grey-950 pb-5.75 border-b border-b-grey-100">Cart</h2>

      <div className="p-6">
        <p className="font-bold pt-12 text-center">Your cart is empty.</p>
      </div>
    </div>
  )
}

export default Cart;