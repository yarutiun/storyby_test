import { createRoot } from "react-dom/client";
import "../../styles/global.css";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";
import style from "../../styles/landingMain.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


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
