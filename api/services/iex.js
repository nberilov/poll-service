const axios = require('axios');

const config = require('../config');

class IEXService {
    async getData(type, symbol) {
        const { data } = await axios.get(`${config.iex.apiBase}/stock/${symbol}/${type}?token=${config.iex.token}`);
        return data;
    }

    getCompany (symbol) {
        return this.getData('company', symbol);
    }

    getPrice (symbol) {
        return this.getData('price', symbol);
    }

    getLogo (symbol) {
        return this.getData('logo', symbol);
    }
}

module.exports = new IEXService();