<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

It is my test project for learning Nest.js, Typescript and interaction with PostgreSQL database.

Technologies used:
* Nest.js/Typescript
* OOP
* JWT
* TypeORM
* PostgreSQL
* Swagger

Tested with Postman

There were implemented features of Instagram:
* Auth with roles
* CRUD user
* CRUD post
* Create and delete comments
* Like posts and comments
* Get user feed

## Installation

```bash
$ npm install
```

## Running the app

You need to have Postgres DB instance and specify connection settings in the src/app.module.ts
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
