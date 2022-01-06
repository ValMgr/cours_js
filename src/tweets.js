"use-strict";

export function favTweet() {
    console.log(this)
    const li = this.parentNode;
    const favs = JSON.parse(window.localStorage.getItem('fav'));

    if (li.classList.contains('fav')) {
        li.classList.remove('fav');
        favs.splice(favs.indexOf(li.id), 1);
        window.localStorage.setItem('fav', JSON.stringify(favs));
    }
    else {
        li.classList.add('fav');
        if (window.localStorage.getItem('fav')) {
            favs.push(li.id);
            window.localStorage.setItem('fav', JSON.stringify(favs));
        }
        else {
            window.localStorage.setItem('fav', JSON.stringify([li.id]));
        }
    }
}

import { createTweetList } from "./createElement.js";
export function filterTweetWithCache(tweets) {
    if (lang === 'all') {
      if (!language.hasOwnProperty('fr')) {
        language.fr = createTweetList(tweets.filter(t => t.lang === 'fr'));
      }
      lang = 'fr';
      language.all.replaceWith(language.fr);
    }
    else {
      lang = 'all';
      language.fr.replaceWith(language.all);
    }
}

export function favTweetsFromStorage(tweets) {
  const favs = JSON.parse(window.localStorage.getItem('fav'));
  favs.forEach(f => tweets[f].faved = true);

}

export function filterTweet(tweets, tl, lang) {
    lang = lang === 'all' ? 'fr' : 'all';
    const tweetFilter = lang === 'all' ? tweets : tweets.filter(t => t.lang === lang);
    const newOl = createTweetList(tweetFilter);
    tl.replaceWith(newOl);
    console.log('old', tl)
    console.log('new', newOl)
    console.log('lang', lang)
    return newOl;
}

export default function () {};
