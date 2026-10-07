import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';

const experience = [
  {
    company: 'Genentech',
    role: { en: 'Data Scientist I, Translational Safety · Part-time', zh: '数据科学家 I，转化安全 · 兼职' },
    date: { en: 'Sep 2026–present', zh: '2026.09–至今' },
    description: { en: 'Developing AI agents and automation tools for scalable scientific data workflows and AI-assisted analysis.', zh: '开发 AI 智能体与自动化工具，用于可扩展的科研数据流程和 AI 辅助分析。' },
  },
  {
    company: 'Genentech',
    role: { en: 'PhD Intern, Translational Safety', zh: '博士实习生，转化安全' },
    date: { en: 'Jun–Aug 2026', zh: '2026.06–08' },
    description: { en: 'Built and deployed an LLM-powered agent for querying preclinical in vivo study outcomes, together with a task-specific evaluation framework.', zh: '构建并部署由大语言模型驱动的智能体，用于查询临床前体内研究结果，并建立相应的任务评估框架。' },
  },
  {
    company: 'American Cancer Society',
    role: { en: 'Health Research Intern, Surveillance & Health Equity Science', zh: '健康研究实习生，监测与健康公平科学' },
    date: { en: 'Nov 2024–May 2025', zh: '2024.11–2025.05' },
    description: { en: 'Studied disparities, healthcare use, and the financial burden associated with cancer care using nationally representative data.', zh: '运用全国代表性数据研究癌症照护中的差异、医疗服务利用及经济负担。' },
  },
  {
    company: 'Arbor Biotechnologies',
    role: { en: 'Computational Biologist Intern', zh: '计算生物学实习生' },
    date: { en: 'Jun–Aug 2023', zh: '2023.06–08' },
    description: { en: 'Developed Bayesian methods and scalable workflows to identify off-target CRISPR gene-editing events.', zh: '开发贝叶斯方法与可扩展分析流程，用于识别 CRISPR 基因编辑的脱靶事件。' },
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
  const { language } = useLanguage();
  const zh = language === 'zh';
  return <div className="site-shell about-page">
    <a className="skip-link" href="#main">{zh ? '跳至正文' : 'Skip to content'}</a>
    <Header />
    <main id="main" className="about-simple">
      <h1>{zh ? '关于我' : 'About me'}</h1>

      <section className="about-intro">
        <img
          src="https://res.cloudinary.com/ds4h9nepa/image/upload/v1747102467/Weixin_Image_20250512221344_z8a7xp.jpg"
          alt="Danwei Yao"
        />
        <div className="about-copy">
          {zh ? <>
            <p>我的工作位于<strong>机器学习、人类遗传学与生物医学人工智能</strong>的交叉领域。我的研究聚焦于<strong>面向人类遗传学的多模态基础模型</strong>，开发跨模态表征学习方法，将基因组变异与纵向电子健康记录及其他健康数据相整合，用于建模疾病轨迹并提升风险预测。</p>
            <p>我也关注<strong>面向遗传学与基因组学的智能体 AI</strong>，构建能够对生物数据进行推理并与科研工具交互的 AI 系统。在 <a href="https://en.wikipedia.org/wiki/Genentech"><strong>Genentech</strong></a>，我为转化安全领域的临床前科研工作流开发 AI 智能体及其基础设施。</p>
            <p>我是在埃默里大学师从 <a href="https://scholar.google.com/citations?user=9F-Jk74AAAAJ&amp;hl=en">Zhaohui “Steve” Qin</a> 教授的博士研究人员。我的研究背景还涵盖机器学习、统计遗传学、流行病学与计算生物学。我也与 <a href="https://en.wikipedia.org/wiki/Victor_Corces">Victor Corces 教授</a>合作，开展<strong>面向表观遗传数据的机器学习</strong>研究，利用 ATAC-seq 及相关基因组信号进行神经系统疾病的早期预测。</p>
            <p>工作之外，我喜欢为生活里的小事留出空间。<strong><a href="/photography">摄影</a>和写日记</strong>是我最常回到的两件事，旅行时通常也会随身带着相机。我也花很多时间<strong>攀岩</strong>，最近主要抱石和先锋攀；偶尔画画、为朋友制作手工卡片，也会一有空就读书。我尤其喜欢 <strong>Vladimir Nabokov</strong> 和 <strong>Haruki Murakami</strong>。</p>
          </> : <>
            <p>I work at the intersection of <strong>machine learning, human genetics, and biomedical AI</strong>. My research focuses on <strong>multimodal foundation models for human genetics</strong>, developing cross-modal representation learning methods that integrate genomic variation with longitudinal EHRs and other health data to model disease trajectories and improve risk prediction.</p>
            <p>I am also interested in <strong>agentic AI for genetics and genomics</strong>—building AI systems that reason over biological data and interact with scientific tools. At <a href="https://en.wikipedia.org/wiki/Genentech"><strong>Genentech</strong></a>, I develop AI agents and supporting infrastructure for preclinical scientific workflows in Translational Safety.</p>
            <p>I am a PhD researcher advised by <a href="https://scholar.google.com/citations?user=9F-Jk74AAAAJ&amp;hl=en">Zhaohui “Steve” Qin</a> at Emory University. My broader research spans machine learning, statistical genetics, epidemiology, and computational biology. I also collaborate with <a href="https://en.wikipedia.org/wiki/Victor_Corces">Prof. Victor Corces</a> on <strong>machine learning for epigenetic data</strong>, using ATAC-seq and related genomic signals for the early prediction of neurological disorders.</p>
            <p>Outside work, I like making room for the small things in life. <strong><a href="/photography">Photography</a> and journaling</strong> are the practices I return to most, and I am usually carrying a camera when I travel. I also spend a lot of time <strong>climbing</strong>—mostly bouldering and lead climbing these days—paint occasionally, make handmade cards for friends, and read whenever I get the chance. I especially enjoy <strong>Vladimir Nabokov</strong> and <strong>Haruki Murakami</strong>.</p>
          </>}
        </div>
      </section>

      <section className="about-list-section">
        <h2>{zh ? '行业经历' : 'Industry experience'}</h2>
        <div className="about-experience-list">
          {experience.map(item => <article key={`${item.company}-${item.role.en}`}>
            <div>
              <h3>{item.company}</h3>
              <span>{item.date[language]}</span>
            </div>
            <p className="about-role">{item.role[language]}</p>
            <p>{item.description[language]}</p>
          </article>)}
        </div>
      </section>

      <section className="about-list-section">
        <h2>{zh ? '精选论文' : 'Selected publications'}</h2>
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
