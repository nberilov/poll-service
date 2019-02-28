const express = require('express');
const router = express.Router();

const metricsRouter = require('./metrics');

router.use('/metrics', metricsRouter);

module.exports = router;
