import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FilterContext } from "../context/FilterContext";
import { CartContext } from "../context/CartContext";

export default function Header({ onMenuToggle, isMenuOpen }) {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(FilterContext);
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-blue-500 shadow px-4 md:px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded-md hover:bg-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo */}
        <div 
          onClick={() => navigate("/")} 
          className="text-xl font-bold cursor-pointer text-white"
        >
          Logo
        </div>

        {/* Search Bar - Hidden on mobile, centered on desktop */}
        <div className="hidden md:flex flex-1 justify-center max-w-md mx-8">
          <input
            placeholder="Search for products..."
            className="w-full border rounded px-3 py-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Cart */}
        <nav className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <button className="bg-blue-600 text-white px-3 md:px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              <span className="hidden sm:inline">🛒 Cart</span>
              <span className="sm:hidden">🛒</span>
            </button>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              {cartCount}
            </span>
          </Link>
        </nav>
      </div>

      {/* Mobile Search Bar - Below header on mobile */}
      <div className="md:hidden mt-4 px-4">
        <input
          placeholder="Search for products..."
          className="w-full border rounded px-3 py-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </header>
  );
}
