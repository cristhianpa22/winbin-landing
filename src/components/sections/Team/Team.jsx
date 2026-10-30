import styles from './Team.module.css';
import Container from '../../common/Container/Container';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import MemberCard from './MemberCard';
import { TEAM } from '../../../data/team';

export default function Team() {
  return (
    <section id="equipo" className={styles.section} aria-labelledby="team-title">
      <Container>
        <SectionHeader
          id="team-title"
          eyebrow="Talento Multidisciplinario"
          title="El Equipo Detrás del Ecosistema WinBin"Técnicos

        />
        <ul className={styles.grid}>
          {TEAM.map((member) => (
            <li key={member.id}>
              <MemberCard {...member} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
