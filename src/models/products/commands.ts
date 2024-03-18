/* eslint-disable sort-keys */
import type { Command, FetchURLOptions } from '@nxweb/core';

import {
  getDetail,
  getGenre,
  getProducts,
  getRecommendations
} from '@api/clients/products.js';
import type { RootModel } from '@models/types.js';

import { ProductsActionType } from './types.js';

import type {
  ProductDetailModel,
  ProductsAction,
  ProductsModel
} from './types.js';

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
  detail: (id: string) => {
    return async (dispatch) => {
      try {
        const [recommendations, detail] = await Promise.all([getRecommendations(id), getDetail(id)]);

        if (recommendations) {
          const value: ProductDetailModel = {
            recommendations,
            detail
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
  }
} satisfies Command<RootModel, ProductsAction>;

export { productsCommand };
