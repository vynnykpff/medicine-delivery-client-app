import { Navbar } from '@/components/UI/Header/components/Navbar';
import { Container } from '@components';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};
