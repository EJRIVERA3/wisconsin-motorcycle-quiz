# Wisconsin Motorcycle Permit Prep

Static mobile-first practice quiz for the Wisconsin motorcycle handbook.

## What it does

- Starts 10, 25, 50, 100, or full-length quizzes
- Randomizes questions on every new run
- Shows instant feedback, explanations, and handbook page references
- Supports retrying missed questions
- Persists in-progress quizzes across refreshes
- Includes light and dark mode

## Run locally

Open `index.html` through any static server, for example:

```bash
python -m http.server 4173
```

Then browse to `http://127.0.0.1:4173/`.

## Deploy

This repository is designed for Cloudflare Pages as a plain static site:

- Build command: none
- Output directory: repository root
- Entry file: `index.html`

