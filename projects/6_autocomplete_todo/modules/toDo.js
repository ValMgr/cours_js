"use strict";

import createElement from "./createElements.js";

const ITEMS = [];

export function initTodo(parent = document.body) {
    const wrapper = createElement('div', ['container']);
    const header = createElement('div', ['d-flex', 'justify-content-between'], 'todo-header');
    const title = createElement('h2', ['d-flex', 'align-items-center'], 'todo_title', 'TODO LIST');
    const list = createElement('ul', ['mt-3'], 'todo-list');
    wrapper.append(header);
    header.append(title);
    wrapper.append(list);
    parent.append(wrapper);
    return list;
}

export function addItem(content) {
    const element = createElement('div', ['todo-item', 'd-flex', 'justify-content-between', 'mb-2']);
    const text = createElement('p', ['todo-title', 'd-flex', 'align-items-center'], '', content);
    const btnGroup = createElement('div', []);
    const completeBtn = createElement('button', ['btn', 'btn-primary', 'complete-btn'], '', 'Complete');
    const deleteBtn = createElement('button', ['btn', 'btn-danger', 'delete-btn', 'ms-2'], '', 'X');

    completeBtn.addEventListener('click', completeItem);
    deleteBtn.addEventListener('click', removeItem);

    btnGroup.append(completeBtn);
    btnGroup.append(deleteBtn);
    element.append(text);
    element.append(btnGroup);

    ITEMS.push(element);
    return element;
}

export function removeItem(e) {
    const element = this.parentNode.parentNode;
    element.remove();
    ITEMS.splice(ITEMS.findIndex(e => e === element), 1);
}

export function completeItem(e){
    const element = this.parentNode.parentNode;
    const isComplete = element.classList.contains('complete');
    isComplete ? element.classList.remove('complete') : element.classList.add('complete');
}

export function getItems(){
    return ITEMS;
}