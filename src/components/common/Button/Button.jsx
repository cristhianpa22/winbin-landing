import styles from './Button.module.css';
import Icon from '../Icon/Icon';
import { cx } from '../../../utils/classNames';


export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  className,
  children,
  ...rest
}) {
  const classes = cx(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.full,
    className,
  );
  const content = (
    <>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
