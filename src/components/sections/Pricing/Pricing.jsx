import styles from './Pricing.module.css';
import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Icon from '../../common/Icon/Icon';
import PlanCard from './PlanCard';
import { PLANS, SUBSCRIPTION_INFO } from '../../../data/plans';

export default function Pricing() {
  return (
    <section id="precios-planes" className={styles.section} aria-labelledby="pricing-title">
      <Container>
        <SectionHeader
          id="pricing-title"
          eyebrow="Hardware-as-a-Service + Plataforma Escolar"
          title="Planes Diseñados para Presupuestos de Educación"
          description="Sin inversiones iniciales de compra de maquinaria. El modelo de suscripción anual incluye estaciones físicas, mantenimiento preventivo de repuestos y soporte pedagógico continuo."
        />
        <ul className={styles.grid}>
          {PLANS.map((plan) => (
            <li key={plan.id}>
              <PlanCard {...plan} />
            </li>
          ))}
        </ul>
        <aside className={styles.info}>
          <Icon name="shield" className={styles.infoIcon} />
          <div>
            <h3>{SUBSCRIPTION_INFO.title}</h3>
            <p>{SUBSCRIPTION_INFO.text}</p>
          </div>
        </aside>
      </Container>
    </section>
  );
}
