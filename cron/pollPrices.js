const DS = require('../api/services/datastore');
const IEX = require('../api/services/iex');

const config = require('../api/config');
const { KINDS: { COMPANY, PRICE } } = require('../api/config/constants');

const run = async () => {
    const createdAt = Date.now();

    config.cron.symbols.forEach(async symbol => {
        const company = await IEX.getCompany(symbol);
        const logo = await IEX.getLogo(symbol);
        const companyData = {
            symbol,
            name: company.companyName,
            logo: logo.url
        };

        await DS.save([COMPANY, symbol], companyData);

        const price = await IEX.getPrice(symbol);
        const priceData = {
            symbol,
            price,
            createdAt
        };

        await DS.save([PRICE], priceData);
    });
};

module.exports = run;