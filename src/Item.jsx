import React, { useState } from 'react'; // 予めimportすることで、React. を省略可
import styles from './styles/item.module.css';

const Item = (props) => {
  const [newValue, setNewValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.newText(props.todo.id, newValue);
    setNewValue('');
  };

  return (
    <li>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={() => {
            props.toggleChecked(props.todo.id);
          }}
        />{' '}
        <label>優先度：{props.todo.priority}</label>
        {/* <StyledText onClick={}>{props.todo.content}</StyledText> */}
        <input
          className={`${styles.contentText} ${
            props.todo.done ? styles.checkedText : ''
          }`}
          className="text"
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
