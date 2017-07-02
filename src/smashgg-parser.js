/* eslint prefer-template: "off" */

function parseSlug(url) {
  return url.match('.*smash.gg/tournament/([^/]+).*')[1];
}

export function normalizeUrl(url) {
  const slug = parseSlug(url);
  return `https://smash.gg/tournament/${slug}`;
}

export function isMatchingUrl(url) {
  return url.match(/.*smash.gg.*/);
}

export function generalInfoAPIUrl(url) {
  const slug = parseSlug(url);
  return 'https://smash.gg/api/-/resource/gg_api./tournament/' +
         slug +
         ';expand=%5B%22groups%22%2C%22tournament%22%2C%22event%22%5D' +
         ';slug=' +
         slug;
}
