import styles from "../styles/reviews.module.css";

export default function Reviews() {
  const revs = [
    { name: "Ольга", text: "Чудове рішення, допомогло з продажами." },
    { name: "Іван", text: "Швидко налаштували, профі." },
  ];

  return (
    <section className={styles.reviewsSection} data-aos="fade-up">
      <h2 className={styles.reviewsTitle}>Відгуки</h2>
      <div className={styles.reviewsList}>
        {revs.map((r) => (
          <blockquote key={r.name} className={styles.reviewItem}>
            <p className={styles.reviewText}>"{r.text}"</p>
            <footer className={styles.reviewFooter}>— {r.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
