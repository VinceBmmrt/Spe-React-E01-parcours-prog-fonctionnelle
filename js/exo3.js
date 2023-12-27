/*

Ça va pas être possible…
========================

Et si on sortait en boîte de nuit ?

Objectifs
---------
Créer un tableau `allowedUsers` à partir du tableau `users` ne comportant que les membres qui ont le droit d'entrer.

Afin de pouvoir entrer en boîte de nuit, il faut :
- Avoir au moins 18 ans;
- Avoir au moins 20€ en poche;
- Si on n'a pas 18 ans, avoir 500€ en poche pour corrompre le videur

Sinon, ça va pas être possible !

Notions
-------
- Array : ce serait cool de pouvoir filtrer… (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)

*/

const users = [
  {
    name: 'Claire',
    age: 34,
    cash: 2250,
  },
  {
    name: 'Phil',
    age: 35,
    cash: 1005,
  },
  {
    name: 'Haley',
    age: 18,
    cash: 10,
  },
  {
    name: 'Luke',
    age: 15,
    cash: 0,
  },
  {
    name: 'Alex',
    age: 16,
    cash: 400,
  },
  {
    name: 'Manny',
    age: 14,
    cash: 777,
  },
  {
    name: 'Lily',
    age: 5,
    cash: 5,
  },
];

const allowedUsers = users.filter((user) => {
  // Si il a plus de 500€, il peut entrer quelque soit son âge
  if(user.cash >= 500) {
    return true;
  }

  // Sinon il doit être majeur avec au moins 20€
  if(user.age >= 18 && user.cash >= 20) {
    return true;
  }

  // Sinon il ne rentre pas
  return false;
});

// Autres solutions
// const allowedUsers = users.filter(user => user.cash > 500 || (user.age >= 18 && user.cash >= 20))

// const allowedUsers = users.filter(user => {
//   if (user.age >= 18 && user.cash >= 20) {
//     return true; // A au moins 18 ans et a au moins 20€ en poche
//   } else if (user.age < 18 && user.cash >= 500) {
//     return true; // A moins de 18 ans, mais a au moins 500€ pour corrompre le videur
//   } else {
//     return false;
//   }
// });









/*
 * Tests
 */
const result = document.getElementById('test');
if (
  allowedUsers.length === 3
  && allowedUsers[0].name === 'Claire'
  && allowedUsers[1].name === 'Phil'
  && allowedUsers[2].name === 'Manny'
) {
  result.className = 'success';
  result.textContent = 'Yep !';
}
