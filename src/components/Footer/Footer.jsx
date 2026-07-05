import "./Footer.css";
import { useLanguage } from "../../i18n/LanguageContext";
import logoRD from "../../assets/logos/logo-rd.png";

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <a href="#inicio" className="footer-logo" aria-label="Rodrigues Digital">
          <img src={logoRD} alt="Rodrigues Digital" />

          <span>
            <strong>Rodrigues</strong>
            <small>Digital</small>
          </span>
        </a>

        <nav className="footer-nav" aria-label="Menu do rodapé">
          <a href="#sobre">{t.nav.about}</a>
          <a href="#solucoes">{t.nav.services}</a>
          <a href="#projetos">{t.nav.projects}</a>
          <a href="#processo">{t.nav.process}</a>
          <a href="#contato">{t.nav.contact}</a>
        </nav>

        <p className="footer-copy">
          © {currentYear} Rodrigues Digital. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;