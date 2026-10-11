export function getOrdinalNumber(num) {
  return num % 100 === 11 || num % 100 === 12 || num % 100 === 13
    ? `${num}th`
    : num % 10 === 1
      ? `${num}st`
      : num % 10 === 2
        ? `${num}nd`
        : num % 10 === 3
          ? `${num}rd`
          : `${num}th`;
}
