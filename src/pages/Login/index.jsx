import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormData((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={styles["login-form"]} onSubmit={onSubmitHandler}>
      <h2>Login</h2>
      <hr />
      {/* Email */}
      <label>
        <span>Email:</span>
        <input
          type='email'
          name='email'
          onChange={onChangeHandler}
          value={formData.email}
        />
      </label>
      {/* Password */}
      <label>
        <span>Password:</span>
        <input
          type='password'
          name='password'
          onChange={onChangeHandler}
          value={formData.password}
        />
      </label>
      <button className='btn'>Login</button>
    </form>
  );
}
