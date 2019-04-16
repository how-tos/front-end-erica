const data = require("../../dummyData");
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tags")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tags").insert(data.tags);
    });
};
