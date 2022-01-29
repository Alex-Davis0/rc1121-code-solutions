const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades/', (req, res, next) => {

  const sql = `
    select *
    from grades
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'Unexpected error'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const body = req.body;
  const score = Number(body.score);
  if (!body.name && !body.course && !score) {
    res.status(400).json({
      error: 'Invalid grade'
    });
    return;
  } else if ((!Number.isInteger(score) || score > 100 || score < 0)) {
    res.status(400).json({
      error: 'Invalid integer '
    });
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning*;
  `;
  const values = [body.name, body.course, score];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'Unexpected error'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const body = req.body;
  const id = Number(req.params.gradeId);
  const score = Number(body.score);
  if (!id || !Number.isInteger(id) || id < 0) {
    res.status(400).json({
      error: 'Id must be a positive integer'
    });
    return;
  } else if (!body.name && !body.course && !score) {
    res.status(400).json({
      error: 'Invalid grade'
    });
    return;
  } else if ((!Number.isInteger(score) || score > 100 || score < 0)) {
    res.status(400).json({
      error: 'Invalid integer '
    });
    return;
  }
  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning*;
  `;
  const values = [body.name, body.course, score, id];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: 'Grade does not exist'
        });
        return;
      }
      res.json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'Unexpected error'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number(req.params.gradeId);
  if (!id || id < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'Invalid Id' });
    return;
  }
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;
  const values = [id];
  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: 'gradeId does not exist' });
        return;
      }
      res.status(204).json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listing on port 3000');
});
