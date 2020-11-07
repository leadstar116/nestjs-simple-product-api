NestJS Simple Product API

## Description
Implemented the following API in the simplest way with Nest.js. <br/>

Used PostgreSQL for Users and JWL for Authentication. <br/>
Reset, Balance and Event are not using real database, they using internal memory for just demonstration!

### Live Demo


### Desired Actions


### Screenshot


## Installation

```bash
$ yarn install
```
### Database configuration
Install postgres latest version. Copy `.env.example -> .env` and config database variables.

```bash
$ yarn migration:run
```

## Running the app

```bash
# start
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

Open browser and visit `localhost:8080/api`.

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
