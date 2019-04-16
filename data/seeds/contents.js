const data = require("../../dummyData");
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("contents")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contents").insert(data.contents);
    });
};
