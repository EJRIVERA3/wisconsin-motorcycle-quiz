import { mkdirSync, copyFileSync, existsSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of ['index.html', 'README.md', 'LICENSE']) {
  copyFileSync(path.join(root, file), path.join(dist, file));
}

mkdirSync(path.join(dist, 'client'), { recursive: true });
copyFileSync(path.join(root, 'index.html'), path.join(dist, 'client', 'index.html'));

mkdirSync(path.join(dist, 'server'), { recursive: true });
const html = readFileSync(path.join(root, 'index.html'), 'utf8');
writeFileSync(
  path.join(dist, 'server', 'index.js'),
  `const html = ${JSON.stringify(html)};\n\nexport default {\n  async fetch() {\n    return new Response(html, {\n      headers: {\n        'content-type': 'text/html; charset=utf-8',\n        'cache-control': 'no-store',\n      },\n    });\n  },\n};\n`,
  'utf8',
);

mkdirSync(path.join(dist, '.openai'), { recursive: true });
if (existsSync(path.join(root, '.openai', 'hosting.json'))) {
  copyFileSync(path.join(root, '.openai', 'hosting.json'), path.join(dist, '.openai', 'hosting.json'));
}
