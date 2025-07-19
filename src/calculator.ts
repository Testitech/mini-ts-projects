type Symbols = "add" | "subtract" | "multiply" | "divide";

function Calculator(x: number, y: number, calc: Symbols) {
  switch (calc) {
    case "add":
      return x + y;
    case "subtract":
      return x - y;
    case "multiply":
      return x * y;
    case "divide":
      return x / y;
    default:
      throw new Error("Invalid Syntax");
  }
}

console.log(Calculator(334, 990, "add"));
