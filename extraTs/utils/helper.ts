export function validateEmail(email: string): boolean {
  const regex: RegExp = /^\w+@successive.tech$/;
  return regex.test(email);
}
