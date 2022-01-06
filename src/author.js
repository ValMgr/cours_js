"use-strict";

export default function getAuthorsList(tweets) {
  let authors = [];
  tweets.forEach(t => {
    if (!authors.includes(t.user.name)) authors.push(t.user.name);
  });
  return authors
}


export function filterAuthor(tweets) {
    let newOl;
    console.log(this)
    if (this.innerText === 'Tous') {
      newOl = createTweetList(tweets);

    }
    else {
      const tweetFilter = tweets.filter(t => t.user.name === this.innerText);
      newOl = createTweetList(tweetFilter);
    }
    tweetList.replaceWith(newOl);
    tweetList = newOl;
}