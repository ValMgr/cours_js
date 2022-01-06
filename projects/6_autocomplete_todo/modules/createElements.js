"use strict";

const txtElement = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'label', 'a', 'button'];

export default function createElement(type = 'div', cssClass = [], id = generateID(), content = ''){
    const element = document.createElement(type);
    element.id = id;
    cssClass.forEach(css => element.classList.add(css));
    if(txtElement.includes(type)) element.innerText = content;
    return element;
}


function generateID(){
    const rdmChar = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return rdmChar() + rdmChar();
}