
import React, { useContext, useState, useEffect } from "react";
import products from "../data/products";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { FilterContext } from "../context/FilterContext";

export default function Home(){
  const categories = Array.from(new Set(products.map(p=>p.category)));
  const { query, category, priceRange } = useContext(FilterContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const filtered = products.filter(p => {
    const matchQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchCategory = category === "All" ? true : p.category === category;
    const matchPrice = p.price <= priceRange[1];
    return matchQuery && matchCategory && matchPrice;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      
      <main className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64 md:flex-shrink-0">
            <Sidebar 
              categories={categories} 
              isOpen={isMenuOpen}
              onClose={handleMenuClose}
            />
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Product Listing</h2>
            {filtered.length === 0 ? (
              <div className="card">No products found.</div>
            ) : (
              <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-blue-800 text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between gap-4">
          <div>© 2025 American</div>
          <div className="space-x-3">Follow Us: [icons]</div>
        </div>
      </footer>
    </div>
  );
}
