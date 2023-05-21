const { test } = require('node:test'); 
const Intern = require('../lib/intern');

test('creates an Intern object', () => {
  const intern = new Intern('Travis', 90, 'travis.scott@gmail.com', 'SFSU');

  expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => { 
  const intern = new Intern('Travis', 90, 'travis.scott@gmail.com', 'SFSU');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test('gets role of employee', () => {
  const intern = new Intern('Travis', 90, 'travis.scott@gmail.com', 'SFSU');

  expect(intern.getRole()).toEqual('Intern');
});
