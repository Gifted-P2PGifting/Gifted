const { Pool } = require('pg');

// instanciate variable to hold connection url
const pgUri =
  'postgres://bmcefswn:3q9M8Ahb4Q1SMH9Oz49LJ4dCuu-fjZH4@lallah.db.elephantsql.com:5432/bmcefswn';

// creating new pool using database uri as connectionString
const pool = new Pool({ connectionString: pgUri });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
