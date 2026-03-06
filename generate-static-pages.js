import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html not found. Run build first.');
  process.exit(1);
}

const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

const routes = [
  'about',
  'services',
  'services/projects',
  'services/plrs',
  'services/installations',
  'services/substations',
  'services/ev_charging',
  'services/telecommunications',
  'services/others',
  'lighting',
  'partners',
  'recrutamento',
  'contact',
  'quality-policy',
  'privacy',
  'terms',
  'faqs'
];

routes.forEach(route => {
  const dir = path.join(distDir, route);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'index.html'), indexHtmlContent);
  console.log(`Created ${route}/index.html`);
});

console.log('Static pages generated successfully.');
