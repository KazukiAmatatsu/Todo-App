import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import styles from './styles/inputForm.module.css';
// import Select from 'react-select';
// import { useForm } from "react-hook-form";

const options = [
  { value: '!', label: '!' },
  { value: '!!', label: '!!' },
  { value: '!!!', label: '!!!' },
];

const InputForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [priority, setPriority] = useState('');
  const alert = useAlert();
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value, priority);
      setValue('');
    } else {
      alert.error('エラーです'); //エラーメッセージを出力
      return false;
    }
  };
  // useFormを使ってバリデーションしようとしたが出来ずに断念
  // const { register, handleSubmit, errors } = useForm();
  // const onSubmit = (e) => setValue(e.target.value);

  return (
    <form onSubmit={handleSubmit} className={styles.InputForm}>
      <input className={styles.checkbox} type="checkbox" id="button" />
      <label htmlFor="button" className={styles.checkboxStyle}>
        {isOpen ? (
          <select
            defaultValue={options.value}
            // value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {options.map((option, index) => {
              // console.log(option.label);
              return (
                <option
                  key={index}
                  value={option.value}
                  defaultValue={option.value === '!'}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
        ) : (
          <></>
        )}
        <input
          className={styles.textArea}
          type="text"
          name="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          // ref={register({
          //   required: true,
          //   minLength: {
          //     value: 1,
          //     message: "エラーです",
          //   },
          // })}
        />
      </label>
      {/* <Select
        options={options}
        defaultValue={options[1].value}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      /> */}
      <div onClick={() => setIsOpen(!isOpen)} className={styles.menuIcon}>
        i
      </div>
    </form>
  );
};

export default InputForm;
