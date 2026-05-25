# zephex.in

Personal portfolio built with Next.js 16, React 19, Tailwind CSS, and DaisyUI.

```bash
bun dev
```

Opens at [localhost:3000](http://localhost:3000).

## Stack

- **Framework** — Next.js (App Router, Turbopack)
- **Styling** — Tailwind CSS v3 + DaisyUI v4
- **Fonts** — Playfair Display + Inter (Google Fonts)
- **Icons** — react-icons
- **GitHub** — Octokit REST (server-side)
- **Runtime** — Bun

## Structure

```
src/
├── app/           # Layout, page, globals
├── fonts/         # Font config
└── components/
    ├── lib/       # Data + GitHub API client
    ├── ui/        # Layout components
    └── utils/     # Reusable UI pieces
```
