const db = require('../db');

const getExpenditures = (req, res) => {
  db.query('SELECT * FROM expenditures', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const addExpenditure = (req, res) => {
  const { category, name, cost } = req.body;
  db.query('INSERT INTO expenditures (category, name, cost) VALUES (?, ?, ?)', [category, name, cost], (err) => {
    if (err) throw err;
    res.status(201).send('Expenditure added');
  });
};

module.exports = { getExpenditures, addExpenditure };
