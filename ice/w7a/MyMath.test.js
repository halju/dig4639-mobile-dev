import { Sum } from './MyMath.js'
import { AddList } from './MyMath.js'
import { DivideBy } from './MyMath.js'
import { ContainsString } from './MyMath.js'
import { Adder } from './MyMath.js'

describe("Sum", () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(Sum(1, 2)).toBe(3)
  })
  
  it('produces the sum of 10 + 20, which should be 30', () => {
    expect(Sum(10, 20)).toBe(30)
  })
})

// ICE 

describe("AddList", () => {
  test('Adds all numbers in list', () => {
    let numElem = 1000;
    let input = [];
    let result = 0;
    for (var i = 0; i < numElem; i++) {
      var elem = Math.random()*1000;
      result += elem;
      input.push(elem);
    }
    expect(AddList(input)).toBe(result);
    let input2 = [15,5,8,-10];
    let result2 = 18;
    expect(AddList(input2)).toBe(result2);
  })
  test('Test if empty array returns undefined', () => {
    let input = [];
    expect(AddList(input)).toBeUndefined();
  })
  test('Test if undefined element returns undefined', () => {
    let input = [undefined,0,2,3];
    expect(AddList(input)).toBeUndefined();
  })
  test('Test if non array returns undefined', () => {
    let input = 100;
    expect(AddList(input)).toBeUndefined();
  })
})


describe("DivideBy", () => {
  test('Divides two numbers', () => {
    expect(DivideBy(6, 3)).toBe(2)
  })
})

describe("ContainsString", () => {
  test('Returns true if the first parameter has as a substring the second parameter', () => {
    expect(ContainsString("snowbird", "snow")).toBe(true)
  })
})

/*  describe("Adder", () => {
  test('adds 5 + 6 to equal 11', () => {
    expect(Adder(this.props.5, this.props.6)).toBe(this.sum())
  })
}) */

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
