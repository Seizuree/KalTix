/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FetchURLOptions } from '@nxweb/core';

import type { Genre, Product } from '@models/products/types.js';

import { API, apiURL } from '../base.js';

interface productsAPIResponse {
  details: Product[]
  genre: Genre[]
  limit: number
  products: Product[]
  skip: number
  total: number
}

export const endpoint = 'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

export const getProducts = async (options?: Readonly<FetchURLOptions>) => {
  const url = apiURL(endpoint, options);
  const { results }: any = (await API().get(url.toString())).data;

  const response = results as productsAPIResponse['products'];

  response.forEach((element) => {
    const poster = `https://image.tmdb.org/t/p/original/${element.poster_path}`;

    element.poster_path = poster;
  });

  return response;
};

export const getGenre = async (options?: Readonly<FetchURLOptions>) => {
  const genreEndpoint = 'genre/movie/list?language=en';
  const genreUrl = apiURL(genreEndpoint, options);
  const { genres }: any  = (await API().get(genreUrl.toString())).data;
  const response = genres as productsAPIResponse['genre'];

  return response;
};

export const getRecommendations = async (id: string, options?: Readonly<FetchURLOptions>) => {
  const detailEndpoint = `movie/${id}/recommendations`;
  const detailUrl = apiURL(detailEndpoint, options);
  const { results }: any  = (await API().get(detailUrl.toString())).data;
  const response = results as productsAPIResponse['details'];

  response.forEach((element) => {
    const poster = `https://image.tmdb.org/t/p/original/${element.poster_path}`;

    element.poster_path = poster;

    const backdrop_path = `https://image.tmdb.org/t/p/original/${element.backdrop_path}`;

    element.backdrop_path = backdrop_path;
  });

  return response;
};
