import styles from './Pricing.module.css';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';
import { cx } from '../../../utils/classNames';

export default function PlanCard({
  tag, icon, name, description, price, unit, note, features, cta, featured, badge,
}) {
  return (
    <article className={cx(styles.card, featured && styles.featured)}>
      {badge && (
        <p className={styles.ribbon}>
          <Icon name="star" /> {badge}
        </p>
      )}
      <p className={styles.tag}><Icon name={icon} /> {tag}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>

      <p className={styles.price}>
        <strong>{price}</strong> <span>{unit}</span>
      </p>
      <p className={styles.note}>{note}</p>

      <ul className={styles.features}>
        {features.map(({ text, bold, included }) => (
          <li key={text} className={cx(!included && styles.excluded)}>
            <Icon name={included ? 'check_circle' : 'cancel'} />
            <span>{bold ? <strong>{text}</strong> : text}</span>
          </li>
        ))}
      </ul>

      <Button
        href={cta.href}
        variant={featured ? 'light' : 'secondary'}
        fullWidth
        className={styles.cta}
      >
        {cta.label}
      </Button>
    </article>
  );
}
