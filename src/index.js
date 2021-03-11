module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  const elevenTwenty = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  }

  const numbers = {
    0: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    1: [, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    2: ['hundred', 'hundred', 'hundred', 'hundred', 'hundred', 'hundred', 'hundred', 'hundred', 'hundred']
  }

  if (elevenTwenty[number]) return elevenTwenty[number];

  const stringed = String(number).split('');
  let result;

  if (stringed.length === 1) {
    result = numbers[0][stringed[0] - 1]
  }

  if (stringed.length === 2) {
    if (stringed[1] == 0) {
      result = numbers[1][stringed[0] - 1];

      return result;
    }
    result = stringed[0] == 1 ? `${elevenTwenty[stringed[1] + stringed[2]]}` :
      `${numbers[1][stringed[0] - 1]} ${numbers[0][stringed[1] - 1]}`;

    return result;
  }

  if (stringed.length === 3) {
    if (stringed[1] == 0 && stringed[2] != 0) {
      result = `${numbers[0][stringed[0] - 1]} hundred ${numbers[0][stringed[2] - 1]}`

      return result;
    }

    if (stringed[1] == 0 && stringed[2] == 0) {
      result = `${numbers[0][stringed[0] - 1]} hundred`

      return result;
    }

    if (stringed[2] == 0) {
      result = stringed[1] == 1 ? `${numbers[0][stringed[0] - 1]} hundred ${elevenTwenty[stringed[1] + stringed[2]]}` :
        `${numbers[0][stringed[0] - 1]} hundred ${numbers[1][stringed[1] - 1]}`;

      return result;
    }

    result = stringed[1] == 1 ? `${numbers[0][stringed[0] - 1]} hundred ${elevenTwenty[stringed[1] + stringed[2]]}` :
      `${numbers[0][stringed[0] - 1]} hundred ${numbers[1][stringed[1] - 1]} ${numbers[0][stringed[2] - 1]}`
  }

  return result;
}
