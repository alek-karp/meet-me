#!/usr/bin/env bash
set -euo pipefail

commit_msg_file="${1:-}"

if [[ -z "$commit_msg_file" || ! -f "$commit_msg_file" ]]; then
	echo "Commit message file not found."
	exit 1
fi

subject="$(sed -n '1p' "$commit_msg_file")"

if [[ "$subject" =~ ^(Merge|Revert) ]] || [[ "$subject" =~ ^(fixup|squash)! ]]; then
	exit 0
fi

pattern='^(build|chore|ci|docs|feat|fix|perf|refactor|style|test)(\([a-z0-9._-]+\))?: .{1,72}$'

if [[ ! "$subject" =~ $pattern ]]; then
	echo "Invalid commit message format."
	echo "Expected: type(scope): short imperative summary"
	echo "Example: feat(landing): use photo avatar"
	echo ""
	echo "Allowed types: build, chore, ci, docs, feat, fix, perf, refactor, style, test"
	echo "Scope is optional but must be lowercase when used."
	echo "Subject must be 72 characters or fewer."
	exit 1
fi