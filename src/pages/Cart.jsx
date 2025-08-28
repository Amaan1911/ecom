
import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { CartContext } from "../context/CartContext";

export default function CartPage(){
  const { cart, removeFromCart, updateQty, total, clearCart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <main className="max-w-4xl mx-auto p-4 md:p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="card">Cart is empty.</div>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="card flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded flex-shrink-0" 
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm sm:text-base mb-1">{item.title}</div>
                  <div className="text-blue-600 font-medium">${item.price}</div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <label className="text-sm text-gray-600 sm:hidden">Qty:</label>
                  <input 
                    type="number" 
                    value={item.qty} 
                    min={1} 
                    onChange={e => updateQty(item.id, Number(e.target.value))} 
                    className="w-16 sm:w-20 border px-2 py-1 rounded text-center" 
                  />
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="text-red-600 hover:text-red-800 transition-colors text-sm sm:text-base px-2 py-1 rounded hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="card flex flex-col sm:flex-row justify-between items-center gap-4 p-4">
              <div>
                <button 
                  onClick={clearCart} 
                  className="text-sm text-red-600 hover:text-red-800 transition-colors px-3 py-2 rounded hover:bg-red-50"
                >
                  Clear Cart
                </button>
              </div>
              <div className="text-lg font-bold text-blue-600">Total: ${total}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
