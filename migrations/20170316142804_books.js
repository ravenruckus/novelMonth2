
exports.up = function(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments();
    table.string('title').notNullable().default('');
    table.integer('piece_sum').notNullable().default(0);
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
