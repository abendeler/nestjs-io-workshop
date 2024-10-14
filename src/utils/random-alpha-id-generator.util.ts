export function randomAlphaIdGenerator(idLength = 10) {
  const codeForUpperCaseA = 65;
  const codeForUpperCaseZ = 90;
  let chars = '';

  while (chars.length < idLength) {
    const max = codeForUpperCaseZ;
    const min = codeForUpperCaseA;
    const randomNumber = Math.random() * (max - min) + min;
    chars += String.fromCharCode(randomNumber);
  }
  return chars;
}
