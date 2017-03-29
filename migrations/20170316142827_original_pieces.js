
exports.up = function(knex) {
  return knex.schema.createTable('original_pieces', (table) => {
    table.increments();
    table.integer('bk_id')
      .notNullable()
      .references('id')
      .inTable('books')
      .onDelete('CASCADE')
      .index();
    table.integer('piece_num').notNullable().default(0);
    table.integer('micro_piece').notNullable().default(0);
    table.string('section_title').default('');
    table.text('data').notNullable().default('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('original_pieces');
};
