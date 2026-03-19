import { useCart } from "../context/CartContext";

import deleteIcon from "/images/icon-delete.svg";

function CartItem({ name, price, quantity, thumbnail }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <img src={thumbnail} className="h-12.5 aspect-square rounded-sm" />

        <div>
          <p>{name}</p>

          <div className="flex gap-2">
            <p>${price.toFixed(2)} x {quantity}</p>
            <p className="text-grey-950 font-bold">${(price * quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>

      <button onClick={() => removeFromCart(name, quantity)} className="cursor-pointer">
        <img src={deleteIcon} alt="Trash can icon" />
      </button>
    </div>
  )
}

export default CartItem;