import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

// styles
import styles from './Navbar.module.css';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  // display notifications
  const notify = (msg) => toast.success(msg);

  const handleLogout = () => {
    logout();
    notify('Logout successful');
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">ZenMoney</Link>
        </li>

        {!user && (
          <>
            <li className={styles['navbar-link']}>
              <Link to="/signup">Signup</Link>
            </li>
            <li className={styles['navbar-link']}>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
              <Toaster />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
