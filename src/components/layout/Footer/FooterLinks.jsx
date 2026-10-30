import styles from './Footer.module.css';

export default function FooterLinks({ title, links }) {
  return (
    <nav aria-label={title}>
      <h3 className={styles.heading}>{title}</h3>
      <ul className={styles.list}>
        {links.map(({ label, href }) => (
          <li key={href}><a href={href}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
