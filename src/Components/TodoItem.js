import React from "react";
import { GoTrashcan } from "react-icons/go";

export default function TodoItem(props) {
  return (
    <li
      className={`list-item ${
        props.completed && "line-through"
      }`}
      draggable
      onDragStart={props.handleDragStart}
      onDragEnter={props.handleDragEnter}
      onDragLeave={props.handleDragLeave}
      onDrop={props.handleDrop}
      onDragOver={props.handleDragOver}

    >
      <div className="check-box-conatiner">
        <input
          type="checkbox"
          className="accent-stone-300"
          defaultChecked={props.completed}
          onChange={props.handleCompleted}
        ></input>
        <label htmlFor={props.todoItem} className="cursor-move">{props.todoItem}</label>
      </div>

      <button className="trash-btn" onClick={props.deleteBtn}>
        <GoTrashcan />
      </button>
    </li>
  );
}
