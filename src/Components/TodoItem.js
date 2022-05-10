import React from "react";

export default function TodoItem({
  todoItem,
  completed,
  handleCompleted,
  handleDragStart,
  handleDragEnter,
  handleDragLeave,
  handleDrop,
  handleDragOver,
  deleteBtn,
}) {
  return (
    <li
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className={`item-container ${completed && "line-through"}`}>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={handleCompleted}
        ></input>
        <label htmlFor={todoItem}>{todoItem}</label>
      </div>

      <button onClick={deleteBtn}>
        <i className="ri-delete-bin-2-line"></i>
      </button>
    </li>
  );
}
