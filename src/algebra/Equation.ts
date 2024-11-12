interface LinearSolution {
  infiniteSolutions: boolean;
  noSolution: boolean;
  solution?: number;
  message: string;
}

interface QuadraticSolution {
  infiniteSolutions: boolean;
  noSolution: boolean;
  solutions?: number[];
  message: string;
}

export class Equation {
  static solveLinear(a: number, b: number): LinearSolution {
    if (a === 0) {
      if (b === 0) {
        return {
          infiniteSolutions: true,
          noSolution: false,
          message: "Infinite solutions",
        };
      } else {
        return {
          infiniteSolutions: false,
          noSolution: true,
          message: "No solution",
        };
      }
    }

    const solution = -b / a;
    return {
      infiniteSolutions: false,
      noSolution: false,
      solution,
      message: `x = ${solution}`,
    };
  }

  static solveQuadratic(a: number, b: number, c: number): QuadraticSolution {
    if (a === 0) {
      const linearSolution = Equation.solveLinear(b, c);
      return {
        infiniteSolutions: linearSolution.infiniteSolutions,
        noSolution: linearSolution.noSolution,
        solutions: linearSolution.solution ? [linearSolution.solution] : [],
        message: linearSolution.message,
      };
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      return {
        infiniteSolutions: false,
        noSolution: true,
        message: "No real solution",
      };
    }

    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    if (discriminant === 0) {
      return {
        infiniteSolutions: false,
        noSolution: false,
        solutions: [x1],
        message: `One real solution: x = ${x1}`,
      };
    } else {
      return {
        infiniteSolutions: false,
        noSolution: false,
        solutions: [x1, x2],
        message: `Two real solutions: x1 = ${x1}, x2 = ${x2}`,
      };
    }
  }
}
