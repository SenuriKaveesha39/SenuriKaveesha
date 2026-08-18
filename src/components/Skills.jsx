import { FiCpu, FiDatabase, FiBox, FiServer } from 'react-icons/fi';
import Reveal from './Reveal';
import { skillGroups, personalSkills } from '../data/profile';
import './Skills.css';

const icons = {
  'core-ml': FiCpu,
  data: FiDatabase,
  deploy: FiBox,
  backend: FiServer,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="section-heading">A full-stack toolkit for shipping AI</h2>
          <p className="section-sub">
            From model research to the infrastructure that keeps it running in production —
            here's what I reach for at each stage of the pipeline.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.key];
            return (
              <Reveal key={group.key} delay={i * 0.08} className="skills__card glass-card">
                <div className="skills__card-head">
                  <span className="skills__icon"><Icon /></span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.blurb}</p>
                  </div>
                </div>
                <div className="skills__tags">
                  {group.items.map((item) => (
                    <span key={item} className="pill">{item}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="skills__personal">
          <span className="skills__personal-label">Beyond the stack</span>
          <div className="skills__personal-tags">
            {personalSkills.map((skill) => (
              <span key={skill} className="skills__personal-tag">{skill}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
