jest.mock('node-fetch');

import { normalizeUrl, isMatchingUrl, fetchTournamentData } from '../smashgg-parser';
import mockFetch from 'node-fetch';

describe('normalizeUrl', () => {
  it('removes suffixes', () => {
    const originalUrl = 'https://smash.gg/tournament/norcal-smash-4-s-arcadian-runback/events';
    const normalizedUrl = 'https://smash.gg/tournament/norcal-smash-4-s-arcadian-runback';
    expect(normalizeUrl(originalUrl)).toEqual(normalizedUrl);
  });

  it('removes trailing slashes', () => {
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

describe('isMatchingUrl', () => {
  it('matches smash.gg urls', () => {
    const url = 'https://smash.gg/tournament/norcal-smash-4-s-arcadian-runback/events';
    expect(isMatchingUrl(url)).toBeTruthy();
  });

  it('does not match challonge urls', () => {
    const url = 'http://challonge.com/capcom_cup_2015';
    expect(isMatchingUrl(url)).toBeFalsy();
  });
});

describe('fetchTournamentData', () => {
  afterEach(() => {
    mockFetch.clear();
  });

  it('was called with with the general info url', () => {
    const url = 'https://smash.gg/tournament/norcal-smash-4-s-arcadian-runback';
    const apiUrl = 'https://smash.gg/api/-/resource/gg_api./tournament/' +
                   'norcal-smash-4-s-arcadian-runback' +
                   ';expand=%5B%22groups%22%2C%22tournament%22%2C%22event%22%5D' +
                   ';slug=norcal-smash-4-s-arcadian-runback';
    fetchTournamentData(url);
    expect(mockFetch.request).toEqual(apiUrl);
  });
});
