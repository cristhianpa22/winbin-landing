import styles from './Solution.module.css';
import Icon from '../../common/Icon/Icon';
import SolutionVisual from './SolutionVisual';
import { cx } from '../../../utils/classNames';

export default function SolutionRow({ visual, tag, icon, title, text, features, reversed }) {
  return (
    <article className={cx(styles.row, reversed && styles.reversed)}>
      <div className={styles.copy}>
        <p className={styles.tag}><Icon name={icon} /> {tag}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature}>
              <Icon name="check_circle" /> {feature}
            </li>
          ))}
        </ul>
      </div>
      <SolutionVisual type={visual} />
    </article>
  );
}
