'use strict';

// Asynchrone

// Question 1:
/* créer une Promesse qui renvoie un nombre aléatoire au bout de 2 secondes.
  Si ce nombre est pair, le résoudre, sinon le rejeter.
  Utiliser setTimeout().
  */



// Question 2
/* Consommer la Promesse de 1) pour
  - afficher le nombre renvoyé quand elle résoud
  - logguer un message d'erreur quand elle est rejetée
  - logguer 'Fin' quoi qu'il arrive
*/

function getRdm(max = 20) {
  // console.log('--- Question 1 ---');
  const _promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const rdm = Math.floor(Math.random() * max);
      rdm % 2 === 0 ? resolve(rdm) : reject(rdm);
    }, 2000)
  });

  // console.log('--- Question 2 ---');
  _promise
    .then(res => console.log('Q1 & Q2 - Success:', res))
    .catch(err => console.error('Q1 & Q2 - Reject:', err, 'is odd'))
    .finally(() => console.log('Q1  & Q2- Promise settled'));
}

getRdm(50);


/* Créer une promesse en utilisant fetch(), et la consommer pour afficher la donnée contenue dans l'url ci-dessous:
*/
// console.log('--- Question 3 ---');

/* Écrire une fonction getJson() qui prend une URL en entrée,
et renvoie la Promesse de récupérer la réponse HTTP parsée depuis du JSON
Utiliser getJson pour refaire la question 3.
*/
// console.log('--- Question 4 ---');


const url = 'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json';
function getJson(url) {
  const _promise = fetch(url).then((res) => {
    if (res.status === 200) {
      // console.log('Q2 & Q3 - Success', res.status, res.statusText);
      return res.json();
    }
    else {
      // console.error('Q2 & Q3 - Reject', res.status, res.statusText);
      return null;
    }
  }).then(data => {
    console.log('Q3 & Q4 - Response', data)
  })
}

getJson(url);



// console.log('--- BONUS ---');
/* Créer une Promesse qui:
  - crée un nombre aléatoire (delay) en 0 et 5000
  - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
  - au bout de delay ms pour résoudre le nombre delay
  - consommer la Promesse de sorte que si elle est rejetée, on recommence jusqu'à ce qu'elle résolve
  - en supposant que l'on ne connaisse pas la limite de 2s, trouver un moyen de la déduire
*/

const valid = [];
const invalid = [];
const sample = 1000;

function getTimeout() {
  return new Promise((resolve, reject) => {
    const rdm = Math.floor(Math.random() * 5000);
    setTimeout(() => resolve(rdm), rdm);
    setTimeout(() => reject(rdm), 2500);
  });
}

async function ResolveTimeout(){
  getTimeout().then(res => {
    console.log('Q5 - Success', res);
    valid.push(res);
    if(valid.length === sample) ProcessData();
  })
  .catch(err => {
    console.error('Q5 - Reject', err);
    invalid.push(err);
    ResolveTimeout();
  });
}

function ProcessData(){
  const maxValid = Math.max(...valid);
  const minInvalid = Math.min(...invalid);
  console.log('Timeout delay is between', maxValid, 'and', minInvalid);
}

function FindRejectDelay(n){
  for (let i=0;i<n;i++) {
    ResolveTimeout();
  }
}

FindRejectDelay(sample);

