import React from "react";
import { GoGrabber, GoTrashcan } from "react-icons/go";

export default function TodoItem(props) {
  return (
    <li
      className={`flex justify-between gap-x-1.5 ${
        props.completed && "line-through"
      } border-b border-black-600 cursor-move hover:bg-stone-100`}
      draggable
      onDragStart={props.handleDragStart}
      onDragEnter={props.handleDragEnter}
      onDragLeave={props.handleDragLeave}
      onDrop={props.handleDrop}
      onDragOver={props.handleDragOver}

    >
      <div className="flex items-center gap-x-1.5 w-full">
        <input
          type="checkbox"
          className="accent-stone-300"
          defaultChecked={props.completed}
          onChange={props.handleCompleted}
        ></input>
        <label htmlFor={props.todoItem} className="cursor-move">{props.todoItem}</label>
      </div>

      <button className="text-xl active:scale-95" onClick={props.deleteBtn}>
        <GoTrashcan />
      </button>
    </li>
  );
}
