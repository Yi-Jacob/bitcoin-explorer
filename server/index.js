require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');

const app = express();

app.use(staticMiddleware);

app.use(errorMiddleware);

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/finalProject',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api', (req, res) => {
  const sql = `
    select *
      from "bookmarks"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
