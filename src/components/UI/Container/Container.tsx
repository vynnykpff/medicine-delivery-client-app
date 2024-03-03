import cn from 'classnames';
import { PropsWithChildren, ReactNode } from 'react';
import styles from './Container.module.scss';

type Props = {
  children: PropsWithChildren<ReactNode>;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
