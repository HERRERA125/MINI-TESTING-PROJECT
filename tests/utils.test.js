const { sum, isAdult } = require("../src/utils");

test("debe sumar correctamente", () => {
  expect(sum(2, 3)).toBe(5);
});

test("debe validar si es mayor de edad", () => {
  expect(isAdult(20)).toBe(true);
  expect(isAdult(16)).toBe(false);
});
