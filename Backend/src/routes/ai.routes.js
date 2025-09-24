const express = require('express');
const router = express.Router();
const { reviewCode } = require('../controller/ai.controller');

router.post('/review', reviewCode);

module.exports = router;
