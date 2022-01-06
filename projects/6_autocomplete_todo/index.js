// ## Autocomplete + Todo
// Faire un autocomplete sur l’api geo, avec un Todo
// - Chercher des adresses ✅
// - Quand on sélectionne un adresse, ca la rajoute à la liste de TODO
// - On peut compléter un TODO
// - On peut supprimer un TODO
// - On peut choisir de n’afficher que les TODO non complétés

// ### Remarques
// - Utiliser fetch ✅
// - Utiliser l’API geo adresse: https://adresse.data.gouv.fr/api-doc/adresse ✅
// - Faire des modules (fichiers) différents, et utiliser import/export ✅
// - Maintenir deux listes: suggestions et todos
// - Chaque fois qu’une liste est mise a jour, reconstruire le morceau de DOM correspondant, et le placer au bon endroit (ok de passer par getElementById pour cibler l’endroit)
// - Construire tout le DOM en JS ✅
// - ne perdez pas de temps sur le style ✅

// ### Critères de notation
// - maitriser la syntaxe JS de base
// - manipuler des tableaux
// - récupérer de la donnée
// - manipuler le DOM
// - organiser votre code

"use strict";

import initSearchBar from "./modules/searchBar.js";
import initTodo from "./modules/toDo.js";

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(async () => {
    const searchBar = initSearchBar();
    const todo = initTodo()
});

