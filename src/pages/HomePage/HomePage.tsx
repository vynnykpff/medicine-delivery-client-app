import { Container, ProductList, ShopsList } from '@components';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <Container className={styles.container}>
      <ShopsList />
      <ProductList />
    </Container>
  );
};
