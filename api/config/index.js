module.exports = {
    port: process.env.PORT || 3000,
    iex: {
        apiBase: 'https://cloud.iexapis.com/beta',
        token: process.env.IEX_PUB_TOKEN
    },
    datastore: {
        projectId: process.env.PROJECT_ID
    },
    cron: {
        symbols: ['aapl', 'googl'],
        pollPrices: {
            interval: '0 0 0 * * *'
        }
    }
};
