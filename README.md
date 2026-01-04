# 🛒 Mini E-Commerce Product & Cart

A small e-commerce web application built using **React + Vite** to demonstrate
component-based design, state management, and clean UI handling.

---

## 🚀 Features

- Product listing with name, price, category & stock status
- Search products by name
- Filter products by category
- Sort products by price (Low → High, High → Low)
- Add / Remove items from cart
- Update item quantity (with stock limits)
- Cart total items & total price calculation
- Cart state persisted using **localStorage**
- Clean, responsive UI

---

## 🧠 Tech Stack

- **React (Functional Components)**
- **Vite**
- **JavaScript (ES6+)**
- **CSS (No UI libraries used)**

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

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/pranav-0504/Mini-E-Commerce.git
cd Mini-E-Commerce
npm install
npm run dev
Then Open browser at: http://localhost:5173