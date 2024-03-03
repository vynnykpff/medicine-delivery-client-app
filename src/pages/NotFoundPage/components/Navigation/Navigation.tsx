import { Routes } from '@constants';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <Link to={Routes.HOME}>
      <Button className={styles.button} type="primary">
        Back Home
      </Button>
    </Link>
  );
};
