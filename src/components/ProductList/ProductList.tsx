import { ProductCard } from './components';
import { Products } from './Data';
import styles from './ProductList.module.scss';

export const ProductList = () => {
  return (
    <div className={styles.container}>
      {Products.map(({ id, ...product }) => (
        <ProductCard key={id} {...product} />
      ))}
    </div>
  );
};
