/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Only one
 * ------------------
 *
 * Goal: Make sure that both `eatBanana` and `eatMouse` can be called inside `eatSomething`.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
 */

class Monkey {
  eatBanana() {
    return 'Eating banana!';
  }
}

class Snake {
  eatMouse() {
    return 'Eating mouse!';
  }
}

export const monkey = new Monkey();
export const snake = new Snake();

type AnimalInZoo = Monkey | Snake;

function isMonkey(animal: AnimalInZoo): animal is Monkey {
  return (animal as Monkey).eatBanana !== undefined;
}

export function eatSomething(animal: AnimalInZoo) {
  if (isMonkey(animal)) {
    return monkey.eatBanana();
  } else {
    return snake.eatMouse();
  }
}

/* Do not modify tests */
