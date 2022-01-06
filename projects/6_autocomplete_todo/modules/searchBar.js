"use strict";

import createElement from "./createElements.js";
import fetchAPI from './fetchAPI.js';

const API_URL = 'https://api-adresse.data.gouv.fr/'
const ENDPOINT = 'search/'

export default function initSearchBar(parent = document.body) {
    const wrapper = createElement('div', ['container']);
    const formGroup = createElement('div', ['form-group']);
    const label = createElement('label', ['mb-2'], 'searchBar_label', 'Adresse');
    const searchBar = createElement('input', ['form-control'], 'searchbar');
    const addBtn = createElement('button', ['btn', 'btn-primary', 'mt-2'], 'addBtn', 'Add');

    searchBar.addEventListener('input', autoComplete);

    wrapper.append(formGroup);
    formGroup.append(label);
    formGroup.append(searchBar);
    wrapper.append(addBtn);
    parent.append(wrapper);
    return wrapper;
}

function createSuggestion(data) {

}

async function autoComplete(e) {
    const params = encodeURIComponent(e.target.value.trim());
    const url = `${API_URL}${ENDPOINT}?q=${params}`;
    const raw = await fetchAPI(url);
    const suggestions = raw.features;
    createSuggestion(suggestions);
}