const CronJob = require('cron').CronJob;

const pollPrices = require('./pollPrices');

const config = require('../api/config');

const run = () => {
    const pollJob = new CronJob(config.cron.pollPrices.interval, () => {
        pollPrices();
    });
    pollJob.start();
};

module.exports = {
    run
};