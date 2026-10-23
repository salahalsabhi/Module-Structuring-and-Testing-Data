export function isValidCardNumber(cardNumber) {
  //The card number must be exactly 16 digits
  if (!/^\d{16}$/.test(cardNumber)) {
    return false;
  }

  //It should contains at least two different digits
  const uniqueDigits = new Set(cardNumber);
  if (uniqueDigits.size < 2) {
    return false;
  }

  //It's last digit must be even
  const lastDigit = Number(cardNumber[15]);
  if (lastDigit % 2 !== 0) {
    return false;
  }

  //It's sum of all digits must be greater than 16
  let sum = 0;
  for (const digit of cardNumber) {
    sum += Number(digit);
  }
  if (sum <= 16) {
    return false;
  }

  return true;
}
