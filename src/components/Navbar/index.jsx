import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/auth/useAuthContext";
import useLogout from "../../hooks/auth/useLogout";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { authState } = useAuthContext();
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
            <li className={styles.register}>
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
            <li className={styles["display-name"]}>
              Hello,{" "}
              {authState.user.displayName.trim().split(" ")[0].slice(0, 8)}
            </li>
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
