"use-strict"

import moment from '../node_modules/moment/dist/moment.js';
export function createTweet(tweet, id, css) {
    const li = document.createElement('li');
    li.classList.add(css);
    li.id = id;
    if (tweet.faved) xli.classList.add('fav');
    const lang = document.createElement('span');
    const author = document.createElement('p');
    author.classList.add('tweet__title');
    author.innerText = tweet.user.name
    lang.innerText = tweet.lang;
    lang.classList.add('lang');
    li.textContent = tweet.full_text;
    const pp = document.createElement('img');
    pp.setAttribute('src', tweet.user.profile_image_url_https);
    pp.classList.add('pp');
    li.append(pp);
    const date = document.createElement('span');
    date.classList.add('date');
    date.innerText = moment(tweet.created_at).fromNow();
    const fav = createFavBtn();
    author.append(date)
    li.append(fav);
    li.prepend(lang);
    li.prepend(author);
    return li;
} 

export function createTweetList(list) {
  const ol = document.createElement('ol');
  ol.classList.add('tweet__list');
  list.map((item, i) => ol.append(createTweet(item, i, 'tweet__card')));
  return ol;
}

export function createButton(css, content) {
  const btn = document.createElement('button');
  btn.classList.add(css);
  btn.innerText = content;
  return btn;
}

import favTweet from './tweets.js';
export function createFavBtn() {
  const fav = document.createElement('span');
  fav.classList.add('tweet__fav');
  fav.innerHTML = '&hearts;';
  fav.addEventListener('click', favTweet.bind(this));
  return fav;
}

import toggleTrack from './track.js'
export function createToggleTrackButton() {
  const btn = createButton('toggleTrack', 'Toggle Track');
  btn.setAttribute('state', false);
  btn.addEventListener('click', toggleTrack);
  return btn;
}

export function createFilterButton(fn) {
  const btn = createButton('filter__btn', 'Filtrer');
  btn.addEventListener('click', fn);
  return btn;
}

import getAuthorsList from './author.js';
export function createAuthorFilter(tweets, fn) {
  const authors = getAuthorsList(tweets);
  const allBtn = createButton('filter__authors', 'Tous');
  allBtn.addEventListener('click', fn);
  document.body.append(allBtn);
  authors.forEach(a => {
    const btn = createButton('filter__authors', a);
    btn.addEventListener('click', fn);
    document.body.append(btn);
  });
}