import styles from './Technology.module.css';
import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import TechCard from './TechCard';
import ExecutionCycle from './ExecutionCycle';
import { TECH_STACK } from '../../../data/technology';

export default function Technology() {
  return (
    <section id="tecnologia" className={styles.section} aria-labelledby="tech-title">
      <Container>
        <SectionHeader
          id="tech-title"
          inverted
          eyebrow="Ingeniería de Grado Industrial"
          title="Arquitectura Robusta"
          description="Diseñado para soportar muchas interacciones por recreo escolar con latencias ultra-bajas y seguridad de datos blindada."
        />
        <ul className={styles.grid}>
          {TECH_STACK.map((item) => (
            <li key={item.id}>
              <TechCard {...item} />
            </li>
          ))}
        </ul>
        <ExecutionCycle />
      </Container>
    </section>
  );
}
