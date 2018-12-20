# API - ZV

**Warning: This project is not currently in use and is used for research purposes.**

## Table of Contents
- [API - ZV](#api---zv)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
  - [Running](#running)
    - [Docker Compose](#docker-compose)
    - [Local](#local)
      - [Navigate to Source Dir](#navigate-to-source-dir)
      - [Install Dependencies](#install-dependencies)
      - [Run the Mongo Daemon](#run-the-mongo-daemon)
      - [Run the ZV API Project](#run-the-zv-api-project)

## Development

This project uses [Loopback3](https://github.com/strongloop/loopback) for development. Loopback allows
you to generate web services with ease. This project tries to have parity with the features on the
[Borzoo](https://github.com/Zevere/WebAPI-Borzoo) project.

Frontend services and models are created with the [Loopback SDK Builder](https://github.com/mean-expert-official/loopback-sdk-builder).

To regenerate the frontend services and models, use `npm run build:sdk`.

## Running

### Docker Compose
This project is setup with Docker Compose. Run `docker-compose up` in the same directory as the
`docker-compose.yml` to run mongo and the project.

### Local

If you do not wish to use Docker, you may run the project locally with the following steps:

#### Navigate to Source Dir

```sh
$ cd zv-api
```

#### Install Dependencies

```sh
$ npm i
```

#### Run the Mongo Daemon

> Note: If you do not have Mongo installed, [download it here.](https://www.mongodb.com/download-center)

```sh
$ mongod
```

#### Run the ZV API Project

```sh
$ npm start
```