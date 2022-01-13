import React, { useState } from "react";
import { nanoid } from "nanoid";
import TodoItem from "./Components/TodoItem";
import { CgAddR } from "react-icons/cg";


export default function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todo: "todo1",
      completed: false,
    },
    {
      id: 2,
      todo: "todo2",
      completed: true,
    },
    {
      id: 3,
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
  console.log(todoList);
  const todos = todoList.map((data) => (
    <TodoItem
      key={data.id}
      id="completed"
      name="completed"
      todoItem={data.todo}
      completed={data.completed}
      handleCompleted={() => handleCompleted(data)}
      deleteBtn={() => deleteTodo(data.id)}
    />
  ));

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
  return (
    <div className="flex justify-center pt-5">
      <section>
        <form onSubmit={addTodo}>
          <input
            className="mr-2"
            type="text"
            value={newTodo}
            onInput={(e) => setNewTodo(e.target.value)}
            placeholder="New ToDo"
          ></input>
          <button>
          <CgAddR />
          </button>
        </form>

        <ul>{todos}</ul>
      </section>
    </div>
  );
}

