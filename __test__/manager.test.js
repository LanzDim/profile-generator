const { test } = require('node:test'); 

test('creates a Manager object', () => {
  const manager = new Manager('Travis', 90, 'travis.scott@gmail.com', 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
  const manager = new Manager('Travis', 90, 'travis.scott@gmail.com', 4);

  expect(manager.getRole()).toEqual('Manager');
});
