/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FetchURLOptions } from '@nxweb/core';

import type { Genre, Product } from '@models/products/types.js';

import { API, apiURL } from '../base.js';

interface productsAPIResponse {
  genre: Genre[]
  limit: number
  products: Product[]
  skip: number
  total: number
  nowplaying: Product[]
  upcoming: Product[]
  topRated: Product []
}

export const endpoint = 'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

export const getProducts = async (options?: Readonly<FetchURLOptions>) => {
  const url = apiURL(endpoint, options);
  const { results }: any = (await API().get(url.toString())).data;

  const response = results as productsAPIResponse['products'];

  return response;
};

export const getGenre = async (options?: Readonly<FetchURLOptions>) => {
  const genreEndpoint = 'genre/movie/list?language=en';
  const genreUrl = apiURL(genreEndpoint, options);
  const { genres }: any  = (await API().get(genreUrl.toString())).data;
  const response = genres as productsAPIResponse['genre'];

  return response;
};

export const getnowPlaying = async (options?: Readonly<FetchURLOptions>) => {
  const nPEndpoint = `movie/now_playing?language=en-US&page=1`;
  const nPUrl = apiURL(nPEndpoint, options);
  const { results }: any  = (await API().get(nPUrl.toString())).data;
  const some = results.slice(0, 4);
  const response = some as productsAPIResponse['nowplaying'];

  return response;
};

export const getupcoming = async (options?: Readonly<FetchURLOptions>) => {
  const upcEndpoint = `movie/upcoming?language=en-US&page=1`;
  const upcUrl = apiURL(upcEndpoint, options);
  const { results }: any  = (await API().get(upcUrl.toString())).data;

  const response = results as productsAPIResponse['upcoming'];

  return response;
};

export const gettopRated = async (options?: Readonly<FetchURLOptions>) => {
  const tPEndpoint = `movie/top_rated?language=en-US&page=1`;
  const tPUrl = apiURL(tPEndpoint, options);
  const { results }: any  = (await API().get(tPUrl.toString())).data;
  const some = results.slice(0, 3);

  const response = some as productsAPIResponse['topRated'];

  return response;
};
