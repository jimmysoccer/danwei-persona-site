import { ArrowUpRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

const work = [
  {
    label: { en: 'Research', zh: '研究项目' },
    title: 'Contrastive Language–Genotype Pre-training',
    description: { en: 'A cross-modal framework that aligns longitudinal diagnoses and polygenic profiles for generalizable disease-risk prediction.', zh: '一个对齐纵向诊断记录与多基因特征的跨模态框架，用于构建可泛化的疾病风险预测模型。' },
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
              <p>我的研究聚焦于<strong>生命科学基础模型</strong>。目前主要探索人类遗传学的表征学习，目标是构建准确且具有泛化能力的疾病风险预测模型。</p>
              <p>我也关注<strong>面向科学研究的智能体工具与应用</strong>：帮助研究人员发现、理解并使用复杂生物数据的 AI 系统。在 Genentech，我为转化安全研究开发科研数据工作流智能体。</p>
              <p>我的背景涵盖机器学习、流行病学、统计遗传学和计算生物学。目前在埃默里大学师从 <a href="https://scholar.google.com/citations?user=9F-Jk74AAAAJ&amp;hl=en">Zhaohui “Steve” Qin</a> 教授。</p>
            </> : <>
              <p>I work on <strong>AI foundation models for life science</strong>. My current research focuses on representation learning for human genetics, with the goal of building accurate and generalizable models for disease-risk prediction.</p>
              <p>I am also interested in <strong>agentic tools and applications for scientific work</strong>: systems that help researchers find, understand, and act on complex biological data. At Genentech, I develop AI agents for scientific data workflows in Translational Safety.</p>
              <p>My background spans machine learning, epidemiology, statistical genetics, and computational biology. I am advised by <a href="https://scholar.google.com/citations?user=9F-Jk74AAAAJ&amp;hl=en">Zhaohui “Steve” Qin</a> at Emory.</p>
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
          <p><span>01</span> {zh ? '面向人类遗传学与基因组学的基础模型' : 'Foundation models for human genetics and genomics'}</p>
          <p><span>02</span> {zh ? '基因型—表型表征学习与疾病风险预测' : 'Genotype–phenotype representation learning and disease-risk prediction'}</p>
          <p><span>03</span> {zh ? '服务于科学发现的 AI 智能体与工具' : 'AI agents and tools for scientific discovery'}</p>
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
          {experience.map(item => <article key={`${item.company}-${item.role}`}>
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
