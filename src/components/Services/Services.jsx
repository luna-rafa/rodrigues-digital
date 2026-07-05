import "./Services.css";
import { useLanguage } from "../../i18n/LanguageContext";

function Services() {
  const { t } = useLanguage();

  return (
    <section className="services" id="solucoes">
      <div className="container services-container">
        <div className="section-heading">
          <span>{t.services.tag}</span>
          <h2>{t.services.title}</h2>
          <p>{t.services.description}</p>
        </div>

        <div className="services-grid">
          {t.services.items.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>

              <div className="service-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;