const server = require("../../utils/tests/server");
const db = require("../../models");
const { seedUsers } = require("../../db/seed");

const {
  findUserByLastName,
  findUserByEmailAndProjectFields,
  getUserEmails,
  getFirst3FirstNames,
  getUpdatedEmail,
  getRemovedUser,
} = require("../crud-methods");

describe("mongoose crud methods", () => {
  beforeAll(async () => await server.initTestServer());
  beforeEach(async () => await seedUsers());
  afterAll(async () => await server.stopTestServer());

  test("findUserByLastName returns the user doc", async () => {
    const actual = await findUserByLastName();

    expect(actual).toEqual({
      _id: expect.anything(),
      speaks: expect.arrayContaining(["english", "spanish"]),
      firstName: "Ryan",
      lastName: "McGuire",
      email: "beta@houboem.py",
      password: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      __v: 0,
    });
  });

  test("findUserByEmailAndProjectFields returns the fields", async () => {
    const actual = await findUserByEmailAndProjectFields();

    expect(actual).toEqual({
      _id: expect.anything(),
      firstName: "Alta",
      lastName: "Harris",
      email: "cuk@boeli.gn",
    });
  });

  test("getUserEmails returns an array of user emails", async () => {
    const actual = await getUserEmails();

    expect(actual).toHaveLength(6);
    expect(actual).toEqual(
      expect.arrayContaining([
        { email: "edde@kodbi.eh" },
        { email: "ba@wuf.ws" },
        { email: "cuk@boeli.gn" },
        { email: "woga@wi.lu" },
        { email: "beta@houboem.py" },
        { email: "ecdescu@riwluzhok.pf" },
      ]),
    );
  });

  test("getFirst3FirstNames returns an array of 3 user first names", async () => {
    const actual = await getFirst3FirstNames();

    expect(actual).toHaveLength(3);
    expect(actual).toEqual(
      expect.arrayContaining([
        { firstName: "Alta" },
        { firstName: "Darrell" },
        { firstName: "Jordan" },
      ]),
    );
  });

  test("getUpdatedEmail returns the updated email info", async () => {
    const actual = await getUpdatedEmail();

    expect(actual).toEqual({
      _id: expect.anything(),
      firstName: "Ryan",
      lastName: "McGuire",
      email: "ryanmcg@mail.com",
    });
  });

  test("getRemovedUser returns the removed user", async () => {
    const actual = await getRemovedUser();
    const stillThere = await db.User.findOne({
      email: "edde@kodbi.eh",
    });

    expect(stillThere).toBeNull();

    expect(actual).toEqual({
      speaks: expect.arrayContaining(["catalan", "spanish"]),
      _id: expect.anything(),
      firstName: "Margaret",
      lastName: "Watkins",
      email: "edde@kodbi.eh",
      password: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
      __v: 0,
    });
  });
});
