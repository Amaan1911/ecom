import React from "react";

export default function ProductDetail() {
 
  const product = {
    id: 1,
    title: "Sample Product",
    price: 49.99,
    description: "This is a sample description of the product. It highlights features, quality, and other useful details.",
    image: "https://via.placeholder.com/400x400"
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    
      <div className="card">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded"
        />
      </div>

    
      <div className="card">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="text-2xl text-blue-600 font-bold my-2">${product.price}</div>
        <p className="text-sm text-gray-700">{product.description}</p>

       
        <div className="mt-4">
          <label className="block mb-2">Quantity</label>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="border px-2 py-1 w-24"
          />
        </div>

        
        <div className="mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
