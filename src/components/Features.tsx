import styles from "../styles/features.module.css";

const items = [
  { title: "Швидко", desc: "Моментальний запуск кампаній" },
  { title: "Гнучко", desc: "Налаштування під будь-який продукт" },
  { title: "Ефективно", desc: "Підвищення конверсій" },
];

export default function Features() {
  return (
    <section data-aos="fade-up" className={styles.featuresSection}>
      <h2 className={styles.featuresTitle}>Наші переваги</h2>
      <div className={styles.featuresGrid}>
        {items.map((it) => (
          <div key={it.title} className={styles.featureItem}>
            <h3 className={styles.featureTitle}>{it.title}</h3>
            <p className={styles.featureDesc}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}