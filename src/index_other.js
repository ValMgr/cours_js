'use strict';

import getJson from './getJson.js';
import { createTweetList, createToggleTrackButton, createAuthorFilter, createFilterButton } from './createElement.js';
import { filterTweet, favTweetsFromStorage } from './tweets.js';

document.addEventListener(
  'DOMContentLoaded',
  async () => {
    await Promise.all([
      getJson('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json'),
      getJson('https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json')
    ]).then(data => {
      const tweets = data.flat();
      let lang = 'all';
      let tweetList = createTweetList(tweets);
      // let language = { 'all': tweetList }
      favTweetsFromStorage(tweets);
      createAuthorFilter(tweets, () => filterAuthor(tweets));
      document.body.append(createFilterButton(() => tweetList = filterTweet(tweets, tweetList, lang)));
      document.body.append(createToggleTrackButton());
      document.body.append(tweetList);
    });
  },
  { once: true },
);

