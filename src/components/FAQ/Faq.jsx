import { useState } from "react";
import "./Faq.css";
import { useLanguage } from "../../i18n/LanguageContext";

function Faq() {
  const { t } = useLanguage();
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion((currentQuestion) =>
      currentQuestion === index ? null : index
    );
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-glow faq-glow-one"></div>
      <div className="faq-glow faq-glow-two"></div>

      <div className="container faq-container">
        <div className="faq-header">
          <span className="faq-tag">{t.faq.tag}</span>

          <h2>{t.faq.title}</h2>

          <p>{t.faq.description}</p>
        </div>

        <div className="faq-list">
          {t.faq.items.map((item, index) => {
            const isActive = activeQuestion === index;

            return (
              <article
                className={`faq-item ${isActive ? "active" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isActive}
                >
                  <div className="faq-question-content">
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{item.question}</h3>
                  </div>

                  <span className="faq-icon" aria-hidden="true">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;