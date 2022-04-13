require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');
const argon2 = require('argon2');
const ClientError = require('./client-error');

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

app.post('/api/users', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username", "createdAt"
      `;
      const params = [username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/bookmarks', (req, res, next) => {
  const { walletAddress, data } = req.body;
  const sql = `
  insert into "bookmarks" ("walletAddress", "data")
  values ($1, $2)
  returning *
  `;
  const bookmark = [walletAddress, data];
  if ((!walletAddress) || (!data)) {
    res.status(400).json({
      error: 'Please include both fields'
    });
    return;
  }
  db.query(sql, bookmark)
    .then(res => {
      const newBookmark = res.rows[0];
      res.status(201).json(newBookmark);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/users/:userId', (req, res) => {
  const userId = Number(req.params.userId);
  const sql = `
  delete from "users"
  where "userId" = ${userId}
  returning *
  `;
  if (!Number(userId)) {
    throw new ClientError(401, 'invalid login');
  }
  db.query(sql)
    .then(res => {
      const deletedUser = res.rows[0];
      if (!deletedUser) {
        res.status(404).json({ error: `GradeId ${userId} does not exist in grades table!` });
      } else {
        res.status(204).json(deletedUser);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.delete('/api/bookmark/:bookmarkId', (req, res) => {
  const bookmarkId = Number(req.params.userId);
  const sql = `
  delete from "bookmarks"
  where "bookmarkId" = ${bookmarkId}
  returning *
  `;
  if (!Number(bookmarkId)) {
    throw new ClientError(401, 'invalid login');
  }
  db.query(sql)
    .then(res => {
      const deletedBookmark = res.rows[0];
      if (!deletedBookmark) {
        res.status(404).json({ error: `BookmarkId ${bookmarkId} does not exist in bookmarks table!` });
      } else {
        res.status(204).json(deletedBookmark);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
