import { cx } from '../../../utils/classNames';

/** Icono de Material Symbols. Decorativo por defecto. */
export default function Icon({ name, className, label }) {
  return (
    <span
      className={cx('material-symbols-rounded', className)}
      aria-hidden={label ? undefined : 'true'}
      aria-label={label}
      role={label ? 'img' : undefined}
    >
      {name}
    </span>
  );
}
