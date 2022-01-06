"use-strict";

export default async function getJson(url) {
    return fetch(url).then((res) => {
      return res.json();
    }).then(data => {
      return data;
    }).catch(err => {
      throw err;
    });
  }