import styles from './Navbar.module.css';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import Icon from '../../common/Icon/Icon';
import useMobileMenu from '../../../hooks/useMobileMenu';
import useScrollSpy from '../../../hooks/useScrollSpy';
import { NAV_LINKS } from '../../../data/navigation';
import { SITE } from '../../../data/site';
import { cx } from '../../../utils/classNames';

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <a href="#" className={styles.brand} onClick={close} aria-label={`${SITE.name} - inicio`}>
          <img src={SITE.logo} alt="" width="36" height="36" className={styles.logo} />
          <span className={styles.brandText}>
            <strong>{SITE.name}</strong>
            <small>AI Ecosystem • </small>
          </span>
        </a>

        <button
          type="button"
          className={styles.toggle}
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>

        <nav
          id="menu-principal"
          className={cx(styles.nav, isOpen && styles.open)}
          aria-label="Principal"
        >
          <ul className={styles.links}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className={cx(styles.link, activeId === href.slice(1) && styles.active)}
                  aria-current={activeId === href.slice(1) ? 'true' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#descargar-apk" icon="android" onClick={close} className={styles.cta}>
            Descargar APK 
          </Button>
        </nav>
      </Container>
    </header>
  );
}
