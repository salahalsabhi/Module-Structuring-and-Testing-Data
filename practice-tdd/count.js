export function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  const str = stringOfCharacters.toLowerCase();
  const target = findCharacter.toLowerCase();

  for (let ch of str) {
    if (ch === target) {
      count += 1;
    }
  }
  return count;
}

