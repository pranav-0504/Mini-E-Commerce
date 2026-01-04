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
              <div className="cart-title">{item.title}</div>

              <div className="qty-controls">
                <button
                  className="qty-btn"
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  disabled={item.qty <= 1}
                >
                  −
                </button>

                <span className="qty-value">{item.qty}</span>

                <button
                  className="qty-btn"
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  disabled={item.qty >= item.stock}
                >
                  +
                </button>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
                
              </div>

            </div>
          ))}

          <hr />

          <p><strong>Total Items:</strong> {cart.length}</p>
          <p><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p>

          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
}
