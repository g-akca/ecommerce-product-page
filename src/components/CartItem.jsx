import deleteIcon from "/images/icon-delete.svg";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <img src={item.thumbnail} className="h-12.5 aspect-square rounded-sm" />

        <div>
          <p>{item.name}</p>

          <div className="flex gap-2">
            <p>${item.price.toFixed(2)} x {item.quantity}</p>
            <p className="text-grey-950 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>

      <button type="button" onClick={() => removeFromCart(item.name, item.quantity)} className="cursor-pointer">
        <img src={deleteIcon} alt="Trash can icon" />
      </button>
    </div>
  )
}

export default CartItem;