import { useState, useMemo, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Filters from "./components/Filters";
import "./styles.css";

export default function App() {

  /* ---------------- CART (localStorage) ---------------- */

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ---------------- PRODUCTS (API) ---------------- */

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        // FakeStore API me stock nahi hota → enrich kar rahe
        const enriched = data.map(p => ({
          ...p,
          stock: Math.floor(Math.random() * 6) + 1
        }));

        setProducts(enriched);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* ---------------- FILTERS ---------------- */

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter(p => p.category === category);
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, sort]);

  /* ---------------- CART LOGIC ---------------- */

  const addToCart = product => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);

      if (existing) {
        if (existing.qty < product.stock) {
          return prev.map(i =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return prev;
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev =>
      prev.map(i =>
        i.id === id ? { ...i, qty: Math.max(1, qty) } : i
      )
    );
  };

  const removeItem = id => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="container">
      <h1>Mini E-Commerce Platform</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div className="layout">
          <div className="products-wrapper">
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
            />
          </div>

          <Cart
            cart={cart}
            updateQty={updateQty}
            removeItem={removeItem}
          />
        </div>
      )}
    </div>
  );
}
