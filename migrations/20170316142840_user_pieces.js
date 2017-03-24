
exports.up = function(knex) {
  return knex.schema.createTable('user_pieces', (table) => {
    table.increments();
    table.integer('original_pieces_id')
      .notNullable()
      .references('id')
      .inTable('original_pieces')
      .index();
   table.integer('user_book_id')
      .notNullable()
      .references('id')
      .inTable('user_book')
      .onDelete('CASCADE')
      .index();
  table.text('data').notNullable().default('');
  table.integer('piece_num').notNullable().default(0);
  table.boolean('completed').default(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_pieces');
};
