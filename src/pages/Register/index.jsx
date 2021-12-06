import React, { useEffect, useState } from "react";
import styles from "./Register.module.css";
import useRegister from "../../hooks/auth/useRegister";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, error, isPending } = useRegister();
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  useEffect(() => {
    document.title = "myFinance - Register";
  }, []);

  const onChangeHandler = (e) => {
    setFormData((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <form className={styles["register-form"]} onSubmit={onSubmitHandler}>
      <h2>Register</h2>
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
      {/* displayName */}
      <label>
        <span>Display Name:</span>
        <input
          type='text'
          name='displayName'
          onChange={onChangeHandler}
          value={formData.displayName}
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
      {/* submit button */}
      <div className={styles.other}>
        {isPending ? (
          <button className='btn' disabled>
            Loading...
          </button>
        ) : (
          <button className='btn'>Register</button>
        )}
        <Link to='/login'>Login?</Link>
      </div>
    </form>
  );
}
