import React, { useState } from 'react';
import shortid from 'shortid';
import InputForm from './InputForm';
import ItemList from './ItemList';
import MonHun from './MonHun';
import styled from 'styled-components';

const App = () => {
  // JavaScript書く場所
  const [todos, setTodos] = useState([
    // useStateの()の中身は初期値を設定する
    { id: '01', content: 'バルファルク狩る', done: false, priority: '★★☆' },
    { id: '02', content: 'ヌシ・ジンオウガ狩る', done: false, priority: '★★★' },
    { id: '03', content: 'TodoApp完成', done: false, priority: '★☆☆' },
    { id: '04', content: 'chatApp', done: false, priority: '★★☆' },
  ]);

  const add = (e) => {
    e.preventDefault(); // preventDefaultでブラウザの標準の挙動をキャンセルする
    setTodos([
      ...todos, // スプレット構文で初期値を持ってきてる
      {
        id: shortid.generate(),
        content: 'モンハンやる',
        done: false,
        priority: '★★★',
      }, // ここでtodosに追加する部分を書く
    ]);
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
    // var pushTodo = '';
    // for (var i = 0; i < todos.length; i++) {
    //   if (todos[i].done === true) {
    //     pushTodo = todos[i];
    //   }
    // }
    // これだと配列で取ってきてしまう
    // const pushTodo = todos.filter((todo) => {
    //   if (todo.done === true) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    setTodos([...newTodos]);
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
      <StyledTitle>
        <h1>ToDo</h1>
        <h1>{todos.length}</h1>
      </StyledTitle>
      <MonHun add={add} />
      <ItemList
        todos={todos}
        removeTodo={removeTodo}
        toggleChecked={toggleChecked}
        addTodo={addTodo}
        newText={newText}
      />
      <InputForm addTodo={addTodo} />
    </div>
  );
};

export default App;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #00ff00;
  padding: 0 30px;
`;
