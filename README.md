`mongodb` `#assembler-school` `#master-in-software-engineering`

# Assembler School: MongoDB Intro Workshop <!-- omit in toc -->

In this workshop you will learn how to build backend apps with Node.js, MongoDB and Mongoose.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Contents and Branches Naming Strategy](#contents-and-branches-naming-strategy)
- [Workshop Material](#workshop-material)
- [What is MongoDB?](#what-is-mongodb)

## Getting Started

### The repo

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/mongodb-intro-workshop.git
```

## Dependencies

Before we can get started you will need to make sure that all the necessary dependencies are installed in your system.

### Node.js

You can install it by following the instructions [in the official docs](https://nodejs.org/en/) (we recommend that you install the version that is named _Current_).

To verify that you have installed it correctly, you can run the following command from the terminal that should output the version installed:

```bash
$ node --version
v15.5.0
```

### MongoDB

You find the instructions on installing the MongoDB Community Server locally in the [official docs](https://www.mongodb.com/try/download/community).

To verify that you have installed it correctly, you can run the following command from the terminal which should open the mongodb shell:

```bash
$ mongo
MongoDB shell version v4.2.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("5087a5c3-90ae-4a3b-8039-4a9cec0baa21") }
MongoDB server version: 4.2.6
Server has startup warnings:
2020-12-29T08:34:35.711+0100 I  CONTROL  [initandlisten]
2020-12-29T08:34:35.712+0100 I  CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2020-12-29T08:34:35.712+0100 I  CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2020-12-29T08:34:35.739+0100 I  CONTROL  [initandlisten]
---
Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

>
```

### MongoDB for VS Code Extension

Furthermore, you can also install the MongoDB for VS Code extension for an easier integration inside VS Code. You can learn more in the [official docs](https://docs.mongodb.com/mongodb-vscode/).

<img src='src/img/mongo-db-for-vs-code-extension.png' width='600' alt='promise states'>

### MongoDB Compass

For this workshop you should have installed MongoDB Compass which is the official GUI tool for working with MongoDB databases. Your can lean how to install it in the [official docs](https://www.mongodb.com/products/compass).

<img src='src/img/mongo-db-compass.png' width='600' alt='promise states'>

### Project Dependencies

Then, you will have to install all the project dependencies with npm in the root folder:

```bash
$ npm install
```

## Contents and Branches Naming Strategy

The repository is made up of several branches that include the contents and exercises of each section.

The branches follow a naming strategy like the following:

- `{NN}-exercise`: includes the main contents and the instructions of the exercises
- `{NN}-exercise-solution`: includes the solution of the exercises

### Fetch all Branches

In order to fetch all the remote branches in the repository you can use the following command:

```bash
$ git fetch --all

# List both remote-tracking branches and local branches
$ git branch --all
```

Then, you can create a local branch based on a remote branch with the following command:

```bash
$ git checkout -b <new_branch_name> <remote_branch_name>
```

## Workshop Material

- [Slides](https://docs.google.com/presentation/d/1cjqOU-Ox4V0caYiDQVsjMiNEj-l8Tnuw8JFm6IW1udA/edit?usp=sharing)

## What is MongoDB?

...

## Author <!-- omit in toc -->

[Dani Lucaci](https://github.com/danilucaci)

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)
