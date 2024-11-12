export class Random {
  static generateInt(
    min: number,
    max: number,
    inclusive: boolean = false
  ): number {
    if (inclusive) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }

  static generateBoolean(probability: number = 0.5): boolean {
    
    if (probability < 0 || probability > 1) {
      console.warn("Probability out of range [0, 1]. Set to 0.5.");
      probability = 0.5;
    }
    return Math.random() < probability;
  }

  static generateFloat(min: number, max: number, inclusive: boolean = false, precision: number = 2): number {
    let randomFloat: number;

    if(inclusive){
        randomFloat = Math.random() * (max - min + Number.MIN_VALUE) + min;
    }else{
        randomFloat = Math.random() * (max - min) + min;
    }

    return parseFloat(randomFloat.toFixed(precision));
  }

  static chooseRandomElement<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  static shuffleArray<T>(arr: T[]): T[] {
    let shuffledArray = [...arr]; 

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  }

}
