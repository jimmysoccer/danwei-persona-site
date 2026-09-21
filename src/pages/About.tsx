import Header from '../components/Header';
import Footer from '../components/Footer';

const experience = [
  {
    company: 'Genentech',
    role: 'Data Scientist I, Translational Safety · Part-time',
    date: 'Sep 2026–present',
    description: 'Developing AI agents and automation tools for scalable scientific data workflows and AI-assisted analysis.',
  },
  {
    company: 'Genentech',
    role: 'PhD Intern, Translational Safety',
    date: 'Jun–Aug 2026',
    description: 'Built and deployed an LLM-powered agent for querying preclinical in vivo study outcomes, together with a task-specific evaluation framework.',
  },
  {
    company: 'American Cancer Society',
    role: 'Health Research Intern, Surveillance & Health Equity Science',
    date: 'Nov 2024–May 2025',
    description: 'Studied disparities, healthcare use, and the financial burden associated with cancer care using nationally representative data.',
  },
  {
    company: 'Arbor Biotechnologies',
    role: 'Computational Biologist Intern',
    date: 'Jun–Aug 2023',
    description: 'Developed Bayesian methods and scalable workflows to identify off-target CRISPR gene-editing events.',
  },
];

const publications = [
  {
    title: 'GENPHIRE: Enhancing Disease Risk Prediction Using Large Language Model',
    venue: 'medRxiv preprint, 2025',
    authors: 'Danwei Yao, Chang Liu, Shifan Yan, Jiayi Zhang, Yan V. Sun, Zhaohui S. Qin',
    href: 'https://doi.org/10.64898/2025.12.03.25341576',
  },
  {
    title: 'Hospitalization Burden Among Children With Leukemia and Lymphoma by Treatment Type in the United States',
    venue: 'JCO Oncology Practice, 2025',
    authors: 'Danwei Yao et al.',
    href: 'https://ascopubs.org/doi/abs/10.1200/OP.2025.21.10_suppl.19',
  },
  {
    title: 'The impact of COVID-19 restrictions on HIV prevention and treatment services for key populations in South Africa: an interrupted time series analysis',
    venue: 'BMC Public Health, 2024',
    authors: 'Danwei Yao, Naomi Hill, Ben Brown, et al.',
    href: 'https://doi.org/10.1186/s12889-024-19679-0',
  },
];

export default function About() {
  return <div className="site-shell about-page">
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" className="about-simple">
      <h1>About me</h1>

      <section className="about-intro">
        <img
          src="https://res.cloudinary.com/ds4h9nepa/image/upload/v1747102467/Weixin_Image_20250512221344_z8a7xp.jpg"
          alt="Danwei Yao"
        />
        <div className="about-copy">
          <p>I am a <strong>fourth-year PhD student in Computer Science and Biomedical Informatics at Emory University</strong>. Alongside my PhD, I work as a data scientist at <a href="https://www.gene.com/">Genentech</a>, developing AI agents and automation tools for scientific workflows in Translational Safety.</p>

          <p>My research focuses on <strong>AI foundation models for human genetics</strong>, particularly representation-learning approaches for disease-risk prediction. More broadly, I am interested in foundation models for life science, multimodal health data, and agentic AI systems that help scientists search, reason over, and act on complex information.</p>

          <p>My background spans machine learning, epidemiology, statistical genetics, and computational biology. I am advised by <a href="https://encore-group.emory.edu/people/danwei-yao/">Zhaohui “Steve” Qin</a> at Emory.</p>

          <p>Outside work, I like making room for the small things in life. <strong><a href="/photography">Photography</a> and journaling</strong> are the practices I return to most, and I am usually carrying a camera when I travel. I also spend a lot of time <strong>climbing</strong>—mostly bouldering and lead climbing these days—paint occasionally, make handmade cards for friends, and read whenever I get the chance. I especially enjoy <strong>Vladimir Nabokov</strong> and <strong>Haruki Murakami</strong>.</p>
        </div>
      </section>

      <section className="about-list-section">
        <h2>Industry experience</h2>
        <div className="about-experience-list">
          {experience.map(item => <article key={`${item.company}-${item.role}`}>
            <div>
              <h3>{item.company}</h3>
              <span>{item.date}</span>
            </div>
            <p className="about-role">{item.role}</p>
            <p>{item.description}</p>
          </article>)}
        </div>
      </section>

      <section className="about-list-section">
        <h2>Selected publications</h2>
        <div className="about-publication-list">
          {publications.map(publication => <article key={publication.title}>
            <h3><a href={publication.href}>{publication.title}</a></h3>
            <p>{publication.authors}</p>
            <p>{publication.venue}</p>
          </article>)}
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
