import "./About.css";
import { useLanguage } from "../../i18n/LanguageContext";
import founderImage from "../../assets/images/rafaela-founder.jpg";

function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="sobre">
      <div className="container about-container">
        <div className="about-visual">
          <div className="about-image-wrapper">
            <img
              src={founderImage}
              alt="Rafaela Rodrigues, fundadora da Rodrigues Digital"
              className="about-image"
            />

            <div className="founder-card">
              <span>{t.about.founderTag}</span>

              <strong>{t.about.founderName}</strong>

              <p>{t.about.founderRole}</p>
            </div>
          </div>

          <div className="about-decoration about-decoration-one"></div>
          <div className="about-decoration about-decoration-two"></div>
        </div>

        <div className="about-content">
          <span className="about-tag">{t.about.tag}</span>

          <h2>{t.about.title}</h2>

          <p>{t.about.paragraphOne}</p>

          <p>{t.about.paragraphTwo}</p>

          <div className="about-stats">
            <div className="about-stat">
              <strong>{t.about.experience}</strong>
              <span>{t.about.experienceText}</span>
            </div>

            <div className="about-stat">
              <strong>{t.about.personalized}</strong>
              <span>{t.about.personalizedText}</span>
            </div>

            <div className="about-stat">
              <strong>{t.about.languages}</strong>
              <span>{t.about.languagesText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;