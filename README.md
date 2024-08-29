# A simple node.js API with the Express Framework

This should be a simple basic construction of an API via the express framework.
You can use this boilerplate code to start with your own API. Adding new features,
functionalities etc. Feel free, its up to you. Hope you enjoy this!

## Installation

- add needed environment variables to a `.env` file

  ```
  DATABASE_URL=<database url to your postgres server>
  API_PORT=<port on which the api is listening on>
  JWT_SECRET=<jwt secret for your authentication>
  ```

- just clone the github repo and start `npm install` and after that `npm run dev`
  or you can use `npm run dev:nodemon` to automatically reload the server after code changes

## NEW FEATURES

- added docker container for postgres db for development purposes (no need for a postgres database on your system)
- added helmet to secure http headers
- added supertest and jest for unit and integration tests
- added .env.local file to give you a overview of the underlying env variables you can use
- adding error handling for routes (including async functions)
- using prisma as an ORM (using postgres)
- authentication via JWT
- property validation on todos endpoint

## TODOS

- update test suites, so that either all generated test data will be removed afterwards or using another database for testing
- added winston for logging in production (dont use console.log in production)
- added some user functionality (update, remove, validations, etc.)
- adding support for passport (using other authentication providers)
- added webpack
- added swagger ui for extra documentation

## Stay in touch

- Author - [Christian Pietsch](https://github.com/cpietsch82)
- LinkedIn - [@LinkedIn](https://www.linkedin.com/in/christian-pietsch-57247183/)

## License

[MIT licensed](LICENSE).
