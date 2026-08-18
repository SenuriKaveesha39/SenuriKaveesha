import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import Reveal from './Reveal';
import { projects } from '../data/profile';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Projects</span>
          <h2 className="section-heading">Things I've built and shipped</h2>
          <p className="section-sub">
            A mix of production experiments and academic builds — spanning conversational AI,
            infrastructure monitoring, applied ML, and full-stack web systems.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.08}
              className={`projects__card glass-card ${project.featured ? 'is-featured' : ''}`}
            >
              {project.featured && <span className="projects__featured-tag">Featured</span>}
              <div className="projects__card-top">
                <h3>{project.title}</h3>
                <span className="projects__period">{project.period}</span>
              </div>

              <p className="projects__desc">{project.description}</p>

              <ul className="projects__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="projects__tags">
                {project.tech.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>

              <div className="projects__links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="projects__link">
                    <FiGithub /> {link.label} <FiArrowUpRight className="projects__link-arrow" />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
