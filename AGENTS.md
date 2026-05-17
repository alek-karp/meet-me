# AGENTS.md

Guidance for coding agents working in this repository.

## Tailwind
Use named Tailwind scale values (e.g. `text-zinc-400`, `bg-zinc-900`, `border-zinc-800`). Never use arbitrary hex values in class names (e.g. `text-[#999]`, `bg-[#1e1e1e]`). Exception: one-off values explicitly specified by the user.

## Comments
Avoid section-label comments that only restate the layout or nearby code.

## Commits
Use Conventional Commit subjects with a scope, e.g. `feat(landing): use photo avatar`; `lefthook` verifies this on commit.
