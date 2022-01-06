"use strict";

import createElement from "./createElements.js";
import fetchAPI from './fetchAPI.js';

const API_URL = 'https://api-adresse.data.gouv.fr/';
const ENDPOINT = 'search/';
let suggestList = null;

export default function initSearchBar(parent = document.body) {
    const wrapper = createElement('div', ['container']);
    const formGroup = createElement('div', ['form-group', 'position-relative'], 'searchBar_parent');
    const label = createElement('label', ['mb-2'], 'searchBar_label', 'Adresse');
    const searchBar = createElement('input', ['form-control'], 'searchbar');

    searchBar.addEventListener('input', autoComplete);

    wrapper.append(formGroup);
    formGroup.append(label);
    formGroup.append(searchBar);
    parent.append(wrapper);
    return wrapper;
}

async function autoComplete(e) {
    const params = encodeURIComponent(e.target.value.trim());
    const url = `${API_URL}${ENDPOINT}?q=${params}`;
    const raw = await fetchAPI(url);
    const suggestions = raw.features;
    if (suggestList !== null) removeSuggestion();
    suggestList = createElement('div', ['suggestion_list', 'dropdown-menu', 'd-block', 'w-100'], 'autocomplete_list');
    if (suggestions.length === 0) {
        const noEl = noSuggest();
        suggestList.append(noEl);
    }
    else {
        const items = suggestions.map(createSuggestion);
        items.forEach(i => suggestList.append(i));
    }
    document.querySelector('#searchBar_parent').append(suggestList);
}

function noSuggest() {
    const element = createElement('div', ['suggestion', 'dropdown-item'], 'no-result');
    element.innerText = 'Aucun résultats.';
    return element;
}

function createSuggestion(s, i) {
    const suggestion = createElement('div', ['suggestion', 'dropdown-item']);
    suggestion.innerText = s.properties.label
    suggestion.addEventListener('click', () => {
        const input = document.querySelector('#searchbar');
        input.value = s.properties.label;
        removeSuggestion();
    });
    return suggestion;
}


function removeSuggestion() {
    suggestList.remove();
    suggestList = null;
}