import styles from './Team.module.css';
import Icon from '../../common/Icon/Icon';

export default function MemberCard({ icon, name, role, bio }) {
  return (
    <article className={styles.card}>
      <span className={styles.avatar}><Icon name={icon} /></span>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.bio}>{bio}</p>
    </article>
  );
}
