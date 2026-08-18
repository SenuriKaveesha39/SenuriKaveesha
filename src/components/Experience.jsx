import Reveal from './Reveal';
import { experience } from '../data/profile';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="section-heading">Where I've put ML into production</h2>
          <p className="section-sub">
            Three roles, one throughline: taking AI from a promising model to a
            reliable, monitored feature that real users touch every day.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="timeline__item">
              <div className="timeline__rail">
                <span className={`timeline__node ${job.current ? 'is-current' : ''}`} />
                {i !== experience.length - 1 && <span className="timeline__line" />}
              </div>

              <div className="timeline__card glass-card">
                <div className="timeline__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className={`timeline__period ${job.current ? 'is-current' : ''}`}>
                    {job.current && <span className="timeline__dot" />}
                    {job.period}
                  </span>
                </div>

                <ul className="timeline__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="timeline__tags">
                  {job.tech.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
