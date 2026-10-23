const previousPasswords = ["password", "12345", "qwerty"];

export function isValidPassword(password) {
  if (password.length < 5) {
    return false;
  }

  const upperCase = /[A-Z]/.test(password);
  const lowerCase = /[a-z]/.test(password);
  const number = /[0-9]/.test(password);
  const symbol = /[!#$%.*&]/.test(password);

  if (!upperCase || !lowerCase || !number || !symbol) {
    return false;
  }

  if (previousPasswords.includes(password)) {
    return false;
  }

  return true;
}
