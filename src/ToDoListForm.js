import React, { useState } from "react";

export function ToDoListForm({ items, onAddItem }) {
  function submitForm(e) {
    e.preventDefault();
    if (!desc || !quantity) return;
    const newItem = {
      desc,
      quantity: +quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    setDesc("");
    setQuantity(1);
    onAddItem((item) => [...items, newItem]);
  }
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <form className="add-form" onSubmit={submitForm}>
      <h3>Add your Items to List</h3>
      <input
        type="text"
        placeholder="Add your item"
        className=""
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="number"
        min="1"
        placeholder="num"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
