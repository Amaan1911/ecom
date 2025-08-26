import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow sm:rounded-lg">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
          }}
        />
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className="text-lg sm:text-xl font-bold text-blue-600">${product.price}</span>
          <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            className="flex-1 bg-blue-600 text-white py-2 px-3 sm:px-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
            onClick={() => addToCart(product, 1)}
          >
            Add to Cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 sm:px-4 rounded-md hover:bg-gray-200 transition-colors font-medium text-center text-sm sm:text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
