/* eslint-disable sort-keys */
import type { Command, FetchURLOptions } from '@nxweb/core';

import {
  getDetail,
  getGenre,
  getnowPlaying,
  getProducts,
  getRecommendations,
  gettopRated,
  getupcoming
} from '@api/clients/products.js';
import type { RootModel } from '@models/types.js';

import { ProductsActionType } from './types.js';

import type {
  nowPlaying,
  Product,
  ProductDetailModel,
  ProductsAction,
  ProductsModel,
  topRated,
  upComing
} from './types.js';

const productsCommand = {
  clear: (): ProductsAction => {
    return {
      type: ProductsActionType.Clear
    };
  },
  create: (product: Product) => {
    return (dispatch) => {
      if (product) {
        const value: ProductsModel = {
          products: [product]
        };

        dispatch({
          type: ProductsActionType.Create,
          value
        });
      }
    };
  },
  load: (options?: Readonly<FetchURLOptions>) => {
    return async (dispatch) => {
      try {
        const [products, genres] = await Promise.all([
          getProducts(options),
          getGenre()
        ]);

        if (products) {
          const value: ProductsModel = {
            genres,
            products
          };

          dispatch({
            type: ProductsActionType.Load,
            value
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
  },
  now_playingLoad: (options?: Readonly<FetchURLOptions>) => {
    return async (dispatch) => {
      try {
        const [nowplaying] = await Promise.all([
          getnowPlaying(options)
        ]);

        if (nowplaying) {
          const value: nowPlaying = {
            nowplaying
          };

          dispatch({
            type: ProductsActionType.now_playingLoad,
            value
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
  },
  upComingLoad: (options?: Readonly<FetchURLOptions>) => {
    return async (dispatch) => {
      try {
        const [upcoming] = await Promise.all([
          getupcoming(options)
        ]);

        if (upcoming) {
          const value: upComing = {
            upcoming
          };

          dispatch({
            type: ProductsActionType.upcomingLoad,
            value
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
  },
  topRatedLoad: (options?: Readonly<FetchURLOptions>) => {
    return async (dispatch) => {
      try {
        const [topRated] = await Promise.all([
          gettopRated(options)
        ]);

        if (topRated) {
          const value: topRated = {
            topRated
          };

          dispatch({
            type: ProductsActionType.topRatedLoad,
            value
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
  },
  detail: (id: string) => {
    return async (dispatch) => {
      try {
        const [recommendations, detail, genres] = await Promise.all([
          getRecommendations(id),
          getDetail(id),
          getGenre()
        ]);

        if (recommendations && detail) {
          const value: ProductDetailModel = {
            recommendations,
            detail,
            genres
          };

          dispatch({
            type: ProductsActionType.Detail,
            value
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
  },
  update: (product: Product) => {
    return (dispatch) => {
      if (product) {
        const value: ProductsModel = {
          products: [product]
        };

        dispatch({
          type: ProductsActionType.Update,
          value
        });
      }
    };
  }
} satisfies Command<RootModel, ProductsAction>;

export { productsCommand };
