import styles from './SectionHeader.module.css';
import { cx } from '../../../utils/classNames';

export default function SectionHeader({ eyebrow, title, description, align = 'center', inverted = false, id }) {
  return (
    <header className={cx(styles.header, styles[align], inverted && styles.inverted)}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 id={id} className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
