# AGENTS.md

Guidance for coding agents working in this repository.

## Project Summary
- Runtime: Bun
- Language: TypeScript (ESM)
- CLI entrypoint: `apps/cli/src/index.ts`
- Package/bin name: `decision-timeline`
- Infra entrypoint: `infra/cdk/bin/app.ts` (AWS CDK, OpenSearch Serverless vector stack)

## Setup
1. Install dependencies: `bun install`
2. Run locally: `bun run decision-timeline`

## Common Commands
- Dev run: `bun run dev`
- CLI run: `bun run decision-timeline`
- Index decisions: `bun run decision-timeline index-decisions <repoUrl> <filePath>`
- Query decisions: `bun run decision-timeline query-decisions --query "<text>" --repo <owner/repo>`
- Get decision by id: `bun run decision-timeline get-decision <decision_id>`
- CLI deps install: `bun run cli:install`
- Infra install: `bun run infra:install`
- Infra synth: `bun run infra:synth`
- Infra deploy: `bun run infra:deploy -- [cdk args]`

## Code Conventions
- Keep TypeScript strict-friendly and avoid `any` unless justified.
- Prefer small, focused modules under `apps/cli/src/`.
- Keep decision memory code in `apps/cli/src/memory/` and CLI wrappers in `apps/cli/src/commands/`.
- Keep infrastructure code focused under `infra/cdk/`.
- For CDK code, separate concerns by layer:
  - `infra/cdk/bin/` for entrypoints/composition
  - `infra/cdk/lib/config/` for context parsing/defaults
  - `infra/cdk/lib/stacks/` for stack assembly
  - `infra/cdk/lib/opensearch/` for OpenSearch policy/resource helpers
- Keep side effects in entrypoints; keep helpers pure where possible.
- Use clear error messages for CLI and GitHub API failures.
- Add and update JSDoc comments for functions, especially when behavior, inputs, outputs, or edge cases are non-obvious.

## Commit Convention
- Use Conventional Commit format for every commit: `<type>(<scope>): <summary>`
- Allowed `type`: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `perf`, `build`, `ci`, `revert`
- Required `scope`: use a short area like `cli`, `github`, `types`, `output`, `docs`, `deps`
- Keep `<summary>` imperative, lowercase, and under 72 characters. Do not end with a period.
- Optional body: explain why the change was needed and any important tradeoffs.
- Example: `feat(github): add file history commit fetcher`
- Example: `chore(docs): define commit message standard`

## Change Policy
- Make minimal, targeted changes.
- Do not rename public CLI commands without explicit request.
- Preserve existing module structure unless a refactor is necessary.
- Update this file if project commands or structure change.

## Validation
Before finishing substantial changes:
1. Run `bun run decision-timeline --help` for a smoke test.
2. If you add tests or checks later, run them and report results.

