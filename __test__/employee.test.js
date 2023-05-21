const { test } = require('node:test'); 
const Employee = require('../lib/employee');

test('creates an employee object', () => {
  const employee = new Employee('Travis', 90, 'travis.scott@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String)); 
});

test('gets employee name', () => {
  const employee = new Employee('Travis', 90, 'travis.scott@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
  const employee = new Employee('Travis', 90, 'travis.scott@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
  const employee = new Employee('Travis', 90, 'travis.scott@gmail.com');

  expect(employee.getEmail()).toEqual(expect.any(String)); 
});

test('gets role of employee', () => { 
  const employee = new Employee('Travis', 90, 'travis.scott@gmail.com');

  expect(employee.getRole()).toEqual('Employee');
});
