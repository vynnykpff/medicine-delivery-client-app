import styles from './TextContent.module.scss';

export const TextContent = () => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.text}>Oops!</p>
        <p>Error 404</p>
      </div>
      <p>Page not found</p>
    </div>
  );
};
