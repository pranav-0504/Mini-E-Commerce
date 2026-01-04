export default function Cart({ cart, updateQty, removeItem }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.title}</span>

              <input
                type="number"
                min="1"
                max={item.stock}
                value={item.qty}
                onChange={(e) =>
                  updateQty(item.id, Number(e.target.value))
                }
              />

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <hr />

          <p><strong>Total Items:</strong> {cart.length}</p>
          <p><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}
