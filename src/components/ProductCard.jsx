export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <p style={{ color: "#666", fontSize: "13px" }}>{product.category}</p>

      <p>
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <button
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
