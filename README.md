This repo has a repro for the Deno feature request about @types resolution.

### Usage

`main.ts` and `main-with-comment.ts` are the same, except `main-with-comment.ts` has `@ts-types` comments.

To repro the issue:
1. `deno check main.ts` - this does not report issues, even though it has incorrect types.
2. `deno check main-with-comment.ts` - this reports issues, as expected.
