import React from "react";
import { CgTrash } from "react-icons/cg";

export default function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        id={props.id}
        name={props.name}
        defaultChecked={props.completed}
        onChange={props.handleCompleted}
      ></input>
      &nbsp;
      <label
        className={`${props.completed && "line-through"}`}
        htmlFor={props.todoItem}
      >
        {props.todoItem}
      </label>{" "}
      &nbsp;
      <button type="button" onClick={props.deleteBtn}>
        <CgTrash />
      </button>
    </li>
  );
}
