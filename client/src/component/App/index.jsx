import AppRoutes from './AppRoutes';
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.root__container}>
      <AppRoutes />
    </div>
  );
};

export default App;

