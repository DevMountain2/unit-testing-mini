const functions = require('./function.js');

test("returnTwo() should return 2.", () => {
  expect( functions.returnTwo() ).toEqual( 2 );
});

test("greeting() should return a dynamic greeting based on name.", () => {
  expect( functions.greeting('James') ).toEqual('Hello, James.');
  expect( functions.greeting('Jill') ).toEqual('Hello, Jill.');
});
describe('Math Functions: ', () => {
test("add() should return a dynamic sum based on two number parameters.", () => {
  expect( functions.add( 1, 2 ) ).toBe( 3 );
  expect( functions.add( 5, 9 ) ).toBe( 14 );
});
test('multiply() should return a product based on two paramters.', () => {
  expect(functions.multiply(1,2)).toBe(2);
  expect(functions.multiply(3,4)).toBe(12);
});
test('divide() should return a quotient based on two paramters.', () => {
  expect(functions.divide(2,10)).toBe(.2);
  expect(functions.divide(3,12)).toBe(.25);
});
test('subtract() should return the difference based on tow paramters.', () => {
  expect(functions.subtract(5,2)).toBe(3);
  expect(functions.subtract(4,4)).toBe(0);
})

})
