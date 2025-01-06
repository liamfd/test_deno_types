This repo has a repro for the Deno feature request about @types resolution (https://github.com/denoland/deno/issues/27569).

### Usage

`main.ts` and `main-with-comment.ts` are the same, except `main-with-comment.ts` has `@ts-types` comments.

To repro the issue:
1. `deno check main.ts` - this does not report issues, even though it has incorrect types.
2. `deno check main-with-comment.ts` - this reports issues, as expected.

Output from my machine:

```sh
❯ deno --version
deno 2.1.4 (stable, release, aarch64-apple-darwin)
v8 13.0.245.12-rusty
typescript 5.6.2

❯ deno check main.ts
Check file:///Users/liam/test_deno_types/main.ts

❯ deno check main-with-comment.ts
Check file:///Users/liam/test_deno_types/main-with-comment.ts
error: TS2322 [ERROR]: Type '{ <T extends readonly [unknown, ...unknown[]], TResult>(collection: T, iteratee: TupleIterator<T, TResult>): { [K in keyof T]: TResult; }; <T, TResult>(collection: T[] | null | undefined, iteratee: ArrayIterator<...>): TResult[]; <T, TResult>(collection: List<...> | ... 1 more ... | undefined, iteratee: ListIterator...' is not assignable to type 'string'.
const foo: string = _.map; // this should throw a type error, but does
      ~~~
    at file:///Users/liam/test_deno_types/main-with-comment.ts:6:7

TS2322 [ERROR]: Type '(effect: EffectCallback, deps?: DependencyList | undefined) => void' is not assignable to type 'string'.
const bar: string = useEffect; // this should throw a type error, but does
      ~~~
    at file:///Users/liam/test_deno_types/main-with-comment.ts:9:7

Found 2 errors.
```
