import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export default function Sidebar({ categories, isOpen, onClose }) {
  const { category, setCategory, priceRange, setPriceRange } = useContext(FilterContext);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static top-0 left-0 h-full md:h-auto
        w-64 md:w-auto bg-blue-500 shadow-md p-6 rounded-md
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 p-2 rounded-md hover:bg-blue-600 transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Category Filter */}
        <div className="card mb-6">
          <h3 className="font-semibold mb-3 text-white">Category</h3>
          <div className="flex flex-col gap-2">
            {["All", ...categories].map((c) => (
              <label
                key={c}
                className="flex items-center gap-2 whitespace-nowrap bg-white/20 hover:bg-white/30 px-3 py-2 rounded cursor-pointer transition-colors"
              >
                <input 
                  type="radio" 
                  name="cat" 
                  checked={category === c}
                  onChange={() => setCategory(c)}
                  className="accent-blue-700"
                />
                <span className="text-white">{c}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="card">
          <h3 className="font-semibold mb-3 text-white">Price (max)</h3>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={priceRange[1]} 
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full h-2 bg-yellow/20 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="text-sm mt-3 text-white">Up to ${priceRange[1]}</div>
        </div>
      </aside>
    </>
  );
}
