"use strict"

import createElement from "./createElements.js";
import { getItems } from "./toDo.js";

const ICON = '<i class="fas fa-filter"></i>';

export default function initFilter(list) {
    const element = createElement('btn', ['btn', 'btn-info', 'text-white'], 'filter-btn');
    element.innerHTML = ICON + ' Filter: All';
    element.setAttribute('filter', 'All');
    element.addEventListener('click', filterTodolist.bind(list));
    return element;
}

function filterTodolist(e) {
    const state = e.target.getAttribute('filter') === 'All' ? 'Complete' : 'All';
    e.target.setAttribute('filter', state);
    e.target.innerHTML = ICON + ' Filter : ' + state;
    const filterData = state === 'All'
        ? getItems()
        : getItems().filter(item => item.classList.contains('complete'));
    clearCurrentList(this);
    setList(this, filterData);
}

function clearCurrentList(list) {
    const items = Array.from(list.children);
    if (items.length !== 0) items.forEach(item => {
        item.remove();
    })
}

function setList(list, data) {
    if (data.length !== 0) data.forEach(item => list.append(item));
}