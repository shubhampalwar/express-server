export default function trianglePattern(n: number): void {
  console.log(`Printing Equilateral Triangle of ${n} rows....`);
  let pattern: string = "",
    i: number,
    j: number,
    k: number;
  for (i = 1; i <= n; i++) {
    for (j = i; j <= n - 1; j++) {
      pattern += " ";
    }
    for (k = 1; k <= i; k++) {
      pattern += "* ";
    }
    console.log(pattern);
    pattern = "";
  }
}
