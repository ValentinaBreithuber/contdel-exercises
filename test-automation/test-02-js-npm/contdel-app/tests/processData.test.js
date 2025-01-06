const processData = require('../src/processData');
const fetchData = require('../src/fetchData');
jest.mock('../src/fetchData');

test('processData should process data correctly', async () => {
    fetchData.mockResolvedValue("mocked data");
    const result = await processData();
    expect(result).toBe("MOCKED DATA");
});