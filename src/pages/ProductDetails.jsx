
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";

export default function ProductDetail(){
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if(!product) return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <div className="card">Product not found</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <main className="max-w-5xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-4">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-64 md:h-96 object-cover rounded-lg" 
            />
          </div>
          <div className="card p-4 space-y-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">{product.title}</h1>
            <div className="text-xl md:text-2xl text-blue-600 font-bold">${product.price}</div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{product.description}</p>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Quantity</label>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min={1} 
                  className="border px-3 py-2 w-24 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => addToCart(product, quantity)} 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium flex-1"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => setQuantity(quantity + 1)} 
                  className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium"
                >
                  +
                </button>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                  className="bg-gray-100 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
