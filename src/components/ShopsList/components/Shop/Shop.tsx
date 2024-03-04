import { NavbarMenu } from '@types';
import { Button } from 'antd';
import styles from './Shop.module.scss';

export const Shop = (props: Omit<NavbarMenu, 'id'>) => {
  const { label } = props;

  return (
    <Button className={styles.button} type="primary">
      {label}
    </Button>
  );
};
