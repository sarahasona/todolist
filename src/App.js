// react function component export (rfce)
import React, { useState } from "react";
import "./index.css";
import { ToDoListForm } from "./ToDoListForm";
import { ToDoList } from "./ToDoList";
import { Footer } from "./Footer";
function App() {
  const [items, setItems] = useState([]);
  function handleDeleteItem(id) {
    setItems(() => items.filter((item) => item.id !== id));
  }
  function handlePackedItem(id) {
    setItems(() =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }
  return (
    <div className="app">
      <Logo />
      <ToDoListForm items={items} onAddItem={setItems} />
      <ToDoList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackedItem={handlePackedItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;

function Logo() {
  return <h1>✨To Do List 📃</h1>;
}
