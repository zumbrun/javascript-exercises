const helloWorld = require('./helloWorld');

describe('says "Hello World"', function() {
  test('Hello, World!', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
