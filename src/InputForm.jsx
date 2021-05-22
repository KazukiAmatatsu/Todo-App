import React, { useState } from "react";
import { useAlert } from "react-alert";
// import Select from "react-select";
// import { useForm } from "react-hook-form";

const options = [
  { value: "★☆☆", label: "★☆☆" },
  { value: "★★☆", label: "★★☆" },
  { value: "★★★", label: "★★★" },
];

const InputForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState("");
  const alert = useAlert();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value, priority);
      setValue("");
    } else {
      alert.error("エラーです"); //エラーメッセージを出力
      return false;
    }
  };
  const clearButton = (e) => {
    e.preventDefault();
    setValue("");
  };
  // useFormを使ってバリデーションしようとしたが出来ずに断念
  // const { register, handleSubmit, errors } = useForm();
  // const onSubmit = (e) => setValue(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="checkbox" />
      <input
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
      <select defaultValue={options[1].value} value={priority} onChange={(e) => setPriority(e.target.value)}>
        {options.map((option, index) => {
          // console.log(option.label);
          return (
            <option key={index} value={option.value} selected={option.value === "★★☆"}>
              {option.label}
            </option>
          );
        })}
      </select>
      {/* <Select options={options} defaultValue={options[1]} value={priority} onChange={(e) => setPriority(e.target.value)} /> */}
      <button onClick={handleSubmit}>追加</button>
      <button onClick={clearButton}>Clear</button>
    </form>
  );
};

export default InputForm;
