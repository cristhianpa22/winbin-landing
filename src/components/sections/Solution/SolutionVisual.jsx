import styles from './SolutionVisual.module.css';
import kioskImg from '../../../assets/Solution/maquina.png';
import phoneImg from '../../../assets/Solution/app.jpg';
import dashboardImg from '../../../assets/Solution/dash.png';


function KioskVisual() {
  return (
    <div className={styles.monitor}>
      <img
        className={styles.screenshot}
        src={kioskImg}
        alt="Pantalla del kiosco WinBin identificando un residuo"
        loading="lazy"
      />
    </div>
  );
}

function AppVisual() {
  return (
    <div className={styles.phone}>
      <img
        className={styles.phoneScreen}
        src={phoneImg}
        alt="Pantalla de ranking de la app WinBin"
        loading="lazy"
      />
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className={styles.monitor}>
      <img
        className={styles.screenshot}
        src={dashboardImg}
        alt="Pantalla de dashboard de WinBin"
        loading="lazy"
      />
    </div>
  );
}

const VISUALS = { kiosk: KioskVisual, app: AppVisual, dashboard: DashboardVisual };

export default function SolutionVisual({ type }) {
  const Visual = VISUALS[type];
  return (
    <div className={styles.stage}>
      <Visual />
    </div>
  );
}
