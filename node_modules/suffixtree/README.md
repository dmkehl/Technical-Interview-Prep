# Suffix Tree in JavaScript

A [suffix tree](https://en.wikipedia.org/wiki/Suffix_tree) is a data structure that allows for performant checking of substrings within a particular string.

Conceptually, the construction of the suffix tree is explained in [this video](https://www.youtube.com/watch?v=VA9m_l6LpwI).

I did this as an academic exercise to build a data structure of low-level complexity in TypeScript. ([View source code](suffixtree.ts).) If you need a production-ready suffix tree implementation, be careful, this has not been exhaustively tested or optimized for performance.

## Installation

```
$ npm install suffixtree
```

## Usage

```
import SuffixTree from 'suffixtree';

suffixTree = new SuffixTree('poloyolo')

suffixTree.indexesOf('olo')
    => [1, 5]

suffixTree.contains('go')
    => false

```