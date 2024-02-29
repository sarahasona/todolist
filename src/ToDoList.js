import React from "react";
import { Item } from "./Item";

export function ToDoList({ items, onDeleteItem, onPackedItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onPackedItem={onPackedItem}
            />
          );
        })}
      </ul>
    </div>
  );
}
