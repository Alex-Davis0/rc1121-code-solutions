const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const property in grades) {
    array.push(grades[property]);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const body = req.body;
  const grade = {};
  grade.name = body.name;
  grade.course = body.course;
  grade.score = body.score;
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;
  res.sendStatus(201);
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});
