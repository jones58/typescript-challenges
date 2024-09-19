/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Media
 * ------------------
 *
 * Goal: At Przeprogramowani.pl we use multiple platforms at once - make sure that our favorite one works!
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/enums.html
 */
enum Media {
  Internet = 'Internet',
  Press = 'Press',
  Radio = 'Radio',
}

export const przeprogramowani: Media = Media.Internet;

console.log(przeprogramowani);
