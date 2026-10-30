import styles from "./Download.module.css";
import Container from "../../common/Container/Container";
import Button from "../../common/Button/Button";
import Icon from "../../common/Icon/Icon";
import { SITE } from "../../../data/site";

export default function Download() {
  return (
    <section
      id="descargar-apk"
      className={styles.section}
      aria-labelledby="download-title"
    >
      <Container>
        <div className={styles.panel}>
          <div className={styles.copy}>
            <p className={styles.badge}>
              <Icon name="android" /> Android APK Oficial Versión{" "}
              {SITE.apkVersion} (Compilación Estable)
            </p>
            <h2 id="download-title" className={styles.title}>
              Descarga WinBin Estudiantil para Celulares y Tablets
            </h2>
            <p className={styles.lead}>
              Lleva tu progreso ecológico a todas partes. Consulta en tiempo
              real tus puntos acumulados en el Kiosco del colegio, personaliza a
              Binny con nuevos accesorios y desafía a otros salones en misiones
              de fin de semana.
            </p>

            <div className={styles.actions}>
              <Button
                href={SITE.apkUrl}
                download="WinBin.apk"
                variant="light"
                size="lg"
                icon="download"
              >
                Descargar WinBin APK
              </Button>
              <p className={styles.requirements}>
                <span>
                  <Icon name="android" /> Android 8.0 o superior
                </span>
                <span>
                  <Icon name="block" /> 100% Libre de Anuncios
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
