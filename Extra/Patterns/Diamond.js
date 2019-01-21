export default function diamondPattern(n) {
  console.log("Printing diamond of " + n + " rows....");
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
  for (let i = n; i >= 1; i--) {
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
