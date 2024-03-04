import { Shop } from '@/components/ShopsList/components';
import { Shops } from '@/components/ShopsList/Data';
import styles from './ShopsList.module.scss';

export const ShopsList = () => {
  return (
    <aside className={styles.container}>
      <p className={styles.title}>Shops:</p>
      <ul className={styles.shopsList}>
        {Shops.map(({ id, ...shop }) => (
          <Shop key={id} {...shop} />
        ))}
      </ul>
    </aside>
  );
};
