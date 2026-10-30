import styles from './Solution.module.css';
import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import SolutionRow from './SolutionRow';
import { SOLUTIONS } from '../../../data/solutions';

export default function Solution() {
  return (
    <section id="como-funciona" className={styles.section} aria-labelledby="solution-title">
      <Container>
        <SectionHeader
          id="solution-title"
          eyebrow="Ecosistema WinBin 360°"
          title="La Tríada Tecnológica que Convierte Cada Residuo en Puntos"
          description="Hardware inteligente en el patio, gamificación móvil en manos de los estudiantes y analítica gerencial en la rectoría."
        />
        <div className={styles.rows}>
          {SOLUTIONS.map((solution, index) => (
            <SolutionRow key={solution.id} {...solution} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
