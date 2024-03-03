import { ProductCard } from './components';
import { Products } from './Data';
import styles from './ProductList.module.scss';

type Props = {};

export const ProductList = (props: Props) => {
  const {} = props;

  return (
    <div className={styles.container}>
      {Products.map(({id, ...product}) => (
        <ProductCard key={id} {...product} />
      ))}
    </div>
  );
};
