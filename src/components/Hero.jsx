import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../data/profile';
import avatar from '../assets/mypic.jpeg';
import './Hero.css';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hero__badge"
          >
            <span className="hero__dot" />
            Open to new opportunities · {profile.location}
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I'm <span className="gradient-text">Senuri Kaveesha</span> —
            I build production-grade <span className="gradient-text">Software &amp; LLM</span> systems.
          </motion.h1>

          <motion.div
            className="hero__role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="hero__role-label">Currently focused on</span>
            <span className="hero__role-rotator">
              {profile.roles.map((role, i) => (
                <span key={role} className={`hero__role-item ${i === roleIndex ? 'is-active' : ''}`}>
                  {role}
                </span>
              ))}
            </span>
          </motion.div>

          <motion.p
            className="hero__summary"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Machine Learning Engineer with hands-on experience designing, training, and deploying
            production-grade ML and LLM-based systems — from RAG pipelines to full-stack AI products,
            with a growing focus on finance and tax domain applications.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View my work <FiArrowUpRight />
            </button>
            <button className="btn btn-ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in touch
            </button>
            <div className="hero__socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </motion.div>

          <motion.div
            className="hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <FiArrowDown />
            <span>Scroll to explore</span>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__avatar-ring">
            <img src={avatar} alt="Senuri Kaveesha" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
