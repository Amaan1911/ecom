
import React, { useContext } from "react";
import Header from "../components/Header";
import { CartContext } from "../context/CartContext";

export default function CartPage(){
  const { cart, removeFromCart, updateQty, total, clearCart } = useContext(CartContext);

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="card">Cart is empty.</div>
        ) : (
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="card flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.title}</div>
                  <div>${item.price}</div>
                </div>
                <div>
                  <input type="number" value={item.qty} min={1} onChange={e => updateQty(item.id, Number(e.target.value))} className="w-20 border px-2 py-1" />
                </div>
                <div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-600">Remove</button>
                </div>
              </div>
            ))}
            <div className="card flex justify-between items-center">
              <div>
                <button onClick={clearCart} className="text-sm text-red-600">Clear Cart</button>
              </div>
              <div className="text-lg font-bold">Total: ${total}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
