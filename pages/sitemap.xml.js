import fs from 'fs';
import path from 'path';

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const baseUrl = 'http://localhost:3000';
  const pagesDir = path.join(process.cwd(), 'pages');
  const files = fs.readdirSync(pagesDir);

  // 过滤非页面文件（如 _app.tsx, _document.tsx）
  const pageFiles = files.filter(
    (file) => !file.startsWith('_') && !file.startsWith('api') && file.endsWith('.tsx')
  );

  // 映射为 URL
  const pages = pageFiles.map((file) => {
    const pageName = file.replace('.tsx', '');
    return {
      url: `${baseUrl}/${pageName === 'index' ? '' : pageName}`,
    };
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${page.url}</loc>
    </url>
  `
    )
    .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}