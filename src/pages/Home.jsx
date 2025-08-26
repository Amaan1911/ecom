
import React, { useContext } from "react";
import products from "../data/products";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { FilterContext } from "../context/FilterContext";

export default function Home(){
  const categories = Array.from(new Set(products.map(p=>p.category)));
  const { query, category, priceRange } = useContext(FilterContext);

  const filtered = products.filter(p => {
    const matchQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchCategory = category === "All" ? true : p.category === category;
    const matchPrice = p.price <= priceRange[1];
    return matchQuery && matchCategory && matchPrice;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Sidebar categories={categories} />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold mb-4">Product Listing</h2>
          {filtered.length === 0 ? (
            <div className="card">No products found.</div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </main>
      <footer className="bg-blue-800 text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex justify-between">
          <div>© 2025 American</div>
          <div className="space-x-3">Follow Us: [icons]</div>
        </div>
      </footer>
    </div>
  );
}
