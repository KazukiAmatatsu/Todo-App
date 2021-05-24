import React, { useState } from 'react'; // 予めimportすることで、React. を省略可
import styled from 'styled-components';

const Item = (props) => {
  const [newValue, setNewValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.newText(props.todo.id, newValue);
    setNewValue('');
  };
  // const [isDone, setIsDone] = useState(false);
  // const handleDelete = () => {
  //   removeTodo(id);
  // };

  return (
    <li className={StyledItem}>
      <form onSubmit={handleSubmit}>
        <input
          className={StyleSheet.checkbox}
          type="checkbox"
          // checked={props.todo.id}
          onChange={() => {
            props.toggleChecked(props.todo.id);
          }}
        />
        {/* <span style={`{ textDecoration: ${todo.done} ? "line-through" : "none" }`}> */}
        <span>優先度：{props.todo.priority}</span>
        <input
          type="text"
          placeholder={props.todo.content}
          value={newValue}
          onChange={(e) => {
            setNewValue(e.target.value);
          }}
        />
      </form>
      <button onClick={props.removeTodo}>削除</button>
    </li>
  );
};

export default Item;

const StyledItem = styled.li`
  color: green;
`;
