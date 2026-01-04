import { useState, useMemo, useEffect } from "react";
import { products as productData } from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Filters from "./components/Filters";
import "./styles.css";

export default function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...productData];

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
  }, [search, category, sort]);

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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container">
      <h1>Mini E-Commerce</h1>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

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
    </div>
  );
}
