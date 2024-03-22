export default class GenerateRandomList {
  generateRandomStringArray(length, maxLengthOfStrings) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const array = [];

    for (let i = 0; i < length; i += 1) {
      const stringLength = Math.floor(Math.random() * maxLengthOfStrings) + 1;
      let randomString = '';

      for (let j = 0; j < stringLength; j += 1) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      array.push(randomString);
    }

    return array;
  }
}
