# FDE field notes

Concise research based on five real employer postings reviewed November 12, 2026. VitePress documentation site, with internship and full-time routes, required/preferred skills, source links and explicit eligibility caveats.

## Run

Node 24 recommended.

```sh
npm ci
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## Publish

GitHub Pages: Settings → Pages → Source → GitHub Actions. Push to `main`. The workflow builds and deploys `docs/.vitepress/dist`. Base path is `/fde-role-research/`; update config if renaming the repo.

## Content

- `docs/index.md`: short role overview and routes by career stage
- `docs/jobs.md`: standardized posting summaries and eligibility
- `docs/skills.md`: sourced skill map and clearly labeled preparation advice
- `docs/sources.md`: source register, limitations and refresh method

Employer text remains owned by its respective authors. This repository contains concise research paraphrases, not copied job descriptions.
