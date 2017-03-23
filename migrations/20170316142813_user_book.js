
exports.up = function(knex) {
  return knex.schema.createTable('user_book', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('bk_id')
      .notNullable()
      .references('id')
      .inTable('books')
      .index();
    table.string('user_title');    
  })

};

exports.down = function(knex) {
  return knex.schema.dropTable('user_book');
};
