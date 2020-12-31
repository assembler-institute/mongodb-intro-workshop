const db = require("../models");
// const { logger } = require("../config/config");
// const connect = require("../db/connect");
// const { seedUsers } = require("../db/seed");

/**
 * Import the `init` helper function from the README
 * and comment out the require statements from above
 * if you want to see the results in the terminal
 */

// init()

/**
 * 1. Complete the code of the function to query the database
 *    and return the user with the last name of: `McGuire`
 *
 * This should return an object and not an array of a single element.
 *
 * @remember
 * Use lean and exec on the query
 */
async function findUserByLastName() {
  const user = null;

  return user;
}

/**
 * 2. Complete the code of the function to query the database
 *    and return the user with an email of: `cuk@boeli.gn`
 *
 *    You should use projection to only return the following fields:
 *
 *    _id, firstName, lastName, email
 *
 * This should return an object and not an array of a single element.
 *
 * @remember
 * Use lean and exec on the query
 */
async function findUserByEmailAndProjectFields() {
  const user = null;

  return user;
}

/**
 * 3. Complete the code of the function to query the database
 *    and return from all the users only their email
 *
 * This should return an array of emails only without the _ids like this
 *
 * [
 *    { email: '...' },
 *    { email: '...' },
 *     ...
 * ]
 *
 * @remember
 * Use lean and exec on the query
 */
async function getUserEmails() {
  const users = null;

  return users;
}

/**
 * 4. Complete the code of the function to:
 *
 * 4.1 sort the first names using an ascending sort
 * 4.2 limit the query to only the first 3 results
 * 4.3 return an array with only the first names of each user
 *
 * This should return an array of first names only without the _ids
 *
 * [
 *    { firstName: '...' },
 *    { firstName: '...' },
 *     ...
 * ]
 *
 * @remember
 * Use lean and exec on the query
 */
async function getFirst3FirstNames() {
  const users = null;

  return users;
}

/**
 * 5. Complete the code of the function to:
 *
 * 5.1 Search for the user with the email: "beta@houboem.py"
 * 5.2 Update the email to be: "ryanmcg@mail.com"
 * 5.3 Return the new document with the updates
 * 5.4 Return only the _id, first name, last name, email
 *
 * For this step you should comment out the following line
 * so that the document returned from the `findOneAndUpdate`
 * is converted to a regular object and not a mongoose document
 * with extra helper methods.
 *
 * This is the same as running `.lean()`
 *
 * This should return an object and not an array of a single element.
 */
async function getUpdatedEmail() {
  let user = null;

  // Uncomment this line after finishing the DB update query
  // user = await user.toObject();

  return user;
}

/**
 * 6. Complete the code of the function to:
 *
 * 6.1 Search for the user that speaks both 'catalan' and 'spanish'
 * 6.2 Remove it
 * 6.3 Return the removed document
 *
 * For this step you should comment out the following line
 * so that the document returned from the `findOneAndUpdate`
 * is converted to a regular object and not a mongoose document
 * with extra helper methods.
 *
 * This is the same as running `.lean()`
 */
async function getRemovedUser() {
  let user = null;

  // Uncomment this line after finishing the DB remove query
  // user = await user.toObject();

  return user;
}

module.exports = {
  findUserByLastName: findUserByLastName,
  findUserByEmailAndProjectFields: findUserByEmailAndProjectFields,
  getUserEmails: getUserEmails,
  getFirst3FirstNames: getFirst3FirstNames,
  getUpdatedEmail: getUpdatedEmail,
  getRemovedUser: getRemovedUser,
};
