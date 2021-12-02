import React, { useState } from "react";
import styles from "./Register.module.css";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
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
    <form className={styles["register-form"]} onSubmit={onSubmitHandler}>
      <h2>Register</h2>
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
      {/* Display Name */}
      <label>
        <span>Display Name:</span>
        <input
          type='text'
          name='displayName'
          onChange={onChangeHandler}
          value={formData.displayName}
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
