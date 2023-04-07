import React, { useState } from "react";

export default function List() {
  const [items, setItems] = useState([]);

  const handleAddItem = (event) => {
    event.preventDefault();
    setItems([...items, items.length + 1]);
  };

  return (
    <div className="space-y-2">
      <ul className="list-disc list-inside">
        {items.map((item) => (
          <li key={item}>Item {item}</li>
        ))}
      </ul>

      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add 1
      </button>
    </div>
  );
}
