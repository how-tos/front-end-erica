exports.up = function(knex, Promise) {
  return knex.schema.createTable("guides_tags", table => {
    table.increments();
    table
      .integer("tag_id")
      .references("id")
      .inTable("tags")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("guide_id")
      .references("id")
      .inTable("guides")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.index(["tag_id", "guide_id"]).unique(["tag_id", "guide_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("guides_tags");
};
