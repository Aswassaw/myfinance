import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import useLogout from "../../hooks/useLogout";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { authState } = useContext(AuthContext);
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to='/'>myFinance</Link>
        </li>
        {/* if user logged in */}
        {!authState.user && (
          <>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}

        {/* if user not logged in */}
        {authState.user && (
          <>
            <li>Hello, {authState.user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
