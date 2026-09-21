import { ArrowUpRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const work = [
  {
    label: 'Research',
    title: 'Contrastive Language–Genotype Pre-training',
    description: 'A cross-modal framework that aligns longitudinal diagnoses and polygenic profiles for generalizable disease-risk prediction.',
  },
  {
    label: 'Preprint · 2025',
    title: 'GENPHIRE',
    description: 'Using language-model embeddings to improve genetic disease-risk prediction across 21 UK Biobank cohorts.',
    href: 'https://doi.org/10.64898/2025.12.03.25341576',
  },
];

const experience = [
  {
    company: 'Genentech',
    role: 'Data Scientist I, Translational Safety · Part-time',
    date: 'Sep 2026–present',
    description: 'Developing AI agents that automate scientific data workflows and support scalable, AI-assisted analysis.',
  },
  {
    company: 'Genentech',
    role: 'PhD Intern, Translational Safety',
    date: 'Jun–Aug 2026',
    description: 'Built and deployed an LLM-powered agent for querying in vivo safety data, together with a task-specific evaluation framework.',
  },
  {
    company: 'American Cancer Society',
    role: 'Health Research Intern',
    date: 'Nov 2024–May 2025',
    description: 'Used statistical learning to study hospitalization duration, cost, and population-level healthcare burden.',
  },
  {
    company: 'Arbor Biotechnologies',
    role: 'Computational Biologist Intern',
    date: 'Jun–Aug 2023',
    description: 'Developed Bayesian methods and scalable workflows to identify off-target CRISPR gene-editing events.',
  },
];

export default function Index() {
  return <div className="site-shell home-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" className="minimal-home">
      <section className="minimal-intro" id="about">
        <img
          className="minimal-portrait"
          src="https://res.cloudinary.com/ds4h9nepa/image/upload/v1747102467/Weixin_Image_20250512221344_z8a7xp.jpg"
          alt="Danwei Yao"
          fetchPriority="high"
        />
        <div>
          <h1>Danwei Yao</h1>
          <p className="minimal-role">Fourth-year Ph.D. student in Computer Science & Biomedical Informatics<br />Emory University</p>
          <div className="minimal-copy">
            <p>I work on <strong>AI foundation models for life science</strong>. My current research focuses on representation learning for human genetics, with the goal of building accurate and generalizable models for disease-risk prediction.</p>
            <p>I am also interested in <strong>agentic tools and applications for scientific work</strong>: systems that help researchers find, understand, and act on complex biological data. At Genentech, I develop AI agents for scientific data workflows in Translational Safety.</p>
            <p>My background spans machine learning, epidemiology, statistical genetics, and computational biology. I am advised by <a href="https://encore-group.emory.edu/people/danwei-yao/">Zhaohui “Steve” Qin</a> at Emory.</p>
          </div>
          <div className="minimal-links">
            <a href="/about">About me</a>
            <a href="mailto:dyao8@emory.edu">Email</a>
            <a href="https://scholar.google.com/citations?user=u4ED2YMAAAAJ&hl=en">Scholar</a>
            <a href="https://github.com/hereagain-Y">GitHub</a>
            <a href="https://www.linkedin.com/in/danwei-yao-1450501a5/">LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="minimal-section" id="research">
        <h2>Research interests</h2>
        <div className="interest-list">
          <p><span>01</span> Foundation models for human genetics and genomics</p>
          <p><span>02</span> Genotype–phenotype representation learning and disease-risk prediction</p>
          <p><span>03</span> AI agents and tools for scientific discovery</p>
        </div>
      </section>

      <section className="minimal-section" id="work">
        <h2>Selected work</h2>
        <div>
          <div className="work-list">
            {work.map(item => <article key={item.title}>
              <p className="work-label">{item.label}</p>
              <h3>{item.href ? <a href={item.href}>{item.title} <ArrowUpRight size={15} /></a> : item.title}</h3>
              <p>{item.description}</p>
            </article>)}
          </div>
          <a className="more-link" href="https://scholar.google.com/citations?user=u4ED2YMAAAAJ&hl=en">More publications on Google Scholar <ArrowUpRight size={14} /></a>
        </div>
      </section>

      <section className="minimal-section experience-note" id="experience">
        <h2>Experience</h2>
        <div className="experience-list">
          {experience.map(item => <article key={`${item.company}-${item.role}`}>
            <div className="experience-heading">
              <h3>{item.company}</h3>
              <span>{item.date}</span>
            </div>
            <p className="experience-role">{item.role}</p>
            <p className="experience-description">{item.description}</p>
          </article>)}
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
