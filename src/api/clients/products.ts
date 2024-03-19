/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FetchURLOptions } from '@nxweb/core';

import type { Genre, Product } from '@models/products/types.js';

import { API, apiURL } from '../base.js';

interface productsAPIResponse {
  details: Product
  genre: Genre[]
  limit: number
  nowPlaying: Product[]
  products: Product[]
  recommendations: Product[]
  skip: number
  topRated: Product []
  total: number
  upcoming: Product[]
}

export const endpoint =
  'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

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
  const { genres }: any = (await API().get(genreUrl.toString())).data;
  const response = genres as productsAPIResponse['genre'];

  return response;
};

export const getDetail = async (
  id: string,
  options?: Readonly<FetchURLOptions>
) => {
  const detailEndpoint = `movie/${id}`;
  const detailUrl = apiURL(detailEndpoint, options);
  const { data } = await API().get(detailUrl.toString());

  const response = data as productsAPIResponse['details'];

  const poster = `https://image.tmdb.org/t/p/original${response.poster_path}`;

  response.poster_path = poster;

  const backdrop_path = `https://image.tmdb.org/t/p/original${response.backdrop_path}`;

  response.backdrop_path = backdrop_path;

  if (response.genres) {
    response.genre_ids = response.genres?.map((genre) => genre.id);
  }

  return response;
};

export const getRecommendations = async (
  id: string,
  options?: Readonly<FetchURLOptions>
) => {
  const detailEndpoint = `movie/${id}/recommendations`;
  const detailUrl = apiURL(detailEndpoint, options);
  const { results }: any = (await API().get(detailUrl.toString())).data;
  const response = results as productsAPIResponse['recommendations'];

  response.forEach((element) => {
    const poster = `https://image.tmdb.org/t/p/original${element.poster_path}`;

    element.poster_path = poster;

    const backdrop_path = `https://image.tmdb.org/t/p/original${element.backdrop_path}`;

    element.backdrop_path = backdrop_path;
  });

  return response;
};

export const getNowPlaying = async (options?: Readonly<FetchURLOptions>) => {
  const nowPlayingEndpoint = `movie/now_playing?language=en-US&page=1`;
  const nowPlayingUrl = apiURL(nowPlayingEndpoint, options);
  const { results }: any  = (await API().get(nowPlayingUrl.toString())).data;
  const some = results.slice(0, 4);
  const response = some as productsAPIResponse['nowPlaying'];

  return response;
};

export const getUpcoming = async (options?: Readonly<FetchURLOptions>) => {
  const upComingEndpoint = `movie/upcoming?language=en-US&page=1`;
  const upComingUrl = apiURL(upComingEndpoint, options);
  const { results }: any  = (await API().get(upComingUrl.toString())).data;
  const response = results as productsAPIResponse['upcoming'];

  return response;
};

export const getTopRated = async (options?: Readonly<FetchURLOptions>) => {
  const tPEndpoint = `movie/top_rated?language=en-US&page=1`;
  const tPUrl = apiURL(tPEndpoint, options);
  const { results }: any  = (await API().get(tPUrl.toString())).data;
  const some = results.slice(0, 3);
  const response = some as productsAPIResponse['topRated'];

  return response;
};
