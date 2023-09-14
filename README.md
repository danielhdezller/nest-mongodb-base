# Nest Base Project with MongoDb

A Nestjs with MongoDb template to start a new project.

## Steps to run the project:

- if you haven't already: copy `.env.example` to `.env` at the project folder level.

```bash
$ cd ./docker/project
# Db and application will start, on mac if it is the first time it takes some time due to the copy of the volumes.
$ docker-compose up
```

## Swagger:

After running it you can find the Swagger documentation at: http://localhost:3000/docs#/

## Steps to run the Tests:

- if you haven't already: copy `.env.example` to `.env` at the project folder level.

```bash
$ cd ./docker/test-db
# The Db for testing proposes will start.
$ docker-compose up
# To return to the project folder.
$ cd ../../project
# To run the test.
$ yarn test
```

## Stay in touch

- Author - [Daniel Hernández](https://github.com/danielhdezller)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/daniel-hernandez-ller/)
  
![officer-peña](https://github.com/danielhdezller/nest-mongodb-base/assets/63543622/a90a29e9-d413-4be6-86e1-a720b88d70d7)
