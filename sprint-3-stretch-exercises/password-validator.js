const defaultPreviousPasswords = ["password", "12345", "qwerty"];

export function isValidPassword(
  password,
  previousPasswords = defaultPreviousPasswords
) {
  if (password.length < 5) {
    return false;
  }

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSymbol = /[!#$%.*&]/.test(password);

  if (!hasUpper || !hasLower || !hasDigit || !hasSymbol) {
    return false;
  }

  if (previousPasswords.includes(password)) {
    return false;
  }

  return true;
}
