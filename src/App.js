import React, { useState } from "react";
import { nanoid } from "nanoid";
import TodoItem from "./Components/TodoItem";
import { CgAddR } from "react-icons/cg";

export default function App() {
  const [dragIndex, setdragIndex] = useState();
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: nanoid(),
      todo: "todo1",
      completed: false,
    },
    {
      id: nanoid(),
      todo: "todo2",
      completed: true,
    },
    {
      id: nanoid(),
      todo: "todo3",
      completed: false,
    },
  ]);

  const deleteTodo = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };

  const handleCompleted = (data) => {
    setTodoList((todos) =>
      todos.map((el) =>
        el.id === data.id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodoList((prevData) =>
      newTodo
        ? [
            ...prevData,
            {
              id: nanoid(),
              todo: newTodo,
              completed: false,
            },
          ]
        : [...prevData]
    );
    setNewTodo("");
  };

  function handleDragStart(index) {
    setdragIndex(index);
  }

  function handleDragEnter(e, index) {
    const newList = [...todoList];
    const item = newList[dragIndex];
    newList.splice(dragIndex, 1);
    newList.splice(index, 0, item);
    setdragIndex(index);
    setTodoList(newList);
  }
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDragLeave(e) {
    e.target.classList.add("hover:bg-stone-100");
  }
  function handleDrop(e) {
    e.target.classList.add("hover:bg-stone-100");
  }

  const todos = todoList.map((data, index) => (
    <TodoItem
      key={data.id}
      todoItem={data.todo}
      completed={data.completed}
      handleCompleted={() => handleCompleted(data)}
      deleteBtn={() => deleteTodo(data.id)}
      handleDragStart={() => handleDragStart(index)}
      handleDragOver={(e) => handleDragOver(e)}
      handleDragEnter={(e) => handleDragEnter(e, index)}
      handleDragLeave={(e) => handleDragLeave(e)}
      handleDrop={(e) => handleDrop(e)}
    />
  ));

  return (
    <main>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onInput={(e) => setNewTodo(e.target.value)}
          placeholder="New To Do"
        ></input>
        <button className="add-btn">
          <CgAddR />
        </button>
      </form>
      <ul>{todos}</ul>
    </main>
  );
}
