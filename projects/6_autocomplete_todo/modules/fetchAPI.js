"use strict";

export default async function fetchAPI(url) {
  return fetch(url).then((res) => {
    return res.json();
  }).then(data => {
    return data;
  }).catch(err => {
    throw err;
  });
}