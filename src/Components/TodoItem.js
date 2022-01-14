import React from "react";
import { CgTrash } from "react-icons/cg";

export default function TodoItem(props) {
  return (
    <li className="flex justify-between">
      <div className="flex items-center gap-x-1.5 w-full">
        <input
          type="checkbox"
          className="checked:bg-gray-300"
          id={props.id}
          name={props.name}
          defaultChecked={props.completed}
          onChange={props.handleCompleted}
        ></input>
        <label
          className={`${props.completed && "line-through"} w-full border-b border-black-600`}
          htmlFor={props.todoItem}
        >
          {props.todoItem}
        </label>{" "}
      </div>

      <button
        className="text-xl"
        type="button"
        onClick={props.deleteBtn}
      >
        <CgTrash />
      </button>
    </li>
  );
}
