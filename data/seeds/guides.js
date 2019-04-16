const data = require("../../dummyData");
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("guides")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("guides").insert(data.guides);
    });
};
