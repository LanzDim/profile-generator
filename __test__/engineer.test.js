const { test } = require('node:test'); 
const Engineer = require('../lib/engineer');

test('creates an Engineer object', () => {
  const engineer = new Engineer('Travis', 90, 'travis.scott@gmail.com', 'travisscott09');

  expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github value', () => {
  const engineer = new Engineer('Travis', 90, 'travis.scott@gmail.com', 'travisscott09');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test('gets role of employee', () => { 
  const engineer = new Engineer('Travis', 90, 'travis.scott@gmail.com', 'travisscott09');

  expect(engineer.getRole()).toEqual('Engineer');
});
