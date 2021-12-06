import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/auth/useLogin";
import styles from "./Login.module.css";

export default function Login() {
  const { login, error, isPending } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "myFinance - Login";
  }, []);

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
    <>
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
        <div className={styles.other}>
          {isPending ? (
            <button className='btn' disabled>
              Loading...
            </button>
          ) : (
            <button className='btn'>Login</button>
          )}
          <Link to='/register'>Register?</Link>
        </div>
      </form>
    </>
  );
}
