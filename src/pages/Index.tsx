import { ArrowUpRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

const work = [
  {
    label: { en: 'Research', zh: '研究项目' },
    title: 'Contrastive Language–Genotype Pre-training',
    description: { en: 'A cross-modal framework that aligns longitudinal EHR phenotypes with genomic variation for generalizable disease-risk prediction.', zh: '一个对齐纵向电子健康记录表型与基因组变异的跨模态框架，用于构建可泛化的疾病风险预测模型。' },
  },
  {
    label: { en: 'Preprint · 2025', zh: '预印本 · 2025' },
    title: 'GENPHIRE',
    description: { en: 'Using language-model embeddings to improve genetic disease-risk prediction across 21 UK Biobank cohorts.', zh: '利用语言模型嵌入提升遗传疾病风险预测，并在 UK Biobank 的 21 个队列中进行验证。' },
    href: 'https://doi.org/10.64898/2025.12.03.25341576',
  },
];

const experience = [
  {
    company: 'Genentech',
    role: { en: 'Data Scientist I, Translational Safety · Part-time', zh: '数据科学家 I，转化安全 · 兼职' },
    date: { en: 'Sep 2026–present', zh: '2026.09–至今' },
    description: { en: 'Developing AI agents that automate scientific data workflows and support scalable, AI-assisted analysis.', zh: '开发用于自动化科研数据流程的 AI 智能体，支持可扩展的 AI 辅助分析。' },
  },
  {
    company: 'Genentech',
    role: { en: 'PhD Intern, Translational Safety', zh: '博士实习生，转化安全' },
    date: { en: 'Jun–Aug 2026', zh: '2026.06–08' },
    description: { en: 'Built and deployed an LLM-powered agent for querying in vivo safety data, together with a task-specific evaluation framework.', zh: '构建并部署由大语言模型驱动的智能体，用于查询体内安全性数据，并建立相应的任务评估框架。' },
  },
  {
    company: 'American Cancer Society',
    role: { en: 'Health Research Intern', zh: '健康研究实习生' },
    date: { en: 'Nov 2024–May 2025', zh: '2024.11–2025.05' },
    description: { en: 'Used statistical learning to study hospitalization duration, cost, and population-level healthcare burden.', zh: '运用统计学习方法研究住院时长、费用及人群层面的医疗负担。' },
  },
  {
    company: 'Arbor Biotechnologies',
    role: { en: 'Computational Biologist Intern', zh: '计算生物学实习生' },
    date: { en: 'Jun–Aug 2023', zh: '2023.06–08' },
    description: { en: 'Developed Bayesian methods and scalable workflows to identify off-target CRISPR gene-editing events.', zh: '开发贝叶斯方法与可扩展分析流程，用于识别 CRISPR 基因编辑的脱靶事件。' },
  },
];

export default function Index() {
  const { language } = useLanguage();
  const zh = language === 'zh';
  return <div className="site-shell home-shell">
    <a className="skip-link" href="#main">{zh ? '跳至正文' : 'Skip to content'}</a>
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
          <p className="minimal-role">{zh ? '埃默里大学计算机科学与生物医学信息学博士四年级' : <>Fourth-year Ph.D. student in Computer Science & Biomedical Informatics<br />Emory University</>}</p>
          <div className="minimal-copy">
            {zh ? <>
              <p>我的工作位于<strong>机器学习、人类遗传学与生物医学人工智能</strong>的交叉领域，专注于构建理解人类疾病的基础模型与 AI 系统。</p>
              <p>我的主要研究方向是<strong>面向人类遗传学的多模态基础模型</strong>。我开发跨模态表征学习方法，将基因组变异与纵向电子健康记录（EHR）及其他健康数据模态相连接，从而学习能够刻画遗传变异、临床轨迹与疾病表型之间关系的表征。最终，我希望这些模型能够跨疾病、跨人群泛化，并推动疾病机制理解、风险预测与精准医学。</p>
              <p>我也关注<strong>面向遗传学与基因组学的智能体 AI</strong>：能够对复杂生物数据进行推理、调用科研工具，并贯穿科研工作流支持研究人员的 AI 系统。在 Genentech，我为转化安全领域的临床前科研应用开发 AI 智能体及其基础设施，包括可靠的任务编排、评估，以及与科研数据和工具交互的系统。</p>
              <p>我在埃默里大学师从 <a href="https://scholar.google.com/citations?user=9F-Jk74AAAAJ&amp;hl=en">Zhaohui “Steve” Qin</a> 教授。我的研究背景还涵盖统计遗传学、流行病学与计算生物学。我也与 <a href="https://en.wikipedia.org/wiki/Victor_Corces">Victor Corces 教授</a>合作，开展<strong>面向表观遗传数据的机器学习</strong>研究，利用 ATAC-seq 及相关基因组信号进行神经系统疾病的早期预测。</p>
            </> : <>
              <p>I work at the intersection of <strong>machine learning, human genetics, and biomedical AI</strong>, with a focus on building foundation models and AI systems for understanding human disease.</p>
              <p>My primary research explores <strong>multimodal foundation models for human genetics</strong>. I develop cross-modal representation learning approaches that connect genomic variation with longitudinal electronic health records (EHRs) and other health modalities, with the goal of learning representations that capture relationships among inherited genetic variation, clinical trajectories, and disease phenotypes. Ultimately, I am interested in models that generalize across diseases and populations and improve disease understanding, risk prediction, and precision medicine.</p>
              <p>I am also interested in <strong>agentic AI for genetics and genomics</strong>—AI systems that can reason over complex biological data, interact with scientific tools, and support researchers throughout scientific workflows. At Genentech, I develop AI agents and supporting infrastructure for preclinical scientific applications in Translational Safety, including systems for reliable orchestration, evaluation, and interaction with scientific data and tools.</p>
              <p>I am a PhD researcher advised by <a href="https://scholar.google.com/citations?user=9F-Jk74AAAAJ&amp;hl=en">Zhaohui “Steve” Qin</a> at Emory University. My broader research spans machine learning, statistical genetics, epidemiology, and computational biology. I also collaborate with <a href="https://en.wikipedia.org/wiki/Victor_Corces">Prof. Victor Corces</a> on <strong>machine learning for epigenetic data</strong>, using ATAC-seq and related genomic signals for the early prediction of neurological disorders.</p>
            </>}
          </div>
          <div className="minimal-links">
            <a href="/about">{zh ? '关于我' : 'About me'}</a>
            <a href="mailto:dyao8@emory.edu">{zh ? '邮件' : 'Email'}</a>
            <a href="https://scholar.google.com/citations?user=u4ED2YMAAAAJ&hl=en">{zh ? '谷歌学术' : 'Scholar'}</a>
            <a href="https://github.com/hereagain-Y">GitHub</a>
            <a href="https://www.linkedin.com/in/danwei-yao-1450501a5/">LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="minimal-section" id="research">
        <h2>{zh ? '研究方向' : 'Research interests'}</h2>
        <div className="interest-list">
          <p><span>01</span> {zh ? '人类遗传学多模态基础模型：对齐基因组变异与临床轨迹，提升疾病理解与预测' : 'Multimodal foundation models for human genetics, aligning genomic variation with clinical trajectories to improve disease understanding and prediction'}</p>
          <p><span>02</span> {zh ? '面向遗传学与基因组学的智能体 AI' : 'Agentic AI for genetics and genomics'}</p>
          <p><span>03</span> {zh ? '面向功能基因组学与神经系统疾病的机器学习' : 'Machine learning for functional genomics and neurological disorders'}</p>
        </div>
      </section>

      <section className="minimal-section" id="work">
        <h2>{zh ? '精选项目' : 'Selected work'}</h2>
        <div>
          <div className="work-list">
            {work.map(item => <article key={item.title}>
              <p className="work-label">{item.label[language]}</p>
              <h3>{item.href ? <a href={item.href}>{item.title} <ArrowUpRight size={15} /></a> : item.title}</h3>
              <p>{item.description[language]}</p>
            </article>)}
          </div>
          <a className="more-link" href="https://scholar.google.com/citations?user=u4ED2YMAAAAJ&hl=en">{zh ? '在 Google Scholar 查看更多论文' : 'More publications on Google Scholar'} <ArrowUpRight size={14} /></a>
        </div>
      </section>

      <section className="minimal-section experience-note" id="experience">
        <h2>{zh ? '经历' : 'Experience'}</h2>
        <div className="experience-list">
          {experience.map(item => <article key={`${item.company}-${item.role.en}`}>
            <div className="experience-heading">
              <h3>{item.company}</h3>
              <span>{item.date[language]}</span>
            </div>
            <p className="experience-role">{item.role[language]}</p>
            <p className="experience-description">{item.description[language]}</p>
          </article>)}
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
