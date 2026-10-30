import styles from './Footer.module.css';
import Container from '../../common/Container/Container';
import Icon from '../../common/Icon/Icon';
import FooterLinks from './FooterLinks';
import {
  FOOTER_ECOSYSTEM,
  FOOTER_INSTITUTIONAL,
  FOOTER_LEGAL,
} from '../../../data/navigation';
import { SITE } from '../../../data/site';

export default function Footer() {
  const { contact } = SITE;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.about}>
            <div className={styles.brand}>
              <img src={SITE.logo} alt="" width="36" height="36" className={styles.logo} />
              <strong>{SITE.name}</strong>
            </div>
            <p>
              Ecosistema de reciclaje inteligente y gamificado para instituciones educativas.
              Transformamos la separación de residuos en hábitos activos y medibles para la
              comunidad escolar.
            </p>
            <p className={styles.badge}>
              <Icon name="verified" /> Compromiso Escuelas Cero Residuos 2030
            </p>
          </div>

          <FooterLinks title="Ecosistema" links={FOOTER_ECOSYSTEM} />
          <FooterLinks title="Institucional" links={FOOTER_INSTITUTIONAL} />

          <div id="agendar-demo">
            <h3 className={styles.heading}>Contacto Escolar</h3>
            <ul className={styles.contact}>
              <li><Icon name="mail" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><Icon name="call" /><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></li>
              <li><Icon name="location_on" /><span>{contact.address}</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} WinBin Educación Sostenible. Todos los derechos reservados.</p>
          <ul className={styles.legal}>
            {FOOTER_LEGAL.map(({ label, href }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
