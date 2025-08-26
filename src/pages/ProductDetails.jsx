
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

export default function ProductDetail(){
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useContext(CartContext);

  if(!product) return <div className="p-6">Product not found</div>;

  return (
    <div>
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded" />
        </div>
        <div className="card">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="text-2xl text-blue-600 font-bold my-2">${product.price}</div>
          <p className="text-sm text-gray-700">{product.description}</p>
          <div className="mt-4">
            <label className="block mb-2">Quantity</label>
            <input type="number" defaultValue={1} min={1} id="qty" className="border px-2 py-1 w-24" />
          </div>
          <div className="mt-4">
            <button onClick={() => {
              const q = Number(document.getElementById("qty").value) || 1;
              addToCart(product, q);
            }} className="bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
