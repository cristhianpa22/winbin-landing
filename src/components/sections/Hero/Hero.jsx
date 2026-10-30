import styles from './Hero.module.css';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import Icon from '../../common/Icon/Icon';
import HeroVisual from './HeroVisual';
import { HERO_HIGHLIGHTS } from '../../../data/hero';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      
      <Container className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.badge}>
            <Icon name="smart_toy" />
            IA + Visión Computacional Escolar Lanzamiento
          </p>
          <h1 id="hero-title" className={styles.title}>
            Transformamos el Reciclaje Escolar en un Juego Divertido con IA.
          </h1>
          <p className={styles.lead}>
            WinBin premia a los estudiantes mientras clasifican plástico y cartón en tiempo real
            mediante visión computacional, rankings escolares por salón.
          </p>
          <Button href="#descargar-apk" icon="android" size="lg" className={styles.cta}>
            Descargar APK Móvil Gratis
          </Button>
          <ul className={styles.highlights}>
            {HERO_HIGHLIGHTS.map(({ icon, text }) => (
              <li key={text}>
                <Icon name={icon} /> {text}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
