import React from "react";
import style from "./Input.module.css";

const Input = ({ label, type, name, value, setValue, handleChange }) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={style.input}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <p className={style.error}>Erro</p>
    </div>
  );
};

export default Input;
