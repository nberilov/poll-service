const app = require('./app');
const config = require('./api/config');
const cron = require('./cron');

app.listen(config.port, () => {
    console.log(`Pollings service listening on port ${config.port}`);
    cron.run();
});
