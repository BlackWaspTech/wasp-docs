# Wasp GraphQL Libraries

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/BlackWaspTech/wasp-graphql/issues)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Demo and documentation for the Wasp GraphQL family of libraries.

Built on [Gatsby](https://www.gatsbyjs.org/).

## Included libraries

### [`wasp-graphql`](https://github.com/BlackWaspTech/wasp-graphql)

[![npm](https://img.shields.io/npm/v/wasp-graphql.svg)](https://www.npmjs.com/package/wasp-graphql)
[![Build Status](https://travis-ci.com/dentemple/wasp-graphql.svg?branch=master)](https://travis-ci.com/dentemple/wasp-graphql)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/wasp-graphql.svg)](https://www.npmjs.com/package/wasp-graphql)

Execute a GraphQL query exactly like you would a `fetch` request. No dependencies included.

Takes a `url` and an `init` object as input. Returns a Promise containing the results of the request.

```js
// fetch
fetch('/graphql', { body: JSON.stringify({ query: '{ foo { bar baz } }' }) })

// query
import { query } from 'wasp-graphql'
query('/graphql', { fields: '{ foo { bar baz } }' })

// Logging the results
fetch(url, init)
  .then(res => res.json())
  .then(json => console.log(json))
query(url, init)
  .then(res => res.json())
  .then(json => console.log(json))
```

[Read more.](https://github.com/BlackWaspTech/wasp-graphql)

### [`redux-wasp`](https://github.com/BlackWaspTech/redux-wasp)

[![npm](https://img.shields.io/npm/v/redux-wasp.svg)](https://www.npmjs.com/package/redux-wasp)
[![Build Status](https://travis-ci.org/BlackWaspTech/redux-wasp.svg?branch=master)](https://travis-ci.org/BlackWaspTech/redux-wasp)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/redux-wasp.svg)](https://www.npmjs.com/package/redux-wasp)

Automates GraphQL queries for an existing Redux codebase.

[Read more.](https://github.com/BlackWaspTech/redux-wasp)

### [`redux-wasp-apollo`](https://github.com/BlackWaspTech/redux-wasp-apollo)

Provides integration between Redux and Apollo.

Keeps apollo-state-cache and the redux store in sync whenever you execute an Apollo query.

[Read more.](https://github.com/BlackWaspTech/redux-wasp-apollo)

---

## Code of Conduct

Read our Code of Conduct [here](CODE-OF-CONDUCT.md).

## License

Free and Open Source under the [MIT License](LICENSE).
