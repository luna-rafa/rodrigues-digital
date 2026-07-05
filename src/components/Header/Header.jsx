import "./Header.css";
import { useLanguage } from "../../i18n/LanguageContext";
import logoRD from "../../assets/logos/logo-rd.png";

function Header() {
  const { language, setLanguage, t } = useLanguage();

  const whatsappUrl = `https://wa.me/5527996245165?text=${encodeURIComponent(
    t.whatsapp
  )}`;

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#inicio" className="logo" aria-label="Rodrigues Digital">
          <img
            src={logoRD}
            alt="Rodrigues Digital"
            className="logo-image"
          />

          <span className="logo-text">
            <strong>Rodrigues</strong>
            <small>Digital</small>
          </span>
        </a>

        <nav className="nav" aria-label="Menu principal">
          <a href="#sobre">{t.nav.about}</a>
          <a href="#solucoes">{t.nav.services}</a>
          <a href="#projetos">{t.nav.projects}</a>
          <a href="#processo">{t.nav.process}</a>
          <a href="#contato">{t.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <div className="language-selector" aria-label="Selecionar idioma">
            <button
              type="button"
              className={language === "pt" ? "active" : ""}
              onClick={() => setLanguage("pt")}
              aria-label="Português"
            >
              PT
            </button>

            <span>/</span>

            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-label="English"
            >
              EN
            </button>

            <span>/</span>

            <button
              type="button"
              className={language === "es" ? "active" : ""}
              onClick={() => setLanguage("es")}
              aria-label="Español"
            >
              ES
            </button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="header-button"
          >
            {t.nav.meeting}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;