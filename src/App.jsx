import React, { useState } from 'react';
import shortid from 'shortid';
import InputForm from './InputForm';
import ItemList from './ItemList';
import styled from 'styled-components';

const App = () => {
  // JavaScript書く場所
  const [todos, setTodos] = useState([
    // useStateの()の中身は初期値を設定する
    {
      id: '01',
      content: '奇しき赫耀のバルファルク',
      done: false,
      priority: '!!!',
    },
    { id: '02', content: 'ヌシ・ジンオウガ', done: false, priority: '!!!' },
    {
      id: '03',
      content: 'クリックすると入力フォームを表示',
      done: false,
      priority: '!',
    },
    { id: '04', content: '致命的なバグの修正', done: false, priority: '!!' },
  ]);

  const addTodo = (value, priority) => {
    setTodos([
      ...todos,
      { id: shortid.generate(), content: value, done: false, priority }, // ここでtodosに追加する部分を書く
    ]);
  };

  const toggleChecked = (id) => {
    console.log(id);
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.done = !todo.done;
        return todo;
      } else {
        return todo;
      }
    });
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
      <StyledItemList>
        <ItemList
          todos={todos}
          removeTodo={removeTodo}
          toggleChecked={toggleChecked}
          addTodo={addTodo}
          newText={newText}
        />
      </StyledItemList>
      <StyledInputForm>
        <InputForm addTodo={addTodo} />
      </StyledInputForm>
    </div>
  );
};

export default App;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  color: #00ff00;
  padding: 0 10px;
  margin: 0;
  & h1 {
    margin: 0;
  }
`;

const StyledItemList = styled.div`
  padding: 0 10px;
  margin: 0;
`;

const StyledInputForm = styled.div`
  padding: 0 10px;
  margin: 0;
`;
