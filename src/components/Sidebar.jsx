import React from "react";

export default function Sidebar({ categories }) {
  return (
    <aside className="space-y-6 bg-blue-500 shadow-md p-6 rounded-md w-[200px] md:w-auto">
    
      <div className="card">
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-3 overflow-x-auto hide-scrollbar">
          {["All", ...categories].map((c) => (
            <label
              key={c}
              className="flex items-center gap-2 whitespace-nowrap bg-white/20 md:bg-transparent px-2 py-1 rounded md:rounded-none"
            >
              <input type="radio" name="cat" />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </div>

     
      <div className="card">
        <h3 className="font-semibold mb-2">Price (max)</h3>
        <input type="range" min="0" max="1000" defaultValue="500" />
        <div className="text-sm mt-2">Up to $500</div>
      </div>
    </aside>
  );
}
