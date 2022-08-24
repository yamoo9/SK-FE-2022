import express from 'express';
import database from './db.json' assert { type: 'json' };

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.get('/api', (req, res) => {
  res.status(200).json(database);
});

app.get('/api/navigation', (req, res) => {
  res.status(200).json(database.navigation);
});

app.get('/api/beverages', (req, res) => {
  res.status(200).json(database.beverage_menu);
});

app.get('/api/beverage/:id', (req, res) => {
  const id = req.param('id');

  const beverage = database.beverage_menu.find(
    (beverage) => beverage.id === id
  );

  if (!beverage) {
    res.status(404).send('해당 id와 일치하는 beverage는 존재하지 않습니다.');
  }

  res.status(200).json(beverage);
});

app.listen(PORT, () =>
  console.log(
    `
      API ROOT      →  http://localhost:${PORT}/api
      navigation    →  http://localhost:${PORT}/api/navigation
      beverages     →  http://localhost:${PORT}/api/beverages
      beverage/:id  →  http://localhost:${PORT}/api/beverage/1
    `
  )
);
