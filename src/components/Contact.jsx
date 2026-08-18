import { useState } from 'react';
import { FiMail, FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Reveal from './Reveal';
import { profile } from '../data/profile';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact__card glass-card">
          <div className="contact__glow" />
          <span className="eyebrow">Contact</span>
          <h2 className="section-heading">Let's build something intelligent together</h2>
          <p className="section-sub">
            Whether it's productionizing an LLM feature, tuning a model pipeline, or exploring
            a role — my inbox is open.
          </p>

          <div className="contact__actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <FiMail /> Email me
            </a>
            <button className="btn btn-ghost" onClick={handleCopy}>
              {copied ? <FiCheck /> : <FiCopy />}
              {copied ? 'Copied!' : profile.email}
            </button>
          </div>

          <div className="contact__links">
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-icon"><FaGithub /></span>
              <div>
                <strong>GitHub</strong>
                <span>@SenuriKaveesha</span>
              </div>
              <FiArrowUpRight className="contact__link-arrow" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-icon"><FaLinkedinIn /></span>
              <div>
                <strong>LinkedIn</strong>
                <span>senuri-kaveesha</span>
              </div>
              <FiArrowUpRight className="contact__link-arrow" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
