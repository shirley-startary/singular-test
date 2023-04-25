import { describe, test, expect } from "vitest";
import { fib, triangular, isPrimo, enesimoPrimo, serie } from "../modules/utils";

describe("Function Fibonacci", () => {
  test("Should return 13 when we pass the number 7 as a parameter ", () => {
    expect(fib(7)).toBe(13);
  });
  test("Should return 55 when we pass the number 10 as a parameter ", () => {
    expect(fib(10)).toBe(55);
  });
});

describe("Function Triangular", () => {
  test("Should return 15 when we pass the number 5 as a parameter", () => {
    expect(triangular(5)).toBe(15)
  });
  test("Should return 21  when we pass the number 6 as a parameter", () => {
    expect(triangular(6)).toBe(21)
  });
});


describe("Function isPrimo", () => {
  test("Should return true when we pass the number 2 as a parameter", () => {
    expect(isPrimo(5)).toBeTruthy
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(isPrimo(4)).toBeFalsy
  });
});


describe("Function enesimoPrimo", () => {
  test("Should return true when we pass the number 2 as a parameter", () => {
    expect(enesimoPrimo(4)).toBe(7)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(enesimoPrimo(6)).toBe(13)
  });
});

describe("Function serie", () => {
  test("Should return true when we pass the number 2 as a parameter", () => {
    expect(serie(1)).toBe(1.5)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(serie(2)).toBe(1.6666666666666667)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(serie(3)).toBe(1.8)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(serie(4)).toBe(1.6875)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(serie(5)).toBe(1.6538461538461537)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(serie(6)).toBe(1.2857142857142858)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(serie(7)).toBe(1.0588235294117647)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(serie(8)).toBe(0.7727272727272727)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(serie(9)).toBe(0.5898876404494382)
  });
  test("Should return false  when we pass the number 6 as a parameter", () => {
    expect(serie(10)).toBe(0.4583333333333333)
  });
});





