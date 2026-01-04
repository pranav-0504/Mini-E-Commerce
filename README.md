# 🛒 Mini E-Commerce Product & Cart

A small e-commerce web application built using **React + Vite** to demonstrate
component-based design, state management, clean UI/UX practices, and basic cart functionality.

---

## 🚀 Features

- Product listing with:
  - Product name
  - Price
  - Category
  - Stock status (In Stock / Out of Stock)
- Search products by name
- Filter products by category
- Sort products by price:
  - Low → High
  - High → Low
- Add items to cart
- Remove items from cart
- Update item quantity using **+ / − controls**
- Quantity limited by available stock
- Cart summary:
  - Total items
  - Total price
- **Cart state persisted using localStorage**
- Clean, responsive UI without any UI libraries

---

## 🧠 Tech Stack

- **React (Functional Components & Hooks)**
- **Vite**
- **JavaScript (ES6+)**
- **CSS (No UI libraries used)**

---

## 🗂️ Data Handling

- Product data is **mocked locally** based on the structure of  
  [`https://fakestoreapi.com/products`](https://fakestoreapi.com/products)
- Cart data is stored and restored using **browser localStorage**, ensuring
  cart persistence across page reloads.

---

## 📦 Project Structure

```text
src/
├── components/
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   ├── Cart.jsx
│   └── Filters.jsx
├── data/
│   └── products.js
├── App.jsx
└── styles.css

```

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/pranav-0504/Mini-E-Commerce.git
cd Mini-E-Commerce
npm install
npm run dev
Then Open browser at: http://localhost:5173

