# Project Title

A brief description of what this project does and who it's for

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

This project can be installed using npm, yarn, or pnpm.

```bash
// With npm
npm install --save-dev nomdupackage

// With pnpm
pnpm install -D nomdupackage

// With Yarn
yarn install -D nomdupackage
```

## Usage

```js
import A3Logger, { defaultConfig } from 'nomdupackage'

const logger = new A3Logger(defaultConfig)

// ...

logger.log('log')
logger.error('log')
logger.success('log')
```
