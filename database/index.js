const { Pool } = require('pg');

const db = new Pool({
  host: 'bubblechat.cldnnfpgugbb.us-west-1.rds.amazonaws.com',
  port: 5432,
  database: 'bubblechat',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

db.connect();

module.exports.saveMessage = (msg) => {
  return db.query('INSERT INTO MESSAGES values ($1)', [msg]);
};

module.exports.getTrending = () => {
  return db.query('SELECT word, count(*) FROM (SELECT regexp_split_to_table(LOWER(msg), \'\\s\') AS word FROM messages WHERE created_at > now() - INTERVAL \'1 hour\') t GROUP BY word ORDER BY count DESC LIMIT 5');
};
