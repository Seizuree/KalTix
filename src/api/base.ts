import { compact, createFetch, createFetchURL } from '@nxweb/core';
import type { FetchURLOptions } from '@nxweb/core';

import { apiMock } from './mock.js';

export const apiURL = (
  endpoint: string,
  options: Readonly<FetchURLOptions> = {}
) => {
  return createFetchURL(
    endpoint,
    compact({
      ...options,
      baseURL: window.NX?.env.apiURL
    })
  );
};

export const API = (mocked: boolean = false) => {
  const fetch = createFetch({
    get baseURL() {
      return window.NX?.env.apiURL;
    },
    headers: compact({
      accept: 'application/json',
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmRmM2Y3NmY4ZGIyYjdhOTgyN2ZlOWU2ZDZjMTg3YiIsInN1YiI6IjY1ZjEyMTM2ZWVhMzRkMDE4ODEyZmZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ij3JUU2c44YT7FPI00Qy8L2Dta61tCbhpCnNgBl9BFU'
    })
  });

  return mocked ? apiMock(fetch) : fetch;
};
