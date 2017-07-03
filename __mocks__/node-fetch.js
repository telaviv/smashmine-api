import callable from 'callable-object';

class MockFetchError extends Error {
  constructor(message) {
    super(message);
  }
}

class MockFetch {
  constructor() {
    this.request = null;
    this.resolve = null;
  }

  __call__(url) {
    return new Promise((resolve) => {
      this.request = url;
      this.resolve = success;
    });
  }

  _jsonResponse(json) {
    return {
      ok: true,
      json: () => json,
    }
  }

  respond(json) {
    if (this.request === null) {
      throw new MockFetchError('No request made');
    }

    const resolve = this.resolve;
    this.resolve = null;
    this.request = null

    resolve(this._jsonResponse(json));
  }

  clear() {
    this.resolve = null;
    this.request = null;
  }
}

export default callable(MockFetch);
