const faker = require('faker');

module.exports = {
    rate: "1,000",
    contractName: faker.random.words(2),
    contractType: 'Fixed rate',
    scope: faker.random.words(10),
    specialClause: faker.random.words(10),
    State: "Colorado",
    Country: "United States",
};
