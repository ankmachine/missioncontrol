const { generateRandom } = require('../../server/simulation/drone');

describe('generateRandom()', () => {

  const sampleArguments = {coords: {lat: 1, long: 1}, distance: 1000 };

  test('returns an object', () => {
    expect(
      typeof generateRandom(sampleArguments)
    ).toBe('object');
  });

});
