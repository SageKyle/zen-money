// styles
import { useAuthContext } from '../../hooks/useAuthContext';
import styles from './Home.module.css';

// components
import { TransactionForm } from './TransactionForm';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.content}>content list</div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
