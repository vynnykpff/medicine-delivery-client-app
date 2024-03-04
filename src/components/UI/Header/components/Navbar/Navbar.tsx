import { Routes } from '@constants';
import cn from 'classnames';
import { FaRegUserCircle } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { CartIcon } from './components';
import { NavbarData } from './Data';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {NavbarData.map(({ label, value, id }) => (
          <NavLink className={cn(styles.listItem, pathname === value ? styles.activeListItem : '')} key={id} to={value}>
            {label}
          </NavLink>
        ))}
      </ul>
      <div className={styles.iconsWrapper}>
        <CartIcon amount={3} />
        <NavLink to={Routes.SIGN_UP}>
          <FaRegUserCircle />
        </NavLink>
      </div>
    </nav>
  );
};
