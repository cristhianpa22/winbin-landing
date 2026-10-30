import styles from './Problem.module.css';
import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import ProblemCard from './ProblemCard';
import { PROBLEMS } from '../../../data/problems';

export default function Problem() {
  return (
    <section id="problema-solucion" className={styles.section} aria-labelledby="problem-title">
      <Container>
        <SectionHeader
          id="problem-title"
          eyebrow="Diagnóstico en Aulas y Patios"
          title="¿Por qué las canecas tradicionales fallan estrepitosamente en los colegios?"
          description="Los puntos limpios convencionales dependen de la buena voluntad pasiva en recreos caóticos. El resultado en el 90% de los planteles es el mismo: frustración y basura revuelta."
        />
        <ul className={styles.grid}>
          {PROBLEMS.map((problem) => (
            <li key={problem.id}>
              <ProblemCard {...problem} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
