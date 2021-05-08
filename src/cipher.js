const encode = (text, shift) => {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  return text
    .split('')
    .map((char, i) => {
      const index = ALPHABET.indexOf(char.toLowerCase());
      if (index === -1) {
        return char;
      }
      const newIndex = index + shift;
      const { length } = ALPHABET;
      const encoded =
        ALPHABET[newIndex < 0 ? (length + (newIndex % length)) % length : newIndex % length];
      return text[i] === text[i].toUpperCase() ? encoded.toUpperCase() : encoded;
    })
    .join('');
};

const decode = (text, shift) => encode(text, -1 * shift);

module.exports = { encode, decode };
