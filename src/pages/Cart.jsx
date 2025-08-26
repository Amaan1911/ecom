import React from "react";
import Header from "../components/Header";

export default function CartPage() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

        {/* If cart is empty */}
        <div className="card">Cart is empty.</div>

        {/* If cart has items */}
        <div className="space-y-4">
          <div className="card flex items-center gap-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <div className="font-semibold">Product Title</div>
              <div>$99.99</div>
            </div>
            <div>
              <input
                type="number"
                value={1}
                min={1}
                className="w-20 border px-2 py-1"
                readOnly
              />
            </div>
            <div>
              <button className="text-red-600">Remove</button>
            </div>
          </div>

          <div className="card flex justify-between items-center">
            <div>
              <button className="text-sm text-red-600">Clear Cart</button>
            </div>
            <div className="text-lg font-bold">Total: $199.98</div>
          </div>
        </div>
      </main>
    </div>
  );
}
