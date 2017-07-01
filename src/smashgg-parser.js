export function normalizeUrl(url) {
  const slug = url.match('.*smash.gg/tournament/([^/]+).*')[1];
  return `https://smash.gg/tournament/${slug}`;
}
