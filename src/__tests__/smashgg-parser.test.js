import { normalizeUrl } from '../smashgg-parser';

describe('normalizeUrl', () => {
  it('removes suffixes', () => {
    const originalUrl = 'https://smash.gg/tournament/norcal-smash-4-s-arcadian-runback/events';
    const normalizedUrl = 'https://smash.gg/tournament/norcal-smash-4-s-arcadian-runback';
    expect(normalizeUrl(originalUrl)).toEqual(normalizedUrl);
  });

  it('removes traililng slashes', () => {
    const originalUrl = 'https://smash.gg/tournament/cats/';
    const normalizedUrl = 'https://smash.gg/tournament/cats';
    expect(normalizeUrl(originalUrl)).toEqual(normalizedUrl);
  });

  it('converts http to https', () => {
    const originalUrl = 'http://smash.gg/tournament/cats/';
    const normalizedUrl = 'https://smash.gg/tournament/cats';
    expect(normalizeUrl(originalUrl)).toEqual(normalizedUrl);
  });
});
