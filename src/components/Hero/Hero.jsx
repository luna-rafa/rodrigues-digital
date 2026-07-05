import "./Hero.css";
import { useLanguage } from "../../i18n/LanguageContext";

import marcelaProject from "../../assets/projects/marcela-project.png";
import rafaelaProject from "../../assets/projects/rafaela-project.png";
import rebanhaoProject from "../../assets/projects/rebanhão-project.png";

function Hero() {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/5527996245165?text=${encodeURIComponent(
    t.whatsapp
  )}`;

  return (
    <section className="hero" id="inicio">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">{t.hero.tag}</span>

          <h1>{t.hero.title}</h1>

          <p>{t.hero.description}</p>

          <div className="hero-buttons">
            <a href="#solucoes" className="btn-primary">
              {t.hero.primaryButton}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              {t.hero.secondaryButton}
            </a>
          </div>

          <div className="hero-features">
            <div>
              <strong>01</strong>
              <span>{t.hero.featureOne}</span>
            </div>

            <div>
              <strong>02</strong>
              <span>{t.hero.featureTwo}</span>
            </div>

            <div>
              <strong>03</strong>
              <span>{t.hero.featureThree}</span>
            </div>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Projetos em destaque Rodrigues Digital"
        >
          <div className="hero-project hero-project-portfolio">
            <span>{t.hero.cardTwo}</span>

            <img
              src={rafaelaProject}
              alt="Portfólio desenvolvido pela Rodrigues Digital"
            />
          </div>

          <div className="hero-projects-bottom">
            <div className="hero-project hero-project-landing">
              <span>{t.hero.cardOne}</span>

              <img
                src={marcelaProject}
                alt="Landing Page desenvolvida pela Rodrigues Digital"
              />
            </div>

            <div className="hero-project hero-project-media">
              <span>{t.hero.cardThree}</span>

              <img
                src={rebanhaoProject}
                alt="Mídia Kit desenvolvido pela Rodrigues Digital"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;