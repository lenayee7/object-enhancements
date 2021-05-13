// 1. Same keys and values
//In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.
// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }

/* Write an ES2015 Version */
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// 2. Computed Property Names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: 'Colt',
// };
// instructor[favoriteNumber] = 'That is my favorite!';

/* Write an ES2015 Version */
let favoriteNumber = 42;
const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!',
};

// 3. Computed Property Names ES2015
// var instructor = {
//   firstName: 'Colt',
//   sayHi: function () {
//     return 'Hi!';
//   },
//   sayBye: function () {
//     return this.firstName + ' says bye!';
//   },
// };

/* Write an ES2015 Version */
const instructor = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  },
};

// 4. createAnimal function

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
