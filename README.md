## Project setup

```bash
#project set up
$ nest new project

# we go to the right folder
$ cd project

# install all dependencies
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## typeorm + MySQL setup

```bash
## install typeorm
$ npm install --save @nestjs/typeorm typeorm mysql2
```
---
## .ENV file access

```bash
$ npm i --save @nestjs/config
```
## Add something - app.module.ts

```bash
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
  isGlobal: true,
    });
  ],
})
export class AppModule {}
```
---

## passport 

```bash
$ npm install --save @nestjs/passport passport passport-local
```
```bash
$ npm install --save-dev @types/passport-local
```
---

## JWT TOKEN
```bash
$ npm install --save @nestjs/jwt passport-jwt
```
```bash
$ npm install --save-dev @types/passport-jwt
```