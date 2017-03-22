'use strict';

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'novels',
    }
  },
  production: {
    client: 'pg',
      connection: process.env.DATABASE_URL
  }
}
