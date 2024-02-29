import React from "react";

export function Footer({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>start adding items to your ToDo List</em>
      </p>
    );
  }
  const total = items.length;
  const completed = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((completed / total) * 100);
  return (
    <footer className="stats">
      <em>
        You Have {total} items in your list and {completed} are completed with{" "}
        {percentage} %
      </em>
    </footer>
  );
}
