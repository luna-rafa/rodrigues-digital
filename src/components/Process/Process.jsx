import "./Process.css";
import { useLanguage } from "../../i18n/LanguageContext";

function Process() {
  const { t } = useLanguage();

  return (
    <section className="process" id="processo">
      <div className="container process-container">
        <div className="process-heading">
          <span className="process-tag">{t.process.tag}</span>

          <h2>{t.process.title}</h2>

          <p>{t.process.description}</p>
        </div>

        <div className="process-grid">
          {t.process.items.map((item, index) => (
            <article className="process-card" key={item.title}>
              <div className="process-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="process-card-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="process-glow process-glow-one"></div>
      <div className="process-glow process-glow-two"></div>
    </section>
  );
}

export default Process;