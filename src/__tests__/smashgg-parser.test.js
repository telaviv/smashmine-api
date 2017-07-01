import { normalizeUrl } from '../smashgg-parser';

describe('normalizeUrl', () => {
  test('suffixes are removed', () => {
    const originalUrl = 'https://smash.gg/tournament/norcal-smash-4-s-arcadian-runback/events';
    const normalizedUrl = 'https://smash.gg/tournament/norcal-smash-4-s-arcadian-runback';
    expect(normalizeUrl(originalUrl)).toEqual(normalizedUrl);
  });
});
