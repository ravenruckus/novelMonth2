'use strict';

exports.seed = function(knex) {
  return knex('books').del()
    .then(() => {
      return knex('books').insert([{
        id: 1,
        title: 'Wizard of Oz',
        piece_sum: '24'
      }
    ])
    })
    .then(function() {
      return knex.raw("SELECT setval('books_id_seq', (SELECT MAX(id) FROM books));")
    });
};
