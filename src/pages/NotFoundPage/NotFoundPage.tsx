import { Image } from 'antd';
import { Navigation, TextContent } from './components';
import styles from './NotFoundPage.module.scss';

const NOT_FOUND_IMAGE = 'https://www.eliftech.com/images/404.png';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.notFoundPageContainer}>
        <Image preview={false} width={300} src={NOT_FOUND_IMAGE} />
        <div className={styles.contentWrapper}>
          <TextContent />
          <Navigation />
        </div>
      </div>
    </div>
  );
};
