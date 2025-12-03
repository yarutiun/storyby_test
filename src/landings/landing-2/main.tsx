import { createRoot } from "react-dom/client";
import "../../styles/global.css";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import Reviews from "../../components/Reviews"
import Footer from "../../components/Footer";
import style from "../../styles/landingMain.module.css";

function App() {
  return (
    <div className={style.container}>
      <Banner />
      <main className={style.main}>
        <Features />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
