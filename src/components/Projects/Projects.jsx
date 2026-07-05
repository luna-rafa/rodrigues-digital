import "./Projects.css";
import { useLanguage } from "../../i18n/LanguageContext";

import rafaelaProject from "../../assets/projects/rafaela-project.png";
import marcelaProject from "../../assets/projects/marcela-project.png";
import jaklealProject from "../../assets/projects/jakleal-project.png";
import rebanhaoProject from "../../assets/projects/rebanhão-project.png";
import alvarotitoProject from "../../assets/projects/alvarotito-project.png";
import carlinhoProject from "../../assets/projects/carlinhofelix-project.png";

function Projects() {
  const { t } = useLanguage();

  const images = [
    rafaelaProject,
    marcelaProject,
    jaklealProject,
    rebanhaoProject,
    alvarotitoProject,
    carlinhoProject,
  ];

  return (
    <section className="projects" id="projetos">
      <div className="container projects-container">
        <div className="section-heading projects-heading">
          <span>{t.projects.tag}</span>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.description}</p>
        </div>

        <div className="projects-grid">
          {t.projects.items.map((project, index) => {
            const CardContent = (
              <>
                <div className="project-image">
                  <img src={images[index]} alt={project.title} />
                </div>

                <div className="project-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>

                  {project.link && (
                    <p className="project-link-text">{t.projects.viewProject}</p>
                  )}
                </div>
              </>
            );

            return project.link ? (
              <a
                className="project-item"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                {CardContent}
              </a>
            ) : (
              <article className="project-item" key={project.title}>
                {CardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;