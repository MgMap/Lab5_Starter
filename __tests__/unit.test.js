// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber - valid phone number with area code', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(false);
});
test('isPhoneNumber - valid phone number without area code', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});
test('isPhoneNumber - invalid phone number with letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('isPhoneNumber - invalid phone number with missing digits', () => {
  expect(isPhoneNumber('123-45')).toBe(false);
});

// Tests for isEmail
test('isEmail - valid email with simple domain', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('isEmail - valid email with numbers', () => {
  expect(isEmail('user123@mailexample.com')).toBe(true);
});
test('isEmail - invalid email without "@"', () => {
  expect(isEmail('testexample.com')).toBe(false);
});
test('isEmail - invalid email with invalid domain', () => {
  expect(isEmail('user$$@com')).toBe(false);
});

// Tests for isStrongPassword
test('isStrongPassword - valid password with letters and numbers', () => {
  expect(isStrongPassword('Abc1234')).toBe(true);
});
test('isStrongPassword - valid password with underscore', () => {
  expect(isStrongPassword('A_bc123')).toBe(true);
});
test('isStrongPassword - invalid password starting with number', () => {
  expect(isStrongPassword('1abc123')).toBe(false);
});
test('isStrongPassword - invalid password with special characters', () => {
  expect(isStrongPassword('Abc@123')).toBe(false);
});

// Tests for isDate
test('isDate - valid date in MM/DD/YYYY format', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('isDate - valid date with single-digit month and day', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('isDate - invalid date with wrong format', () => {
  expect(isDate('2023-12-25')).toBe(false);
});
test('isDate - invalid date with missing year', () => {
  expect(isDate('12/25')).toBe(false);
});

// Tests for isHexColor
test('isHexColor - valid 3-character hex code', () => {
  expect(isHexColor('#abc')).toBe(true);
});
test('isHexColor - valid 6-character hex code', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});
test('isHexColor - invalid hex code with extra characters', () => {
  expect(isHexColor('#abcd123')).toBe(false);
});
test('isHexColor - invalid hex code with non-hex characters', () => {
  expect(isHexColor('#xyz')).toBe(false);
});