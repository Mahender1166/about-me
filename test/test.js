QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST add', assert => {
  assert.equal(calc(1, 1), 1, 'test 1 for two positive value')
  assert.equal(calc(-1, -1), 1, 'test 2 for two negative values')
  assert.equal(calc(1, -1), -1, 'test 3 for one negative values')
  assert.equal(calc(1 , 2) , 2,'test 4 for float values')
  assert.equal(calc(-10, 10), -100, 'test 5 for large numbers')
  assert.equal(calc('a', 0),NaN,'test 6 for invalid input')
})
