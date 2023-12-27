/*

For Hitch
=========

Utilisons le tableau de chaînes de caractères `items` pour présenter chaque entrée dans le DOM.

Objectifs
---------
- Contruire une liste HTML (avec des <li>)
- Ajouter la liste dans le ul#result déjà présent dans le HTML

Notions
-------
- DOM : document.getElementById / document.createElement / appendChild
- Array : forEach

*/

const items = ['Sunglasses', 'Suit', 'Business card', 'Jet ski'];

// 1. Récupérer le ul#result
const ulElm = document.getElementById('result');

// 2. Pour chaque élément du tableau `items`
items.forEach((item) => {
  // 3. Créer un élément li
  const liElm = document.createElement('li');
  // 4. Je renseigne le contenu de mon li
  liElm.textContent = item;
  // 5. Je rajoute le li dans mon ul
  ulElm.append(liElm);
})
