import { ProductData } from '@types';
import { Button, Image } from 'antd';
import styles from './ProductCard.module.scss';

export const ProductCard = (props: Omit<ProductData, 'id'>) => {
  const { price, img, title } = props;

  return (
    <div className={styles.container}>
      <Image width={210} preview={false} src={img} />
      <div className={styles.cardDescription}>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <Button>add To Cart</Button>
    </div>
  );
};
