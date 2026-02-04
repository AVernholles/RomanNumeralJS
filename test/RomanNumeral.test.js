// use named imports
import { RomanNumeral } from '../src/RomanNumeral';

test('Jest should be able to spy someMethod', () => {
  const romanNumeral = new RomanNumeral();

  expect(romanNumeral.askCesar()).toBe('Cesar said TDD is fun')
});