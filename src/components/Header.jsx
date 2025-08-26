import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-500 shadow px-6 py-4 grid grid-cols-3 items-center">
      {/* Logo */}
      <div 
        onClick={() => navigate("/")} 
        className="text-xl font-bold cursor-pointer"
      >
        Logo
      </div>

      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          placeholder="Search for products..."
          className="w-full max-w-md border rounded px-3 py-2"
        />
      </div>

      {/* Cart */}
      <nav className="flex items-center justify-end gap-4">
        <Link to="/cart" className="relative">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            🛒 Cart
          </button>
          {/* Placeholder count */}
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
            0
          </span>
        </Link>
      </nav>
    </header>
  );
}
