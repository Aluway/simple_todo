import React, { useState, useEffect } from "react";

import { ToDoForm } from "../Components/ToDoForm";
import { ToDoList } from "../Components/ToDoList";
import { IToDo } from "../Interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<IToDo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as IToDo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newToDo: IToDo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newToDo, ...todos])
    setTodos((prev) => [newToDo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm("Are you sure you want to delete?");
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  return (
    <React.Fragment>
      <ToDoForm onAdd={addHandler} />
      <ToDoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
};
