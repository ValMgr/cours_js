/** Password - 18 Novembre
 *  Générateur de mot de passe :
 *  - Choix nbr de charactères -> int slider
 *  - Chiffres ? true / false
 *  - Char spéciaux ? true / false
 *  - Majuscule ? true / false
 *  - Btn générer => Afficher dans un champs texte
 * 
 *   */

document.querySelector('#generate').addEventListener('click', () => getParams());
document.querySelector('#i1').addEventListener('input', e => { document.querySelector('#i1-indicator').innerText = e.target.value })

const char = "abcdefghijklmnopqrstuvwxyz";
const caps = char.toUpperCase();
const special = '?!$&@#ù({})';


function getParams() {
    const char = parseInt(document.querySelector('#i1').value);
    const functions = [getChar];
    if (document.querySelector('#i2').checked) functions.push(getNumber);
    if (document.querySelector('#i3').checked) functions.push(getCaps);
    if (document.querySelector('#i4').checked) functions.push(getSpecialChar);
    PassGen(char, functions);
}


function PassGen(nbr, fn) {
    let pwd = "";
    for (let i = 0; i < nbr; i++) {
        let r = Math.floor(Math.random() * fn.length);
        pwd += fn[r]();
    }
    document.querySelector('#result').innerText = pwd;
}

function getChar() {
    return char[Math.floor(Math.random() * char.length)];
}

function getCaps() {
    return caps[Math.floor(Math.random() * caps.length)];
}

function getNumber() {
    return Math.floor(Math.random() * 10);
}

function getSpecialChar() {
    return special[Math.floor(Math.random() * special.length)];
}