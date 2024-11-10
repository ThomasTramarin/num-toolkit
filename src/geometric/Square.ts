export class Square {
    static area(side: number): number {
        return side * side;
    }

    static perimeter(side: number): number {
        return side * 4;
    }

    static diagonal(side: number): number {
        return side * Math.sqrt(2);
    }

    static circumcircleRadius(side: number): number {
        return side * Math.sqrt(2) / 2;
    }

    static incircleRadius(side: number): number {
        return side / 2;
    }

    static circumcirclePerimeter(side: number): number {
        const radius = side * Math.sqrt(2) / 2;
        return 2 * Math.PI * radius;
    }

    static circumcircleArea(side: number): number {
        const radius = side * Math.sqrt(2) / 2;
        return Math.PI * radius * radius;
    }

    static incircleArea(side: number): number {
        const radius = side / 2;
        return Math.PI * radius * radius;
    }

    static sideFromArea(area: number): number {
        return Math.sqrt(area);
    }

    static sideFromPerimeter(perimeter: number): number {
        return perimeter / 4;
    }

    static sideFromDiagonal(diagonal: number): number {
        return diagonal / Math.sqrt(2);
    }

    
    constructor(public side: number) {}

    // Instance methods
    area(): number {
        return this.side * this.side;
    }

    perimeter(): number {
        return this.side * 4;
    }

    diagonal(): number {
        return this.side * Math.sqrt(2);
    }

    circumcircleRadius(): number {
        return this.side * Math.sqrt(2) / 2;
    }

    incircleRadius(): number {
        return this.side / 2;
    }

    circumcirclePerimeter(): number {
        const radius = this.side * Math.sqrt(2) / 2;
        return 2 * Math.PI * radius;
    }

    circumcircleArea(): number {
        const radius = this.side * Math.sqrt(2) / 2;
        return Math.PI * radius * radius;
    }

    incircleArea(): number {
        const radius = this.side / 2;
        return Math.PI * radius * radius;
    }
}