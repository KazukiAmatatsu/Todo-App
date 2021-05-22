import React, { useState } from 'react';
import shortid from 'shortid';
// import InputForm from "./InputForm";
import ItemList from './ItemList';
import MonHun from './MonHun';

const App = () => {
  // JavaScript書く場所
  const [todos, setTodos] = useState([
    // useStateの()の中身は初期値を設定する
    { id: '01', content: 'HRを上げる', done: false, priority: '★★☆' },
    { id: '02', content: '護石厳選', done: false, priority: '★★★' },
    { id: '03', content: 'Reactの学習', done: false, priority: '★☆☆' },
    { id: '04', content: 'プログラミングやる', done: false, priority: '★★☆' },
  ]);

  const add = (e) => {
    e.preventDefault(); // preventDefaultでブラウザの標準の挙動をキャンセルする
    setTodos([
      ...todos, // スプレット構文で初期値を持ってきてる
      { id: shortid.generate(), content: 'モンハンやる', done: false, priority: '★★★' }, // ここでtodosに追加する部分を書く
    ]);
    // todos.push({ content: "モンハンやる" });
    // console.log(todos);
  };

  const addTodo = (value, priority) => {
    setTodos([
      ...todos,
      { id: shortid.generate(), content: value, done: false, priority }, // ここでtodosに追加する部分を書く
    ]);
  };

  const toggleChecked = (id) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.done = !todo.done;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const newText = (id, newValue) => {
    // console.log(newValue);
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.content = newValue;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      if (id === todo.id) {
        return false;
      } else {
        return true;
      }
    });
    setTodos(newTodos);
  };

  return (
    // JSX...jsを使う場合は{}で囲う
    <div className="App">
      <h1>ToDo</h1>
      <MonHun add={add} />
      {/* <InputForm todos={todos} setTodos={setTodos} /> */}
      <ItemList todos={todos} removeTodo={removeTodo} toggleChecked={toggleChecked} addTodo={addTodo} newText={newText} />
      {/* <InputForm addTodo={addTodo} /> */}
    </div>
  );
};

export default App;
