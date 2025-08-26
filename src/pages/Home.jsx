import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6 flex-grow">
        
        
        <div className="md:col-span-1">
          <Sidebar categories={["Electronics", "Clothing", "Shoes", "Accessories"]} />
        </div>

    
        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold mb-4">Product Listing</h2>

    
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard product={{ id: 1, title: "Sample Product 1", price: 29.99, image: "https://via.placeholder.com/200" }} />
            <ProductCard product={{ id: 2, title: "Sample Product 2", price: 49.99, image: "https://via.placeholder.com/200" }} />
            <ProductCard product={{ id: 3, title: "Sample Product 3", price: 19.99, image: "https://via.placeholder.com/200" }} />
          </div>
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
