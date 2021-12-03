import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import useLogout from "../../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to='/'>myFinance</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <button className='btn' onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
