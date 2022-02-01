const fs = require('fs');
const express = require('express');
const app = express();
const data = require('./data');
const notes = data.notes;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const property in notes) {
    arr.push(notes[property]);
  }
  res.status(200).json(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!id || id < 0 || Number.isInteger(id) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ error: `can not find note with id ${id}` });
  } else {
    res.json(notes[id]);
  }
});

app.post('/api/notes', (req, res) => {
  const body = req.body;
  const newnote = {};

  if (!body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  newnote.id = data.nextId;
  newnote.content = body.content;
  notes[newnote.id] = newnote;
  data.nextId++;

  const stringify = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringify, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occurrred' });
    } else {
      res.status(201).json(newnote);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!id || id < 0 || Number.isInteger(id) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!notes[id]) {
    res.status(404).json({ error: `can not find note with id ${id}` });
  }
  delete notes[id];
  const stringify = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringify, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occurrred' });
    } else {
      res.sendStatus(204);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const body = req.body;
  const id = Number(req.params.id);
  if (!id || id < 0 || Number.isInteger(id) === false) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!body.content) {
    res.status(400).json({ error: 'No Content' });
  } else if (!notes[id]) {
    res.status(404).json({ error: `can not find note with id ${id}` });
  }
  notes[id].content = body.content;
  const stringify = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', stringify, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occurrred' });
    } else {
      res.status(200).json(notes[id]);
    }
  });
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});
