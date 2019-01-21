export default function trianglePattern(n: number): void {
  console.log(`Printing Equilateral Triangle of ${n} rows....`);
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n - 1; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
      pattern += "* ";
    }
    console.log(pattern);
    pattern = "";
  }
}
