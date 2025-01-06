const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("some data");
        }, 100);
    });
};

module.exports = fetchData;
