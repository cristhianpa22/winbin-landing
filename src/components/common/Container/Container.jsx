import styles from './Container.module.css';
import { cx } from '../../../utils/classNames';

export default function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cx(styles.container, className)} {...rest}>
      {children}
    </Tag>
  );
}
