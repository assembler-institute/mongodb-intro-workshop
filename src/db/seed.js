const db = require("../models");

async function seedUsers() {
  const users = [
    {
      firstName: "Jordan",
      lastName: "Peterson",
      email: "woga@wi.lu",
      password: "jordan-super-password",
      speaks: ["english", "javascript"],
    },
    {
      firstName: "Margaret",
      lastName: "Watkins",
      email: "edde@kodbi.eh",
      password: "margaret-super-password",
      speaks: ["catalan", "spanish"],
    },
    {
      firstName: "Mable",
      lastName: "Schneider",
      email: "ba@wuf.ws",
      password: "mable-super-password",
      speaks: ["german", "english"],
    },
    {
      firstName: "Alta",
      lastName: "Harris",
      email: "cuk@boeli.gn",
      password: "alta-super-password",
      speaks: ["english", "spanish"],
    },
    {
      firstName: "Darrell",
      lastName: "Wilkerson",
      email: "ecdescu@riwluzhok.pf",
      password: "darrell-super-password",
      speaks: ["english", "javascript"],
    },
    {
      firstName: "Ryan",
      lastName: "McGuire",
      email: "beta@houboem.py",
      password: "ryan-super-password",
      speaks: ["english", "spanish"],
    },
  ];

  await db.User.deleteMany({});
  await db.User.create([...users]);
}

module.exports = { seedUsers: seedUsers };
