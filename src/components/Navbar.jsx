import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

// styles
import styles from './Navbar.module.css';

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">ZenMoney</Link>
        </li>
        <li className={styles['navbar-link']}>
          <Link to="/signup">Signup</Link>
        </li>
        <li className={styles['navbar-link']}>
          <Link to="/login">Login</Link>
        </li>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </ul>
    </nav>
  );
}
