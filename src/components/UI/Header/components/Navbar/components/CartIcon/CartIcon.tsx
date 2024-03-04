import { Routes } from '@constants';
import { getMaxAvailableAmount } from '@utils';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import styles from './CartIcon.module.scss';

type Props = {
  amount: number;
};

export const CartIcon = (props: Props) => {
  const { amount, isValid } = getMaxAvailableAmount(props.amount);

  return (
    <div className={styles.container}>
      <NavLink to={Routes.CART}>
        {isValid && <span className={styles.countProductsInCart}>{amount}</span>}
        <HiOutlineShoppingCart />
      </NavLink>
    </div>
  );
};
