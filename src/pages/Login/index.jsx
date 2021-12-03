import React, { useState } from "react";
import styles from "./Login.module.css";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const { login, error, isPending } = useLogin();
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
    login(formData);
  };

  return (
    <form className={styles["login-form"]} onSubmit={onSubmitHandler}>
      <h2>Login</h2>
      <hr />
      {error && <p>{error}</p>}
      {/* email */}
      <label>
        <span>Email:</span>
        <input
          type='email'
          name='email'
          onChange={onChangeHandler}
          value={formData.email}
          required
        />
      </label>
      {/* password */}
      <label>
        <span>Password:</span>
        <input
          type='password'
          name='password'
          onChange={onChangeHandler}
          value={formData.password}
          required
        />
      </label>
      {isPending ? (
        <button className='btn' disabled>
          Loading...
        </button>
      ) : (
        <button className='btn'>Login</button>
      )}
    </form>
  );
}
