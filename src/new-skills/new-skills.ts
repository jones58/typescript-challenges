/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * New skills
 * ------------------
 *
 * Goal: Make sure that `johnDoe` can build his impressive resume. Do not use classes.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
 */

interface Singer {
  sing(): string;
}

interface Dancer {
  dance(): string;
}

interface Teacher {
  teach(): string;
}

function sing() {
  return 'I can sing!';
}

function dance() {
  return 'I can dance!';
}

function teach() {
  return 'I can teach!';
}

type SkilledPerson = Singer & Dancer & Teacher;

export const johnDoe: SkilledPerson = {
  sing: sing, // Referencing the sing function
  dance: dance, // Referencing the dance function
  teach: teach, // Referencing the teach function
};

export function buildResume(person: SkilledPerson) {
  const skills = [person.dance(), person.sing(), person.teach()];
  return skills;
}
