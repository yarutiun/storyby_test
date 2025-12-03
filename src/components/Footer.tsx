import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} data-aos="fade-up">
      <div className={styles.footerContainer}>
        <div className={styles.footerItem}>
          Контакти: info@company.com | +380 00 000 0000
        </div>
        <div className={styles.footerItem}>
          © {new Date().getFullYear()} Company
        </div>
      </div>
    </footer>
  );
}
