export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort by price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button
        onClick={() => {
          setSearch("");
          setCategory("all");
          setSort("");
        }}
      >
        Clear
      </button>
    </div>
  );
}
