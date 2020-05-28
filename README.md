<h1 align="center">Marvel API 🦸</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Consuming the official API of Marvel with React

## Install

```sh
yarn install
```

## Configure keys

```sh
cp .env.example .env.local
nano .env.local # put your key

```

## Usage

```sh
yarn start
```

## Tests

```sh
# regular test
yarn test

# test in watch mode
yarn test:watch

# coverage
yarn test:cov
```

## E2E tests

```sh
# headless browser
yarn test:e2e

# running on chrome
yarn test:e2e:browser
```

## Build

```sh
# build for production
yarn build

# analyzing bundle size
yarn analyze
```

## Lint

```sh
# check lint issues
yarn lint

# fix lint issues
yarn lint:fix
```

## TODO

- [ ] Add unit tests
- [ ] Add E2e tests
- [ ] Add accessibility support
- [ ] Add CONTRIBUTE file
- [ ] Add storybook
- [ ] Improve project to receive all kind of data
- [ ] Improve Navbar to be used in various pages
- [ ] Create component ExceptionHandler
- [ ] Add button to return home

## Build with

- [cra](https://create-react-app.dev) - Most common boilerplate to start react
  projects
- [axios](https://github.com/axios/axios) - Promise based + battle tested http
  consumer for the browser and node.js
- [styled-components](https://www.styled-components.com) - Custom UI components
  with props based on scales
- [styled-system](https://styled-system.com) - Collection of functions to add
  style props to components
- [typescript](https://www.typescriptlang.org) - JavaScript extention to add
  types to the language
- [cypress](https://www.cypress.io/) - Created to easily test end to end
  front-end
- [store](https://github.com/marcuswestin/store.js/) - Store data on any browser
  (even IE6)

## Author

👤 **William G.**

- Website: https://www.linkedin.com/in/william-godoy-4bb919b5/
- Github: [@rap0so](https://github.com/rap0so)
- LinkedIn:
  [@william-godoy-4bb919b5](https://linkedin.com/in/william-godoy-4bb919b5)

## 📝 License

Copyright © 2020 [William G.](https://github.com/rap0so).<br /> This project is
[MIT](https://opensource.org/licenses/MIT) licensed.

---

_This README was generated with ❤️ by
[readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
