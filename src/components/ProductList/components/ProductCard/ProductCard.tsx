import { ProductData } from '@types';
import { Button, Image } from 'antd';
import styles from './ProductCard.module.scss';

export const ProductCard = (props: Omit<ProductData, 'id'>) => {
  const { price, img, title } = props;

  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  return (
    <div className={styles.container}>
      <Image width={230} preview={false} src={img} />
      <div className={styles.cardDescription}>
        <p>{title}</p>
        <p>{formattedPrice}</p>
      </div>
      <Button className={styles.button}>Add To Cart</Button>
    </div>
  );
};
