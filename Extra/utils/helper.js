export function validateEmail(email) {
  const regex = /^\w+@successive.tech$/;
  return regex.test(email);
}
