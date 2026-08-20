import { FiExternalLink, FiFileText, FiActivity } from 'react-icons/fi';
import Reveal from './Reveal';
import { publications, currentResearch } from '../data/profile';
import './Research.css';

export default function Research() {
  return (
    <section id="research" className="section research">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Research</span>
          <h2 className="section-heading">Published &amp; ongoing work</h2>
          <p className="section-sub">
            Peer-reviewed research at the intersection of computer vision, adaptive systems,
            and real-time interactive experiences — plus what I'm exploring right now.
          </p>
        </Reveal>

        {currentResearch.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1} className="research__card glass-card is-progress">
            <div className="research__icon research__icon--progress"><FiActivity /></div>
            <div className="research__body">
              <span className="research__status">{item.status}</span>
              <h3>{item.title}</h3>
              <p className="research__summary">{item.summary}</p>

              <ul className="research__points">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.1} className="research__card glass-card">
            <div className="research__icon"><FiFileText /></div>
            <div className="research__body">
              <span className="research__venue">{pub.venue}</span>
              <h3>{pub.title}</h3>
              <span className="research__period">{pub.period}</span>

              <ul className="research__points">
                {pub.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>

              <a href={pub.link} target="_blank" rel="noreferrer" className="research__link">
                {pub.linkLabel} <FiExternalLink />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
