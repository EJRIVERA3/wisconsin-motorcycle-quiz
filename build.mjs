import { mkdirSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of ['index.html', 'README.md', 'LICENSE']) {
  copyFileSync(path.join(root, file), path.join(dist, file));
}

mkdirSync(path.join(dist, '.openai'), { recursive: true });
if (existsSync(path.join(root, '.openai', 'hosting.json'))) {
  copyFileSync(path.join(root, '.openai', 'hosting.json'), path.join(dist, '.openai', 'hosting.json'));
}
