"use strict";

import createElement from "./createElements.js";

export default function initTodo(parent = document.body) {
    const wrapper = createElement('div', ['container']);
    const title = createElement('h2', [], 'todo_title', 'TO DO');

    wrapper.append(title);
    parent.append(wrapper);
    return wrapper;
}