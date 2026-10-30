import styles from './Hero.module.css';
import Icon from '../../common/Icon/Icon';
import { SITE } from '../../../data/site';

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <img
        className={styles.image}
        src={SITE.heroImage}
        alt="Estación inteligente escolar WinBin con estudiantes felices"
        width="640"
        height="560"
      />
      <p className={`${styles.float} ${styles.points}`}>
        <Icon name="stars" /> +50 PTS! Cartón Detectado
      </p>
  
      <p className={`${styles.float} ${styles.camera}`}>
        <span><Icon name="visibility" /> Cámara IA Groq</span>
        <strong>Botella PET: 99.4% Confianza</strong>
      </p>

    </div>
  );
}
