const names = require("./names.json");
const uniqueRandom = require("unique-random-array");

module.exports = {
  all: names,
  random: uniqueRandom(names),
};
