import { FiLayout, FiPackage, FiMail } from 'react-icons/fi';
import Reveal from './Reveal';
import { copywritingSamples, copywritingApproach } from '../data/profile';
import './Copywriting.css';

const typeIcon = {
  'Landing Page': FiLayout,
  'Product Description': FiPackage,
  'Marketing Email': FiMail,
};

export default function Copywriting() {
  return (
    <section id="copywriting" className="section copywriting">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Copywriting</span>
          <h2 className="section-heading">Selected copywriting samples</h2>
          <p className="section-sub">
            Spec work written to show range across SaaS marketing — landing pages, product
            descriptions, and lifecycle email. Created to demonstrate voice and structure, not
            delivered client work.
          </p>
        </Reveal>

        <div className="copywriting__grid">
          {copywritingSamples.map((sample, i) => {
            const Icon = typeIcon[sample.type];
            const c = sample.content;
            return (
              <Reveal
                key={`${sample.product}-${sample.type}`}
                delay={i * 0.1}
                className="copywriting__card glass-card"
              >
                <div className="copywriting__head">
                  <span className="copywriting__type">
                    <Icon /> {sample.type}
                  </span>
                  <span className="copywriting__product">{sample.product}</span>
                </div>
                <p className="copywriting__context">{sample.context}</p>

                {sample.type === 'Landing Page' && (
                  <div className="copywriting__mock copywriting__mock--web">
                    <div className="copywriting__mock-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="copywriting__mock-body">
                      <span className="copywriting__mock-eyebrow">{c.eyebrow}</span>
                      <h3>{c.headline}</h3>
                      <p>{c.subheadline}</p>
                      <div className="copywriting__mock-ctas">
                        <span className="btn btn-primary">{c.ctaPrimary}</span>
                        <span className="btn btn-ghost">{c.ctaSecondary}</span>
                      </div>
                      <div className="copywriting__mock-features">
                        {c.features.map((f) => (
                          <div key={f.title} className="copywriting__mock-feature">
                            <h4>{f.title}</h4>
                            <p>{f.body}</p>
                          </div>
                        ))}
                      </div>
                      <p className="copywriting__mock-closer">{c.closer}</p>
                    </div>
                  </div>
                )}

                {sample.type === 'Product Description' && (
                  <div className="copywriting__mock copywriting__mock--product">
                    <h3>{c.title}</h3>
                    <p className="copywriting__mock-tagline">{c.tagline}</p>
                    <p>{c.description}</p>
                    <ul className="copywriting__mock-list">
                      {c.features.map((f) => (
                        <li key={f.title}>
                          <strong>{f.title}</strong> — {f.body}
                        </li>
                      ))}
                    </ul>
                    <p className="copywriting__mock-closer">{c.closer}</p>
                  </div>
                )}

                {sample.type === 'Marketing Email' && (
                  <div className="copywriting__mock copywriting__mock--email">
                    <div className="copywriting__mock-email-head">
                      <span>
                        <strong>Subject:</strong> {c.subject}
                      </span>
                      <span className="copywriting__mock-preview">{c.preview}</span>
                    </div>
                    <div className="copywriting__mock-email-body">
                      <p>{c.greeting}</p>
                      {c.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                      <span className="btn btn-primary copywriting__mock-email-cta">{c.cta}</span>
                      {c.signoff.split('\n\n').map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                      {c.ps && <p className="copywriting__mock-ps">{c.ps}</p>}
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="copywriting__approach glass-card">
          <span className="copywriting__approach-label">My approach</span>
          <p>{copywritingApproach}</p>
        </Reveal>
      </div>
    </section>
  );
}
