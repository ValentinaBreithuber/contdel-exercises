const fetchData = require('./fetchData');

const processData = async () => {
    const data = await fetchData();
    return data.toUpperCase();
};

module.exports = processData;
