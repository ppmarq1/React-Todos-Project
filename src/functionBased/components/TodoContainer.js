/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import About from '../pages/About';
import SinglePage from '../pages/SinglePage';
import NotMatch from '../pages/NotMatch';

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const Component = () => (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={addTodoItem} />
          <TodosList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
    </>
  );

  return (
    <div>
      <nav className="navBar">
        <Link to="/" className="active-link">
          Home
        </Link>
        <Link to="/about" className="active-link">
          About
        </Link>
      </nav>
      <div className="about">
        <Routes>
          <Route path="/" element={<Component />} />
          <Route path="about" element={<About />}>
            <Route path=":slug" element={<SinglePage />} />
          </Route>
          <Route path="*" element={<NotMatch />} />
        </Routes>
      </div>
    </div>
  );
};

export default TodoContainer;
