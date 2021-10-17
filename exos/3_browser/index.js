'use strict';

// # 4_Browser
const body = document.body;
/* Exercice 1: Couleurs
    - Créer une <div> pour chaque couleur, avec la class 'color'
    - L'ajouter à l'élément de la page qui a l'id 'exo1'
    - Chaque div doit avoir un fond coloré de sa couleur
    - Chaque div doit afficher en textContent le texte de sa couleur, ainsi que la position de la couleur dans le tableau  (1. white)
    - Au click, chaque div doit changer la couleur du background du body
*/

const colors = [
  'white',
  'blue',
  'red',
  'green',
  'black',
  'grey',
  'orange',
  'purple',
];

function exo1() {
  const exo1 = document.createElement('section');
  exo1.setAttribute('id', 'exo1');
  body.append(exo1);
  colors.forEach((c, i) => {
    const e = document.createElement('div');
    e.textContent = `${i}. ${c}`;
    e.style.backgroundColor = c;
    if (c === 'black') e.style.color = "white";
    e.addEventListener('click', function () {
      body.style.backgroundColor = c;
    });
    exo1.append(e);
  });
}
exo1();

// -------------------------------

/* Exercice 2: Taille
    - Créer une <section> avec l'id 'exo2', et l'ajouter au body
    - Créer une <div> carrée, de couleur noire, et l'ajouter à la 2e section
    - Lui ajouter un listener au mousemove, qui change sa largeur
    en fonction de la position en Y de la souris à l'écran (event.clientY)
*/

function exo2() {
  const exo2 = document.createElement('section');
  exo2.setAttribute('id', 'exo2');
  body.append(exo2);

  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mousemove', function (e) {
    square.style.height = (e.clientY - 50) + "px";
  });
  exo2.append(square);
}
exo2();

// -------------------------------

/* Exercice 3: Timer
    - Créer une <section> avec l'id 'exo3', et l'ajouter au body
    - Y ajouter deux divs: une avec la classe 'nb', et l'autre avec la classe 'dots'
    - Pour chaque seconde écoulée depuis le chargement de la page, (utiliser setInterval())
      - afficher le nombre de points dans '.nb'
      - ajouter une div avec la classe 'dot' à l'élément '.dots'
    - Stocker dans le localstorage l'info du nb de points
    pour recharger la page avec le bon nombre de points dès le début
*/

let isClock = true;
let clock;

function exo3() {
  if(!isClock) isClock = true;
  const exo3 = document.createElement('section');
  exo3.setAttribute('id', 'exo3');
  body.append(exo3);

  const nb = document.createElement('div');
  nb.classList.add('nb');

  const dots = document.createElement('div');
  dots.classList.add('dots');

  function initDots() {
    if (localStorage.getItem('dots')) {
      for (let i = 0; i < localStorage.getItem('dots'); i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dots.append(dot);
        nb.textContent = localStorage.getItem('dots');
      }
    }
  }

  initDots();
  clock = setInterval(() => {
    if (isClock) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dots.append(dot);
      nb.textContent = dots.querySelectorAll('.dot').length;
      localStorage.setItem('dots', nb.textContent);
    }
  }, 1000);

  exo3.append(nb, dots);
}
exo3();

// -------------------------------

/* Exercice 4: Contrôle au clavier
    - Faire en sorte de changer la couleur du background du body quand on appuie sur 1, 2, 3...
    en fonction de la position des boutons de l'exo 1
    - Faire en sorte de remettre la page dans l'état initial (aucune section sauf exo1) lorsque l'on appuie sur CTRL-R (COMMAND-R)
    - Exécuter chacun des 3 premiers exercices lorsque la page est vide en appuyant sur ENTER
    - Faire en sorte de d'arrêter le timer quand on appuie sur S, et de le relancer en réappuyant
*/

const exo4 = document.createElement('section');
exo4.setAttribute('id', 'exo4');


document.addEventListener('keydown', (e) => {
  // console.log(e)
  if (colors[e.key] !== undefined) {
    body.style.backgroundColor = colors[e.key];
  }
  else if (e.key === "r" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    isClock = false;
    clearInterval(clock);
    document.querySelectorAll('section').forEach(s => s.remove());
  }
  else if (e.key === "Enter") {
    if (!document.querySelector('#exo1')) {
      exo1();
    } else if (!document.querySelector('#exo2')) {
      exo2();
    } else if (!document.querySelector('#exo3')) {
      exo3();
    } else if (!document.querySelector('#exo5')) {
      exo5();
    }
  }
  else if (e.key === "s") {
    isClock ? isClock = false : isClock = true;
    isClock ? document.querySelector('.nb').style.color = 'green' : document.querySelector('.nb').style.color = 'red';
  }
  else if (e.key === 'z' && (e.metaKey || e.ctrlKey)) {
    isClock = false;
    document.querySelectorAll('.dot').forEach(d => d.remove());
    localStorage.removeItem('dots');
    isClock = true;
  }
});




// -------------------------------

/* Exercice BONUS: Harry Potter
    - Créer une <section> avec l'id 'exoBonus', et l'ajouter au body
    - Créer une <div> pour Harry, avec la classe 'character' et l'ajouter à la 3e section
    - La div 'character' a pour enfant une div avec la classe 'name' avec le nom en textContent
    et une img avec le src correspondant
    - Ajouter un listener qui, au click, choisit un personnage au hasard
    puis remplace la <div> cliquée par une nouvelle <div>
    créée de zéro de la même manière, avec les infos du nouveau personnage
    - Enregistrer le personnage affiché dans le localstorage pour le recharger au démarrage
*/

const characters = [
  {
    name: 'Harry',
    src: 'static/Harry_Potter_character_poster.jpeg',
  },
  {
    name: 'Hermione',
    src: 'static/Hermione_Granger_poster.jpeg',
  },
  {
    name: 'Ron',
    src: 'static/Ron_Weasley_poster.jpeg',
  },
  {
    name: 'Sirius',
    src: 'static/Sirius_Black.jpeg',
  },
  {
    name: 'Rubeus',
    src: 'static/RubeusHagrid.jpeg',
  },
  {
    name: 'Albus',
    src: 'static/Dumbledore_and_Elder_Wand.jpeg',
  },
];

function exo5() {
  const exo5 = document.createElement('section');
  exo5.setAttribute('id', 'exo5');
  body.append(exo5);
  localStorage.getItem('character')

  if (localStorage.getItem('character') !== null) {
    createCharacter({
      name: localStorage.getItem('character').split(',')[0],
      src: localStorage.getItem('character').split(',')[1],
    });
  }
  else {
    createCharacter(characters[0]);
  }
}

function createCharacter(c) {
  const card = document.createElement('div');
  card.classList.add('character')
  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = c.name;
  card.append(name);
  const img = document.createElement('img');
  img.setAttribute('src', c.src);
  card.append(img);
  document.querySelector('#exo5').append(card);
  localStorage.setItem('character', [c.name, c.src]);

  card.addEventListener('click', () => {
    let newChar = newP();
    while (newChar.name === c.name) {
      newChar = newP();
    }
    card.remove();
    createCharacter(newChar);
  });
}

function newP() {
  const id = Math.floor(Math.random() * characters.length);
  return characters[id];
}

exo5();