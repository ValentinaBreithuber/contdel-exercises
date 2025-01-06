const fetchData = require('../src/fetchData');

test('fetchData should return "some data"', async () => {
    const result = await fetchData();
    expect(result).toBe("some data");
});
