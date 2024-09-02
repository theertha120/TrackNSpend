const express = require('express');
const router = express.Router();
const { getExpenditures, addExpenditure } = require('../controllers/expenditureController');

router.get('/', getExpenditures);
router.post('/', addExpenditure);

module.exports = router;
