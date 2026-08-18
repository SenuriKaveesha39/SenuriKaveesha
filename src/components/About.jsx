import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import Reveal from './Reveal';
import { profile, stats, education, certifications, activities } from '../data/profile';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <span className="eyebrow">About</span>
          <h2 className="section-heading">The engineer behind the models</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.05} className="about__copy">
            <p>{profile.summary}</p>

            <div className="about__meta">
              <div className="about__meta-item">
                <FiMapPin />
                <span>{profile.location}</span>
              </div>
              <div className="about__meta-item">
                <FiMail />
                <span>{profile.email}</span>
              </div>
              <div className="about__meta-item">
                <FiPhone />
                <span>{profile.phone}</span>
              </div>
            </div>

            <div className="about__edu glass-card">
              <span className="about__edu-tag">Education</span>
              <h4>{education.degree}</h4>
              <p>{education.school} &middot; {education.period}</p>
            </div>

            <div className="about__certs">
              {certifications.map((c) => (
                <div key={c.name} className="about__cert">
                  <strong>{c.name}</strong>
                  <span>{c.issuer}</span>
                </div>
              ))}
            </div>

            <div className="about__activities">
              {activities.map((a) => (
                <span key={a} className="pill">{a}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="about__stat glass-card">
                <span className="about__stat-value gradient-text">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
