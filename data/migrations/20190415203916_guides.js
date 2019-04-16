exports.up = function(knex, Promise) {
  return knex.schema.createTable("guides", table => {
    table.increments();
    table.string("title");
    table
      .string("author")
      .references("username")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("date");
    table
      .integer("content_id")
      .references("id")
      .inTable("contents");
    table
      .integer("tag_id")
      .references("tag_id")
      .inTable("guides_tags");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("guides");
};
