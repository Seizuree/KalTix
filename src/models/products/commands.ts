import type { Command, FetchURLOptions } from '@nxweb/core';

import { getGenre, getnowPlaying, getProducts, gettopRated, getupcoming } from '@api/clients/products.js';
import type { RootModel } from '@models/types.js';

import { ProductsActionType } from './types.js';

import type { nowPlaying, ProductsAction, ProductsModel, topRated, upComing } from './types.js';

const productsCommand = {
  clear: (): ProductsAction => {
    return {
      type: ProductsActionType.Clear
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
  }
} satisfies Command<RootModel, ProductsAction>;

export { productsCommand };
