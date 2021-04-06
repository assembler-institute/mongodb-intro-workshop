`mongodb` `#assembler-school` `#master-in-software-engineering`

# Assembler School: MongoDB Intro Workshop <!-- omit in toc -->

In this workshop you will learn how to build backend apps with Node.js, MongoDB and Mongoose.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Contents and Branches Naming Strategy](#contents-and-branches-naming-strategy)
- [Workshop Material](#workshop-material)
- [What is MongoDB?](#what-is-mongodb)
- [Getting Started](#getting-started-1)
- [Basic MongoDB Commands](#basic-mongodb-commands)
- [MongoDB Query Operators](#mongodb-query-operators)
- [MongoDB Update Operators](#mongodb-update-operators)
- [Removing Documents From MongoDB](#removing-documents-from-mongodb)
- [mongoose](#mongoose)
- [Node.js MVC Folder Structure](#nodejs-mvc-folder-structure)
- [Connecting With mongoose](#connecting-with-mongoose)
- [mongoose Schemas](#mongoose-schemas)
- [Creating Documents](#creating-documents)
- [Mongoose Schema Hooks](#mongoose-schema-hooks)
- [Safer Way of Storing Passwords](#safer-way-of-storing-passwords)
- [Mongoose Schema Exercises](#mongoose-schema-exercises)

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
2020-11-29T08:34:35.711+0100 I  CONTROL  [initandlisten]
2020-11-29T08:34:35.712+0100 I  CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2020-11-29T08:34:35.712+0100 I  CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2020-11-29T08:34:35.739+0100 I  CONTROL  [initandlisten]
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

MongoDB is a document-based database built for modern application developers and for the cloud era.

It’s a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents.

### Common Terms Used in MongoDB

#### `_id`

This is a field required in every MongoDB document. It represents a unique value in the MongoDB document and it’s the document's primary key. It is built using the MongoDB `ObjectId()`.

```js
ObjectId("507f191e810c19729de860ea");
```

```json
{
  "_id": 3,
  "item": "xyz",
  "price": 5,
  "quantity": 10
}
```

#### Collection

A grouping of MongoDB documents. A collection is the equivalent of a table in MySQL.

```json
[
  {
    "_id": 1,
    "item": "abc",
    "price": 10,
    "quantity": 2
  },
  {
    "_id": 2,
    "item": "jkl",
    "price": 20,
    "quantity": 1
  },
  {
    "_id": 3,
    "item": "xyz",
    "price": 5,
    "quantity": 10
  }
]
```

#### Document

A record in a MongoDB collection is basically called a document. The document, in turn, will consist of field name and values.

```json
{
  "_id": 2,
  "item": "jkl",
  "price": 20,
  "quantity": 1
}
```

#### Cursor

A pointer to the result set of a query. Clients can iterate through a cursor to retrieve results. Instead of returning all the docs in a collection, we can use cursors to paginate the results in chunks of 20 documents at a time.

```bash
> db.persons.find({}, { _id: 1 }).pretty()
{ "_id" : ObjectId("5ebffb771559bba7ae3dbbf5") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbbf6") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbbf7") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbbf8") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbbf9") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbbfa") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbbfb") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbbfc") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbbfd") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbc06") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbc07") }
{ "_id" : ObjectId("5ebffb771559bba7ae3dbc08") }
Type "it" for more
>
```

#### Fields

A key-value pair in a document. A document has zero or more fields. Fields are analogous to columns in relational databases.

```json
{
  "_id": 2,
  "item": "jkl",
  "price": 20,
  "quantity": 1
}
```

As a programmer, you think in objects. MongoDB does too.

### MongoDB as a Document Database

MongoDB is a document database, which means it stores data in JSON-like documents. They believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model.

```json
{
  "_id": "5cf0029caff5056591b0ce7d",
  "firstname": "Jane",
  "lastname": "Wu",
  "address": {
    "street": "1 Circle Rd",
    "city": "Los Angeles",
    "state": "CA",
    "zip": "90404"
  },
  "hobbies": ["surfing", "coding"]
}
```

## Getting Started

### Connecting to MongoDB

In order to connect to a MongoDB database we can use a connection string which uses the following format:

```
mongodb://127.0.0.1:27017/{db_name}
```

If we just want to connect to a localhost server we can use the following format which uses the default mongo port:

```
mongodb://127.0.0.1
```

## Basic MongoDB Commands

### `> help`

First of all, if we open the mongodb shell we can use the help command to see all the operations we can perform.

```bash
> help
        db.help()                    help on db methods
        db.mycoll.help()             help on collection methods
...

        show dbs                     show database names
        show collections             show collections in current database
...
       use <db_name>                set current database
        db.foo.find()                list objects in collection foo
        db.foo.find( { a : 1 } )     list objects in foo where a == 1
        it                           result of the last line evaluated;
    use to further iterate
...
```

### `> db.collection.help`

With this command we can see the help of the commands we can perform on a single collection.

```bash
> db.persons.help()
DBCollection help
        db.persons.find().help() - show DBCursor help
        db.persons.bulkWrite( operations, <optional params> ) - ...
        db.persons.count( query = {}, <optional params> ) - ...
        db.persons.countDocuments( query = {}, <optional params> ) - …
...
```

### `mongoimport`

Using the `mongoimport` tool we can import a json file to populate the database.

```bash
# use the src/mongodb/persons-data.json file from the workshop repository

$ mongoimport src/mongodb/persons-data.json -d contact -c persons --jsonArray

2020-11-30T14:43:43.287+0100    connected to: mongodb://localhost/
2020-11-30T14:43:43.708+0100    5000 document(s) imported successfully. 0 document(s) failed to import.
```

### `> show dbs`

With this command we can list all the current databases in our server.

```bash
> show dbs
admin      0.000GB
config     0.000GB
contact    0.005GB
local      0.000GB
products   0.000GB
>
```

### `> use contact`

With the use command we can switch to a particular database.

```bash
> use contact
switched to db contact
>
```

### `> show collections`

With this command we can get a listing of all the collections in a database.

```bash
> show collections
persons
>
```

### `> count()`

Once you have imported all the data you can see if the database has been populated with the count() method.

```bash
> db.persons.count()
5000
```

### `> use demoDB`

In MongoDB it’s much easier to create a new database. We can just specify the db name with the use command.

```bash
> use demoDB
switched to db demoDB

> show dbs
admin      0.000GB
config     0.000GB
contact    0.003GB
local      0.000GB
products   0.000GB
>
```

### Creating a Collection

To create a new collection we can simply use an insert (`insertOne`, `insertMany`) command on a collection name. In this case we create a new student in the `students` collection.

```bash
> db.students.insertOne({ name: "alex", age: 24 });
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5fec89f286a8cec146bca06c")
}
>
```

### `insertMany()`

With the `insertMany()` command we can create several documents at the same time. Here we can also see the magic of NoSQL databases in that the documents don’t have to follow the same schema.

```bash
> db.students.insertMany([{ name: "maria", age: 32, grades: [9, 8.5, 6] }, { name: "john", age: 20, grades: [5, 6, 4] }]);
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5fec89f986a8cec146bca06d"),
                ObjectId("5fec89f986a8cec146bca06e")
        ]
}
```

### `.find({})`

With the `.find({})` command we can list all the documents in a collection.

```bash
> db.students.find({}).pretty()
{
        "_id" : ObjectId("5fec89f286a8cec146bca06c"),
        "name" : "alex",
        "age" : 24
}
{
        "_id" : ObjectId("5fec89f986a8cec146bca06d"),
        "name" : "maria",
        "age" : 32,
        "grades" : [ 9, 8.5, 6 ]
}
{
        "_id" : ObjectId("5fec89f986a8cec146bca06e"),
        "name" : "john",
        "age" : 20,
        "grades" : [ 5, 6, 4 ]
}
>
```

### `.count()`

With the `.count()` command we can count the number of documents in a collection.

```bash
> db.students.count()
3
```

### `.sort()`

With the .sort() command we can sort the results in a collection.

```js
.sort({ age: 1 }): // ascending sort
.sort({ age: -1 }): // descending sort
```

```bash
> db.students.find({}).sort({ age: 1 }).pretty()
{
        "_id" : ObjectId("5fec89f986a8cec146bca06e"),
        "name" : "john",
        "age" : 20,
        "grades" : [ 9, 8.5, 6 ]
}
{
        "_id" : ObjectId("5fec89f286a8cec146bca06c"),
        "name" : "alex",
        "age" : 24
}
{
        "_id" : ObjectId("5fec89f986a8cec146bca06d"),
        "name" : "maria",
        "age" : 32,
        "grades" : [ 9, 8.5, 6 ]
}
>
```

### `.limit()`

With the `.limit()` command we limit the number of documents we get.

```bash
>  db.students.find({}).sort({ age: 1 }).limit(2).pretty()
{
        "_id" : ObjectId("5fec89f986a8cec146bca06e"),
        "name" : "john",
        "age" : 20,
        "grades" : [ 5, 6, 4 ]
}
{
        "_id" : ObjectId("5fec89f286a8cec146bca06c"),
        "name" : "alex",
        "age" : 24
}
```

### Projection

Using projection we can query for only part of the keys in a document.

`{ name: 1 }: include the name key`

```bash
> db.students.find({}, { name: 1 }).pretty()
{ "_id" : ObjectId("5fec89f286a8cec146bca06c"), "name" : "alex" }
{ "_id" : ObjectId("5fec89f986a8cec146bca06d"), "name" : "maria" }
{ "_id" : ObjectId("5fec89f986a8cec146bca06e"), "name" : "john" }
>
```

As we can see the `_id` is always included. If we want to exclude it we can do so using:

`{ name: 1, _id: 0 }: 0 excludes a field from the result`

```bash
> db.students.find({}, { name: 1, _id: 0 }).pretty()
{ "name" : "alex" }
{ "name" : "maria" }
{ "name" : "john" }
>
```

### Excluding Elements

If we only exclude an element using projection, all the other fields will be included in the result.

```bash
> db.students.find({}, { grades: 0 }).pretty()
{
        "_id" : ObjectId("5fec89f286a8cec146bca06c"),
        "name" : "alex",
        "age" : 24
}
{
        "_id" : ObjectId("5fec89f986a8cec146bca06d"),
        "name" : "maria",
        "age" : 32
}
{
        "_id" : ObjectId("5fec89f986a8cec146bca06e"),
        "name" : "john",
        "age" : 20
}
>
```

## MongoDB Query Operators

Using the MongoDB Query Operators we can easily find documents in collections.

`$eq, $ne, $in, $nin, $and, $or, ...`

### Import the Data

For these steps you should import the data we provide so that you can perform the queries at the same time.

`mongoimport src/mongodb/movies-data.json -d moviesData -c movies --jsonArray`

```bash
# Switch to the moviesData database
> use moviesData
switched to db moviesData

> db.movies.count()
97
```

### `$eq`

Using this operator we can query for equality of elements.

```bash
> db.movies.find({ name: { $eq: "Homeland" } }, { name: 1 }).pretty();
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62b"), "name" : "Homeland" }
```

### `$eq` Shorthand

We can also achieve the same result by using the comparison value as a value of the property we are searching for.

```bash
> db.movies.find({ name: "Homeland" }, { name: 1 }).pretty();
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62b"), "name" : "Homeland" }
```

### `$ne`

Using this operator we can query for elements that are not equal to the value.

```bash
> db.movies.find({ name: { $ne: "Homeland" } }, { name: 1 }).limit(5).pretty();
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "name" : "Bitten" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62d"), "name" : "Under the Dome" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62e"), "name" : "The 100" }
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62f"),
        "name" : "Person of Interest"
}
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b630"), "name" : "Grimm" }
```

### Comparison Operators

We can use the MongoDB comparison operators such as: `$gt`, `$gte`, `$lt` or `$lte` to search for documents.

```bash
> db.movies.find({ runtime: { $gt: 60 }}, { name: 1, runtime: 1 }).limit(5).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b66d"),
        "name" : "The Voice",
        "runtime" : 120
}
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b66e"),
        "name" : "Dancing with the Stars",
        "runtime" : 120
}
```

```bash
> db.movies.find({ runtime: { $gte: 60 }}, { name: 1, runtime: 1 }).limit(5).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62b"),
        "name" : "Homeland",
        "runtime" : 60
}
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"),
        "name" : "Bitten",
        "runtime" : 60
}
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62d"),
        "name" : "Under the Dome",
        "runtime" : 60
}
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62e"),
        "name" : "The 100",
        "runtime" : 60
}
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62f"),
        "name" : "Person of Interest",
        "runtime" : 60
}
```

### `$in`

Using this operator we can search for documents that match any of the values in the array.

```bash
> db.movies.find({ runtime: { $in: [ 30, 120 ]}}, {runtime: 1}).pretty()
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b642"), "runtime" : 30 }
...
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b66a"), "runtime" : 30 }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b66d"), "runtime" : 120 }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b66e"), "runtime" : 120 }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b671"), "runtime" : 30 }
...
```

### `$nin`

Using this operator we can search for documents that do not match any of the values in the array. It works exactly as the opposite of the `$in` operator.

```bash
> db.movies.find({ runtime: { $nin: [ 30, 120 ]}}, {runtime: 1}).pretty()
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62b"), "runtime" : 60 }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "runtime" : 60 }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62d"), "runtime" : 60 }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62e"), "runtime" : 60 }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62f"), "runtime" : 60 }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b630"), "runtime" : 60 }
...
```

### Sub Document Matches

In MongoDB we can search for sub documents by simply accessing their nested properties.

It’s important to note that for this to work we need to include quotes around the properties we are comparing.

```bash
> db.movies.find({ "rating.average": 8 }, {"rating.average": 1}).limit(1).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b631"),
        "rating" : {
                "average" : 8
        }
}
```

### Array Elements

In MongoDB we can search for array elements as if they were regular fields.

```bash
> db.movies.find({ genres: "Drama" }, {genres: 1}).limit(1).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62b"),
        "genres" : [ "Drama", "Thriller", "Espionage" ]
}

> db.movies.find({ genres: "Drama" }, {genres: 1}).count()
68
```

### Array Elements In Sub Documents

We can also search for array elements nested inside other documents.

```bash
> db.movies.find({ "schedule.days": "Sunday" }, {"schedule.days": 1}).limit(1).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62b"),
        "schedule" : {
                "days" : [ "Sunday" ]
        }
}
> db.movies.find({ "schedule.days": "Sunday" }, {"schedule.days": 1}).count()
22
```

### Logical Operators

We can use the `$and`, `$not`, `$nor`, `$or` logical operators to search for documents.

```bash
> db.movies.find({ $and: [{ language: "English" }, { "rating.average": 8 }] }, {language: 1 "rating.average": 1
}).limit(2).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b631"),
        "language" : "English",
        "rating" : {
                "average" : 8
        }
}
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b63e"),
        "language" : "English",
        "rating" : {
                "average" : 8
        }
}
```

### Logical Operators Shorthand

Just like the `$eq` operator, we can combine several search values without using the `$all: []` operator and we will have the same result.

```bash
> db.movies.find({ language: "English", "rating.average": 8 }, {language: 1, "rating.average": 1}).limit(2).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b631"),
        "language" : "English",
        "rating" : {
                "average" : 8
        }
}
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b63e"),
        "language" : "English",
        "rating" : {
                "average" : 8
        }
}
```

## MongoDB Update Operators

Using the MongoDB Update Operators and the updateMany() or updateOne() methods we can easily find and modify documents.

`$set, $inc, $min, $push, $pull, ...`

### `$inc`

Using this operator we can increment the value of a property by a specified value.

If we first search for a document using the following query:

```bash
> db.movies.find({ name: "Bitten" }, { name: 1, runtime: 1 })
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "name" : "Bitten", "runtime" : 60 }
```

We can see that it has a current runtime value of `60`.

Using the `$inc` operator we can increment its value by an amount.

```bash
> db.movies.updateOne({ name: "Bitten" }, { $inc: { runtime: 1 }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { name: 1, runtime: 1 })
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "name" : "Bitten", "runtime" : 61 }
```

### `$min`

This operator sets the value we pass to it if the current value in the document is greater that then one the operator receives.

If we first search for a document using the following query:

```bash
> db.movies.find({ name: "Bitten" }, { name: 1, runtime: 1 })
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "name" : "Bitten", "runtime" : 61 }
```

We can see that it has a current runtime value of `61`.

Using the `$min` operator we can set its value to be `40`.

```bash
> db.movies.updateOne({ name: "Bitten" }, { $min: { runtime: 40 }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { name: 1, runtime: 1 })
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "name" : "Bitten", "runtime" : 40 }
```

### Setting New Properties

We can easily set a new property of a document by just assigning a value to it. If the value already exists it gets overridden.

```bash
> db.movies.updateOne({ name: "Bitten" }, { $set: { myNewProp: 1000 }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { name: 1, myNewProp: 1 })
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "name" : "Bitten", "myNewProp" : 1000 }
```

### `$rename`

This operator allows us to change the property name of a document.

```bash
> db.movies.updateOne({ name: "Bitten" }, { $rename: { myNewProp: "myRenamedProp" }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { name: 1, myRenamedProp: 1 })
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "name" : "Bitten", "myRenamedProp" : 1001 }
```

### `$unset`

This operator allows us to remove properties of a document.

```bash
> db.movies.updateOne({ name: "Bitten" }, { $unset: { myRenamedProp: "" }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { name: 1, myRenamedProp: 1 })
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "name" : "Bitten" }
```

### `$push`

This operator allows us to add new elements to an array.

If we take a look at the document as it currently stands:

```bash
> db.movies.find({ name: "Bitten" }, { genres: 1 }).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"),
        "genres" : [
                "Drama",
                "Horror",
                "Romance"
        ]
}
```

We can see that the `genres` array has 3 elements.

Using the `$push` operator we can add new elements:

```bash
> db.movies.updateOne({ name: "Bitten" }, { $push: { genres: "Boring" } })
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { genres: 1 }).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"),
        "genres" : [
                "Drama",
                "Horror",
                "Romance",
                "Boring"
        ]
}
```

### `$each`

This operator allows us to add an array of new elements to an array.

```bash
> db.movies.updateOne({ name: "Bitten" }, { $push: { genres: { $each: ["a", "b", "c"] }}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { genres: 1 }).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"),
        "genres" : [
                "Drama",
                "Horror",
                "Romance",
                "Boring",
                "a",
                "b",
                "c"
        ]
}
```

### `$pop`

This operator allows us to remove the first or last item of an array.

Passing `1` as the value of the `$pop` operator removes the last element, while `-1` removes the first element.

#### Remove the last element with `1`

```bash
> db.movies.updateOne({ name: "Bitten" }, { $pop: { genres: 1 }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { genres: 1 }).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"),
        "genres" : [
                "Drama",
                "Horror",
                "Romance",
                "Boring",
                "a",
                "b"
        ]
}
```

#### Remove the first element with `-1`

```bash
> db.movies.updateOne({ name: "Bitten" }, { $pop: { genres: -1 }})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { genres: 1 }).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"),
        "genres" : [
                "Horror",
                "Romance",
                "Boring",
                "a",
                "b"
        ]
}
```

### `$pull`

This operator allows us to remove the elements of an array that match a query.

```bash
> db.movies.updateOne({ name: "Bitten" }, { $pull: { genres: { $in: ["a", "b"] }}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { genres: 1 }).pretty()
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"),
        "genres" : [
                "Horror",
                "Romance",
                "Boring"
        ]
}
```

## Removing Documents From MongoDB

In MongoDB it’s also very easy to remove documents using the `deleteOne()` or `deleteMany()` methods.

### `deleteOne()`

This method removes a single document from a collection.

```bash
> db.movies.find({ name: "Bitten" }, { name: 1 }).pretty()
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62c"), "name" : "Bitten" }
> db.movies.deleteOne({ name: "Bitten" })
{ "acknowledged" : true, "deletedCount" : 1 }
> db.movies.find({ name: "Bitten" }, { name: 1 }).pretty()
```

### `deleteMany()`

This method allows us to remove several documents from a collection.

If we execute the following query:

```bash
> db.movies.find({}, { name: 1 }).pretty()
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62b"), "name" : "Homeland" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62d"), "name" : "Under the Dome" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62e"), "name" : "The 100" }
{
        "_id" : ObjectId("5fec9a7c6a8ea453c3d1b62f"),
        "name" : "Person of Interest"
}
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b630"), "name" : "Grimm" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b631"), "name" : "Revenge" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b632"), "name" : "Gotham" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b633"), "name" : "True Detective" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b634"), "name" : "Arrow" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b635"), "name" : "Glee" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b636"), "name" : "The Flash" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b637"), "name" : "Continuum" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b638"), "name" : "The Amazing Race" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b639"), "name" : "Constantine" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b63a"), "name" : "Supernatural" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b63b"), "name" : "Penny Dreadful" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b63c"), "name" : "The Strain" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b63d"), "name" : "The Last Ship" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b63e"), "name" : "Lost Girl" }
{ "_id" : ObjectId("5fec9a7c6a8ea453c3d1b63f"), "name" : "True Blood" }
```

We can use some of the names with an `$in[]` filter to remove them from the database.

```bash
> db.movies.deleteMany({ name: { $in: ["Grimm", "Lost Girl", "The Strain"] }})
{ "acknowledged" : true, "deletedCount" : 3 }
> db.movies.find({ name: { $in: ["Grimm", "Lost Girl", "The Strain"] }}).count()
0
```

## mongoose

So far we have seen the benefits of using MongoDB as a database such as:

- not having to defined a database or collection
- not having to define a schema
- ease of use

However, in most modern apps we need some type of validation each time we enter data into the DB because we should follow the golden rule of: _**Never trust client side data**_.

Furthermore, we also need to define some **minimum requirements for our collections** to ensure that, for example, we don’t create a user without an email in the correct format.

Although in modern versions of MongoDB we can define a schema for our data, it is still much easier to do so using **mongoose**.

### Types of Schemas in MongoDB

#### Schemaless

Documents don’t have the same fields and field types

<table>
<tr>
<td><strong>User A</strong></td>
<td><strong>User B</strong></td>
</tr>
<tr>
<td>

```json
{
  "name": "Bradley Ortiz",
  "email": "brad@manguihi.ph",
  "phone": "(751) 348-4041",
  "age": "24"
}
```

</td>
<td>

```json
{
  "firstName": "Ana",
  "lastName": "Marks",
  "phone-number": "(459) 559-7641",
  "age": 33
}
```

</td>
</tr>
</table>

#### Some Type of Schema

Documents share some fields and field types.

<table>
<tr>
<td><strong>User A</strong></td>
<td><strong>User B</strong></td>
</tr>
<tr>
<td>

```json
{
  "firstName": "Bradley",
  "lastName": "Ortiz",
  "email": "brad@manguihi.ph",
  "phone": "(751) 348-4041",
  "age": 24,
  "address": null
}
```

</td>
<td>

```json
{
  "firstName": "Ana",
  "lastName": "Marks",
  "email": "ana@somemail.in",
  "phone-number": "(459) 559-7641",
  "age": "33"
}
```

</td>
</tr>
</table>

#### Exact Type of Schema

Documents share the same fields and field types.

<table>
<tr>
<td><strong>User A</strong></td>
<td><strong>User B</strong></td>
</tr>
<tr>
<td>

```json
{
  "firstName": "Bradley",
  "lastName": "Ortiz",
  "email": "brad@manguihi.ph",
  "phone": "(751) 348-4041",
  "age": 24,
  "address": null
}
```

</td>
<td>

```json
{
  "firstName": "Ana",
  "lastName": "Marks",
  "email": "ana@somemail.in",
  "phone": "(459) 559-7641",
  "age": 33,
  "address": null
}
```

</td>
</tr>
</table>

## Node.js MVC Folder Structure

Following the MVC pattern, this is a sample folder structure for developing backend applications using the MERN Stack.

#### What is the _MERN_ Stack?

_MERN_ stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

- **MongoDB** - document database
- **Express.js** - Node.js web framework
- **React.js** - a client-side JavaScript framework
- **Node.js** - the premier JavaScript web server

```bash
├── ...
└── src
    ├── config
    │   └── ...\.js
    ├── controllers
    │   └── user-controller.js
    │   └── X-controller.js
    ├── db
    │   └── ...\.js
    ├── middleware
    │   └── X-middleware.js
    ├── models
    │   ├── index.js
    │   └── user-model.js
    │   └── X-model.js
    ├── routes
    │   └── user-routes.js
    │   └── X-routes.js
    ├── index.js
    └── server.js
```

### Folders Used

#### `controllers`

Where we store the controllers used in the routes. These are responsible for return a response for each endpoint, usually they connect to the DB and fetch the data from it.

#### `routes`

Where we store the routes used in the endpoints of the app.

#### `models`

Where we store the mongoose models of the app.

### Other Folder

#### `config`

Where we can store all the configuration files needed in the app.

#### `middleware`

Where we can store the middleware used in the app.

#### `db`

Where we can store the files related to the database.

#### `server.js`

The file that holds the express.js `app` exported for use in the `index.js` file and for easier testing.

#### `index.js`

The file that starts up the express.js `app`.

## Connecting With mongoose

The first thing we need to do is to connect to a MongoDB database using the mongoose `connect` method.

```js
// src/db/connect.js
mongoose.connect("mongodb://localhost:27017/workshop-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

If you get any deprecation warnings in the terminal you should copy the properties mongo recommends adding to the connect method.

```bash
node:57382) DeprecationWarning: current URL string parser is deprecated,
and will be removed in a future version. To use the new parser,
pass option { useNewUrlParser: true } to MongoClient.connect.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:57382) DeprecationWarning: current Server Discovery and
Monitoring engine is deprecated, and will be removed in a future version.
To use the new Server Discover and Monitoring engine,
pass option { useUnifiedTopology: true } to the MongoClient constructor.
```

One way of starting the connection to the database is to first connect to it and then start the express server in the `index.js` file.

```js
// src/index.js
const app = require("./server");
const config = require("./config/config");
const connect = require("./db/connect");

connect().then(() => {
  config.logger.info(`DB connected`);

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});
```

## mongoose Schemas

Defining a MongoDB schema for a collection is very easy with mongoose.

To define a schema we can use the `mongoose.Schema` constructor:

```js
const UserSchema = new mongoose.Schema({ ...properties });
```

Mongoose schemas can be of several primitive types that are available in Javascript and some that are from MongoDB:

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- ObjectId
- Array
- Decimal128
- Map

```js
// src/models/user-model.js
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});
```

We can specify the type of a property by using the `type` property or the shorthand version:

```js
// src/models/user-model.js
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
```

Other schema options include the following:

- `required`: if the property must have a value when creating a document or not
- `lowercase`: boolean, whether to always call `.toLowerCase()` on the value
- `uppercase`: boolean, whether to always call `.toUpperCase()` on the value
- `trim`: boolean, whether to always call `.trim()` on the value
- `enum`: Array, creates a validator that checks if the value is in the given array.
- `minLength`: Number, creates a validator that checks if the value length is not less than the given number
- `maxLength`: Number, creates a validator that checks if the value length is not greater than the given number

### Schema Validation

Besides adding just an option to a property in the schema we can also add a error message:

```js
// src/models/user-model.js
const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, "The password is too short"],
  },
});
```

### Custom Validator

We can also add a custom validator to the schema. The validator will be called with the value of the field when it is created and it should return `true` if it passes or `false` if it doesn't. Then, the custom message we provide will be thrown if it doesn't pass the validation.

```js
// src/models/user-model.js
const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
});
```

### Creating a Model

Once we have defined the schema we can now create a model with it.

```js
const UserModel = new mongoose.model("user", UserSchema);
```

This creates a collection that has as a name the pluralized version of the first argument we pass to the `mongoose.model` constructor.

### Complete Example of a User Schema

```js
// src/models/user-model.js
const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    age: Number,
    developer: {
      type: Boolean,
      default: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: [8, "The password is too short"],
    },
    activities: [
      // Array have a default value of [] (empty array)
      {
        type: String,
        enum: ["Programming", "Studying", "Ping Pong"],
      },
    ],
  },
  { timestamps: true },
);

const UserModel = new mongoose.model("user", UserSchema);

module.exports = UserModel;
```

Then, once we have created the `User` schema we can import it in the `index.js` file in the `models` folder. This is the entry point to our database that we will use throughout the app.

```js
// src/models/index,js
const UserModel = require("./user-model");

module.exports = {
  User: UserModel,
};
```

## Creating Documents

Based on the previous schema we can now try to create a document.

```js
// src/controllers/user-controller.js
const { logger } = require("../config/config");
const db = require("../models");
const connect = require("../db/connect");

(async () => {
  // first we need to connect to the mongodb database
  await connect();

  // delete all the documents to avoid duplicate email errors
  await db.User.deleteMany({});

  try {
    // create the document
    const user = await db.User.create({
      firstName: "alex",
      lastName: "mark",
      age: 20,
      email: "humitsak@wamgo.com",
      password: "266-1089-eula-stephens",
      activities: "Programming",
    });

    logger.debug(user);
  } catch (error) {
    // catch any errors that appear
    logger.error(error.errors);
  }
})();
```

If we look carefully we can also see that the `_id` field has been automatically created and that the `createdAt` and `updatedAt` fields have been added because we created the schema with the `{ timestamps: true }` option.

Our new user document:

```bash
{
  developer: true,
  activities: [ 'Programming' ],
  _id: 5fee135cac8cf687bf3b04fa,
  firstName: 'alex',
  lastName: 'mark',
  age: 20,
  email: 'humitsak@wamgo.com',
  password: '266-1089-eula-stephens',
  createdAt: 2020-11-31T18:07:24.337Z,
  updatedAt: 2020-11-31T18:07:24.337Z,
  __v: 0
}
```

If we try to create a document with missing or invalid fields we would get an error.

```js
try {
  // create the document
  const user = await db.User.create({
    firstName: "alex",
    // lastName: "mark",
    age: 20,
    email: "humitsak@wamgo.com",
    password: "266-1089-eula-stephens",
    activities: "Programming",
  });

  logger.debug(user);
} catch (error) {
  // catch any errors that appear
  logger.error(error.errors);
}
```

Error message:

```bash
{
  lastName: ValidatorError: Path `lastName` is required.
      at validate (/Users/mariandaniellucaci/_ignored_dropbox_folders/assembler/mongodb-intro-workshop/node_modules/mongoose/lib/schematype.js:1257:13)
      at /Users/mariandaniellucaci/_ignored_dropbox_folders/assembler/mongodb-intro-workshop/node_modules/mongoose/lib/schematype.js:1240:7
      at Array.forEach (<anonymous>)
      at SchemaString.SchemaType.doValidate (/Users/mariandaniellucaci/_ignored_dropbox_folders/assembler/mongodb-intro-workshop/node_modules/mongoose/lib/schematype.js:1185:14)
      at /Users/mariandaniellucaci/_ignored_dropbox_folders/assembler/mongodb-intro-workshop/node_modules/mongoose/lib/document.js:2501:18
      at processTicksAndRejections (node:internal/process/task_queues:75:11) {
    properties: {
      validator: [Function (anonymous)],
      message: 'Path `lastName` is required.',
      type: 'required',
      path: 'lastName',
      value: undefined
    },
    kind: 'required',
    path: 'lastName',
    value: undefined,
    reason: undefined,
    [Symbol(mongoose:validatorError)]: true
  }
}
```

Or a user with an invalid email:

```js
try {
  // create the document
  const user = await db.User.create({
    firstName: "alex",
    lastName: "mark",
    age: 20,
    email: 1,
    password: "266-1089-eula-stephens",
    activities: "Programming",
  });

  logger.debug(user);
} catch (error) {
  // catch any errors that appear
  logger.error(error.errors);
}
```

Error message:

```bash
{
  email: ValidatorError: 1 is not a valid email address
      at validate (/Users/mariandaniellucaci/_ignored_dropbox_folders/assembler/mongodb-intro-workshop/node_modules/mongoose/lib/schematype.js:1257:13)
      at /Users/mariandaniellucaci/_ignored_dropbox_folders/assembler/mongodb-intro-workshop/node_modules/mongoose/lib/schematype.js:1240:7
      at Array.forEach (<anonymous>)
      at SchemaString.SchemaType.doValidate (/Users/mariandaniellucaci/_ignored_dropbox_folders/assembler/mongodb-intro-workshop/node_modules/mongoose/lib/schematype.js:1185:14)
      at /Users/mariandaniellucaci/_ignored_dropbox_folders/assembler/mongodb-intro-workshop/node_modules/mongoose/lib/document.js:2501:18
      at processTicksAndRejections (node:internal/process/task_queues:75:11) {
    properties: {
      validator: [Function],
      message: '1 is not a valid email address',
      type: 'user defined',
      path: 'email',
      value: '1'
    },
    kind: 'user defined',
    path: 'email',
    value: '1',
    reason: undefined,
    [Symbol(mongoose:validatorError)]: true
  }
}
```

## Mongoose Schema Hooks

On very powerful feature of mongoose schemas is that it allows us to execute some logic before or after a particular action takes place in our documents.

```js
schema.pre("validate", function () {
  console.log("this gets printed first");
});
schema.post("validate", function () {
  console.log("this gets printed second");
});
schema.pre("save", function () {
  console.log("this gets printed third");
});
schema.post("save", function () {
  console.log("this gets printed fourth");
});
```

Other options include:

- `findOneAndUpdate`
- `updateOne`
- `find`
- `remove`
- ...

## Safer Way of Storing Passwords

One major security issue we have so far is that we are storing the passwords in plain text in our database.

```bash
{
  _id: 5fee135cac8cf687bf3b04fa,
  ...
  password: '266-1089-eula-stephens',
  ...
}
```

In order to solve this issue we can use the mongoose `.pre("save")` hook to modify the document before it is saved in the database.

This way we can encrypt the password using the `bcrypt` package so that it is safer.

```js
// src/models/user-model.js
UserSchema.pre("save", function userPreSaveHook(next) {
  if (!this.isModified("password")) return next();

  try {
    const hash = await bcrypt.hash(this.password, 12);

    this.password = hash;

    return next();
  } catch (error) {
    return next(error);
  }
});
```

Now, if we create the document again we can see that the password is encrypted.

```bash
{
  _id: 5fee18fcaf6757c537bbc4fe,
  ...
  password: '$2b$12$OnNXMIQlIbTxZJy1Eh4xLuvwB7/9snZYXcHO3BA5x1Fu4ycamqLv6',
  ...
}
```

Then, when we want to compare the password for when the user wants to login, we can use another feature of mongoose schemas: schema methods.

```js
// src/models/user-model.js
UserSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};
```

Schema methods will be available on the document we create because every mongoose document has additional helper methods we can use.

We can now use the `comparePassword()` method in the following way:

```js
const user = await db.User.create({
  firstName: "alex",
  lastName: "mark",
  age: 20,
  email: "humitsak@wamgo.com",
  password: "266-1089-eula-stephens",
  activities: "Programming",
});

const match = await user.comparePassword("266-1089-eula-stephens");

console.log(match); // true
```

## Mongoose Schema Exercises

The test suites for these exercises can be executed with the following script: `npm run test:01:schemas`.

Open the files indicated bellow and read the instructions and requirements of the tests to solve them.

- Once you are done the instructor will solve each step
- If you get stuck you can find the answers in the `01-mongoose-schema-exercises-solution` branch
- Try not to peek at the solutions and solve them with your pair programming partner
- To finish this part you have 20 minutes

### 1. Create the connection logic in the `/src/db/connect.js` file

- **Test suite:** "1. the `connect` function calls `mongoose.connect` with the url and options"

### 2. Create the `User` model in the `/src/models/user-model.js` file

- **Test suite:** "2. create the 'User' model following the schema requirements"
- **Test suite:** "3. encrypt the password before storing it in the database"
- **Test suite:** "4. add a 'comparePassword' method to the 'User' schema"

## Author <!-- omit in toc -->

[Dani Lucaci](https://github.com/danilucaci)

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)
