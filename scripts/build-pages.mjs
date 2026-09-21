import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises';
// GitHub Pages needs a real file for direct visits and refreshes on this route.
await Promise.all([
  mkdir('dist/photography', { recursive: true }),
  mkdir('dist/about', { recursive: true }),
]);
const html = await readFile('dist/index.html', 'utf8');
await writeFile('dist/photography/index.html', html.replaceAll('Danwei Yao | AI for Life Science', 'Where the Light Found Me | Danwei Yao').replaceAll('Danwei Yao studies AI foundation models for human genetics and disease-risk prediction at Emory University, and builds agentic tools for life science.', 'The photography portfolio of Danwei Yao: selected street photography and observations from everyday life.'));
await writeFile('dist/about/index.html', html.replaceAll('Danwei Yao | AI for Life Science', 'About | Danwei Yao').replaceAll('Danwei Yao studies AI foundation models for human genetics and disease-risk prediction at Emory University, and builds agentic tools for life science.', 'About Danwei Yao, her path to AI and human genetics, and her work across science and health.'));
await copyFile('dist/index.html', 'dist/404.html');
