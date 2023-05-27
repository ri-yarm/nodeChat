import { useState } from 'react';
import styles from './Main.module.scss';
import { Link } from 'react-router-dom';

const FIELDS = {
  USERNAME: 'username',
  ROOM: 'room',
};

const Main = () => {
  const { USERNAME, ROOM } = FIELDS;
  const [values, setValues] = useState({
    [USERNAME]: '',
    [ROOM]: '',
  });
  const isDisabled = Object.values(values).some((value) => !value);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleLogin = (e) => {
    if (isDisabled) e.preventDefault();
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <h1 className={styles.main__header}>Вход</h1>
        <form action="#" className={styles.form}>
          <div className={styles.form__group}>
            <input
              type="text"
              name="username"
              value={values[USERNAME]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Имя"
              required
            />
            <input
              type="text"
              name="room"
              value={values[ROOM]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Туннель"
              required
            />
          </div>
          <Link
            to={`chat?name=${values[USERNAME]}&room=${values[ROOM]}`}
            className={styles.link}
            onClick={handleLogin}
          >
            <button type="submit" className={styles.button} disabled={isDisabled}>
              Вход
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;

