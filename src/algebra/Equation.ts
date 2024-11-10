export class Equation {
  static solveLinear(a: number, b: number): string {
    if (a === 0) {
      return b === 0 ? "Infinite solutions" : "No solution";
    }

    return `x = ${-b / a}`;
  }

  static solveQuadratic(a: number, b: number, c: number): string {
    if (a === 0) {
      return Equation.solveLinear(b, c);
    }

    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
      return "No real solutions";
    }

    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    if(discriminant === 0){
        return `One real solution: x = ${x1}`
    }else{
        return `Two real solutions: x1 = ${x1}, x2 = ${x2}`;
    }
  }
}
