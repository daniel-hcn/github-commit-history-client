# Github Commit History - Client

## Description

Web Application that shows the branches and commits history of a specific Github Repository.

**This application can only work alongside the project's backend service**, which can be found at https://github.com/daniel-hcn/github-commit-history-server

## Requirements

- NodeJs 14 or later
- Docker 20 or later

## Running the application

It is **strongly recommended** to run the application through Docker with the command below. This will generate the docker image and container, exposing the service at port **3000**.

```bash
$ docker-compose up -d
```

## Usage

After starting the service, navigate to **http://localhost:3000/** to access the UI in which a form will be rendered. You will be able to select the repository and the branches from which you want to visualize the commit history.

## Other commands available

The project contains several commands available, most of them being useful for a development environment.

```bash
# run project
$ npm run start

# execute tests
$ npm run test

# make a build
$ npm run build
```
