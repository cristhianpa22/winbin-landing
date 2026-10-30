import styles from './Technology.module.css';
import Icon from '../../common/Icon/Icon';

export default function TechCard({ icon, title, stack, text, badges }) {
  return (
    <article className={styles.card}>
      <span className={styles.iconBox}><Icon name={icon} /></span>
      <div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.stack}>{stack}</p>
      </div>
      <p className={styles.text}>{text}</p>

    </article>
  );
}
