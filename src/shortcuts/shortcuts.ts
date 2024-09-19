/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Shortcuts
 * ------------------
 *
 * Goal: Make sure that everything works fine - it's that simple!
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/classes.html
 */

class Bag {
  items: string[];
  constructor(items: string[]) {
    this.items = items;
  }

  lookInside() {
    return this.items;
  }
}

class BrandedBag extends Bag {
  brand!: string;
  logo!: string;
  constructor(logo: string, brand: string, items: string[]) {
    super(items);
    this.logo = logo;
    this.brand = brand;
  }

  checkBrand() {
    return `Brand - ${this.brand}`;
  }
}

export const devBag = new BrandedBag('<P/>', 'Przeprogramowani.pl', [
  'keys',
  'sunglassess',
  'books',
]);
