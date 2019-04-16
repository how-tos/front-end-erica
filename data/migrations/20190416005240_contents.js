exports.up = function(knex, Promise) {
  return knex.schema.createTable("contents", table => {
    table.increments();
    table
      .binary("img")
      .defaultTo("https://i.ibb.co/FBQXmjV/Missing-avatar-svg.png");
    table.text("content");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("contents");
};
