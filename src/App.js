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
    setdragIndex(index)
    
    
  }
  
  
  function handleDragEnter(e, index) {
    const newList = [...todoList]
    const item = newList[dragIndex]
    newList.splice(dragIndex, 1)
    newList.splice(index, 0, item)
    setdragIndex(index)
    setTodoList(newList)
  }

  const todos = todoList.map((data, index) => (
    <TodoItem
      key={data.id}
      todoItem={data.todo}
      completed={data.completed}
      handleCompleted={() => handleCompleted(data)}
      deleteBtn={() => deleteTodo(data.id)}
      handleDragStart={() => handleDragStart(index)}
      handleDragOver={(e) => e.preventDefault}
      handleDragEnter={(e) => handleDragEnter(e, index)}
    />
  ));

  return (
    <div className="w-1/3 m-auto mt-5 bg-amber-50 drop-shadow-lg">
      <form
        className="flex justify-center mb-2 bg-transparent border-b border-slate-600"
        onSubmit={addTodo}
      >
        <input
          className="w-full mr-1 bg-transparent focus:outline-none"
          type="text"
          value={newTodo}
          onInput={(e) => setNewTodo(e.target.value)}
          placeholder="New To Do"
        ></input>
        <button className="text-xl">
          <CgAddR />
        </button>
      </form>
      <ul className="bg-amber-50">{todos}</ul>
    </div>
  );
}
