import styles from './Problem.module.css';
import Icon from '../../common/Icon/Icon';

export default function ProblemCard({ icon, tag, title, text, metricIcon, metric }) {
  return (
    <article className={styles.card}>
      <span className={styles.iconBox}><Icon name={icon} /></span>
      <p className={styles.tag}>{tag}</p>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <p className={styles.metric}><Icon name={metricIcon} /> {metric}</p>
    </article>
  );
}
