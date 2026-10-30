import styles from './Technology.module.css';
import Icon from '../../common/Icon/Icon';
import { EXECUTION_STEPS } from '../../../data/technology';

export default function ExecutionCycle() {
  return (
    <div className={styles.cycle}>
      <div className={styles.cycleIntro}>
        <Icon name="sync_alt" className={styles.cycleIcon} />
        <p>
          <strong>Ciclo de Ejecución en 6 Segundos</strong>
          Tiempo promedio que tarda en identificar un objeto.

        </p>
      </div>
      <ol className={styles.steps}>
        {EXECUTION_STEPS.map((step, index) => (
          <li key={step}>
            <span>{index + 1}. {step}</span>
            {index < EXECUTION_STEPS.length - 1 && (
              <Icon name="arrow_forward" className={styles.arrow} />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
