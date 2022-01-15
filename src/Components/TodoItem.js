import React from "react";
import { CgTrash, CgArrowsV } from "react-icons/cg";

export default function TodoItem(props) {
  return (
    <li
      className={`flex justify-between gap-x-1.5 ${
        props.completed && "line-through bg-stone-100"
      } border-b border-black-600`}
    >
      <div className="flex items-center gap-x-1.5 w-full">
        <input
          type="checkbox"
          className="accent-amber-200"
          id={props.id}
          name={props.name}
          defaultChecked={props.completed}
          onChange={props.handleCompleted}
        ></input>
        <label htmlFor={props.todoItem}>{props.todoItem}</label>{" "}
      </div>

      <button className="text-xl" onClick={props.deleteBtn}>
        <CgTrash />
      </button>
      <button className="text-xl">
        <CgArrowsV />
      </button>
    </li>
  );
}
