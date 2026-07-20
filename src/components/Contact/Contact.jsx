import "./Contact.css";
import { useLanguage } from "../../i18n/LanguageContext";

function Contact() {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/5527995749915?text=${encodeURIComponent(
    t.contact.whatsappMessage
  )}`;

  const icons = {
    instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4.2A3.8 3.8 0 1 1 12 15.8 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 12 13.8 1.8 1.8 0 0 0 12 10.2ZM17.6 6.8a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8Z" />
      </svg>
    ),

    facebook: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h2V4h-2.6C10.8 4 9 5.8 9 8.4V11H7v4h2v7h4v-7h2.7l.3-4h-3V8.7c0-.5.3-.7 1-.7Z" />
      </svg>
    ),

    linkedin: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 8.8H3V21h3.5V8.8ZM4.7 3A2 2 0 1 0 4.7 7a2 2 0 0 0 0-4Zm6.1 5.8H7.5V21H11v-6.4c0-1.7.8-2.7 2.2-2.7 1.3 0 1.9.9 1.9 2.7V21h3.5v-7.1c0-3.5-1.8-5.3-4.5-5.3a4 4 0 0 0-3.1 1.5h-.1V8.8Z" />
      </svg>
    ),

    email: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 7.2L4.4 7H4v.4l8 5.5 8-5.5V7h-.4L12 12.2Z" />
      </svg>
    ),

    whatsapp: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2.5 22l5.2-1.1A9.9 9.9 0 1 0 12 2Zm0 2a7.9 7.9 0 0 1 0 15.8 8 8 0 0 1-3.8-1l-.4-.2-2.6.6.6-2.5-.3-.4A7.8 7.8 0 0 1 12 4Zm-3.1 4.1c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.5c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.4l-1.7-.8c-.3-.1-.5-.1-.7.2l-.7.9c-.1.2-.3.2-.6.1a6.4 6.4 0 0 1-1.9-1.2 7.2 7.2 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4h-.7Z" />
      </svg>
    ),
  };

  const contactLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/rodriguesdigital.oficial/",
      icon: icons.instagram,
      className: "instagram",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61591279787351",
      icon: icons.facebook,
      className: "facebook",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rafaelarodrigues-it-support/",
      icon: icons.linkedin,
      className: "linkedin",
    },
    {
      name: "E-mail",
      url: "mailto:rafaela.mentordigital@gmail.com",
      icon: icons.email,
      className: "email",
    },
  ];

  return (
    <section className="contact" id="contato">
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="container contact-container">
        <div className="contact-content">
          <span className="contact-tag">{t.contact.tag}</span>

          <h2>{t.contact.title}</h2>

          <p>{t.contact.description}</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp-button"
          >
            <span className="contact-whatsapp-icon">{icons.whatsapp}</span>

            <div>
              <strong>{t.contact.whatsappButton}</strong>
            </div>
          </a>
        </div>

        <div className="contact-social">
          <span className="contact-social-tag">{t.contact.channelsTag}</span>

          <h3>{t.contact.channelsTitle}</h3>

          <div className="contact-links">
            {contactLinks.map((contact) => (
              <a
                href={contact.url}
                target={contact.name === "E-mail" ? undefined : "_blank"}
                rel={contact.name === "E-mail" ? undefined : "noreferrer"}
                className="contact-link"
                key={contact.name}
              >
                <div className={`contact-link-icon ${contact.className}`}>
                  {contact.icon}
                </div>

                <div className="contact-link-content">
                  <strong>{contact.name}</strong>
                </div>

                <span className="contact-link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;