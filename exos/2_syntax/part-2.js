'use strict';

// # 2-1_Syntax, Partie 2

console.log('');
console.log('--- PARTIE 2 ---');
console.log('');
console.log('--- Ça va boucler sévère ! ---');
console.log('--- 1 ---');
/*
  créer une fonction 'x10' qui prend un nombre en entrée et renvoie ce nombre multiplié par 10.
*/
function x10(input) {
  return input * 10;
}
console.log(x10(3));
console.log('--- 2 ---');
/*
  créer un nouveau tableau à partir de 'nombres' contenant chaque nombre multiplié par 10, en utilisant 'x10'
  Utiliser une boucle for
*/
const nombres = [23, 12, 57, 178, 139, 434, 222, 1000, 59, 887, 3141];
const nombrex10 = [];
//nombres.forEach(n => nombrex10.push(x10(n)));
for (let i = 0; i < nombres.length; i++) {
  nombrex10.push(x10(nombres[i]));
}
console.log(nombrex10);

console.log('--- 2-bis ---');
const nombrex10_2 = [];
for (const n of nombres) {
  nombrex10_2.push(x10(n));
}
console.log(nombrex10_2)
console.log('--- 2-ter ---');
// la même chose avec .map
const nombrex10_3 = [];
nombres.map(n => nombrex10_3.push(x10(n)));
console.log(nombrex10_3)
console.log('--- 3 ---');
/* [6] à partir de "nombres", créer un nouveau tableau avec seulement les entiers plus grands que 100
  en utilisant une boucle if
*/
const h100 = [];
nombres.map(n => {
  if (n > 100) h100.push(n);
});
console.log(h100);
console.log('--- 3-bis ---');
// la même chose avec .filter
const h100_2 = nombres.filter(n => n > 100);
console.log(h100_2);

console.log('--- 4 ---');
/*
  à partir de "nombres", créer un nouveau tableau avec seulement les entiers pairs
  en utilisant .filter()
*/
const even = nombres.filter(n => n % 2 === 0);
console.log(even);
console.log('--- 5 ---');
// créer une fonction 'getLength' qui prend une string en entrée en renvoie sa longueur
function getLength(str) {
  return str.length;
}
console.log(getLength('Valentin'));
console.log('--- 6 ---');
/*
  logguer chacune des valeurs de "couleurs" et leur longueur dans la console
  en utilisant .forEach() et 'getLength'.
  ranger le résultat de couleurs.forEach(...) dans une variable '_longueurs'
*/
const couleurs = ['Bleu', 'Rouge', 'Vert', 'Jaune', 'Violet', 'Noir', 'Magenta', 'Jaune citron', 'Bleu Saphir']
const _longueurs = [];
couleurs.forEach(c => _longueurs.push({ 'color': c, 'length': getLength(c) }));
console.log(_longueurs)
console.log('--- 7 ---');
/*
  à partir de couleurs créer un nouveau tableau 'longueurs' contenant toutes les longueurs
  en utilisant .map() et 'getLength'.
  logguer '_longueurs' et 'longueurs', comprendre la différence entre .map et .forEach
*/
const longueurs = couleurs.map(c => getLength(c));
console.log(longueurs)
console.log('');
console.log("--- Si t'en as marre, c'est normal, c'est la fin ---");
console.log('--- 1 ---');
/*
ajouter 2 ou 3 nouvelles personnes au tableau "personnes", en utilisant .push()
*/
const personnes = [{ nom: 'Romain', date: '1985-12-31' }];
personnes.push({ nom: 'Valentin', date: '2000-11-11' });
personnes.push({ nom: 'Léonardo', date: '1974-11-11' });
personnes.push({ nom: 'George', date: '1885-11-11' });
personnes.push({ nom: 'John', date: '2000-10-01'})
console.log(personnes)

console.log('--- 2 ---');
/*
  à partir de "personnes", créer un nouveau tableau contenant seulement les noms en utilisant .map()
*/
const names = personnes.map(p => p.nom);
console.log(names)

console.log('--- 3 ---');
/*
  créer une fonction "calculerAge" qui en entrée prend un string représentant la date de naissance
  et renvoie l'âge en nombre, en utilisant Date()
*/
function calculerAge(birth) {
  let d = new Date(birth), n = new Date();
  return  Math.floor((n - d) / 1000 / 3600 / 24 / 365.25);
}
console.log(calculerAge(personnes[4].date))
console.log('--- 4 ---');
/*
  à partir de "personnes" et "calculerAge", créer un nouveau tableau contenant seulement les âges
*/
const age = personnes.map(p => calculerAge(p.date));
console.log(age);