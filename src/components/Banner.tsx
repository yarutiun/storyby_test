import { useRef } from "react";
import useInView from "../hooks/useInView";
import { fbTrack } from "../lib/fbPixel";
import styles from "../styles/bannerStyles.module.css";

export default function Banner() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const inView = useInView(titleRef as React.RefObject<Element>, {
    threshold: 0.2,
  });

  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <h1
          ref={titleRef}
          className={`${styles.bannerTitle} ${inView ? styles.inView : ""}`}
        >
          Рішення для вашого бізнесу
        </h1>
        <p className={styles.bannerText}>
          Короткий опис — як ми допомагаємо збільшити продажі
        </p>
        <button
          onClick={() => fbTrack("Lead", { landing: "landing-1" })}
          className={styles.bannerButton}
        >
          Залишити запит
        </button>
      </div>
    </section>
  );
}
