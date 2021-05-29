import React, { useState } from 'react'; // 予めimportすることで、React. を省略可
import styles from './styles/item.module.css';

const Item = (props) => {
  const [newValue, setNewValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.newText(props.todo.id, newValue);
    setNewValue('');
    setIsOpen(!isOpen);
  };

  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="button"
        checked={props.todo.done}
        // onChange={() => {
        //   props.toggleChecked(props.todo.id);
        // }}
      />
      <label
        htmlFor="button"
        className={styles.checkboxStyle}
        onClick={() => {
          props.toggleChecked(props.todo.id);
        }}
      >
        <form onSubmit={handleSubmit} className={styles.content}>
          <span className={styles.priority}>{props.todo.priority}</span>
          {isOpen ? (
            <input
              className={styles.contentText}
              type="text"
              placeholder={props.todo.content}
              value={newValue}
              onChange={(e) => {
                setNewValue(e.target.value);
              }}
            />
          ) : (
            <span>{props.todo.content}</span>
          )}
        </form>
      </label>
      <div>
        {isOpen ? (
          <div onClick={props.removeTodo} className={styles.deleteButton}>
            ✗
          </div>
        ) : (
          <></>
        )}{' '}
        <div onClick={() => setIsOpen(!isOpen)} className={styles.menuIcon}>
          i
        </div>
      </div>
    </li>
  );
};

export default Item;
