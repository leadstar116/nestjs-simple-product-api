NestJS Simple Product API

## Description
Implemented the following API in the simplest way with Nest.js. <br/>

Used PostgreSQL for Users and JWL for Authentication. <br/>
Reset, Balance and Event are not using real database, they using internal memory for just demonstration!

### Live Demo
https://dry-forest-53601.herokuapp.com/api

### Desired Actions
<b> [GET] /products?currency=[code] </b><br/>
This returns all products with the converted price based on the currency.<br/>
priceUSD refers to the price in USD and price refers to the price in the requested currency.<br/>

<b> [GET] /currencies </b><br/>
This returns all currencies.<br/>

### Screenshot
<img src="https://content.screencast.com/users/SupremeDev/folders/Default/media/b5e1c5ed-7e0a-4651-975d-2725dea3d202/screenshot.png" />
<img src="https://content.screencast.com/users/SupremeDev/folders/Default/media/a9740e4a-224b-4e45-b569-89b5fba44768/screenshot.png" />
<img src="https://content.screencast.com/users/SupremeDev/folders/Default/media/cb595e89-99eb-4d57-81d1-08be0a0e88da/screenshot.png" />

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
