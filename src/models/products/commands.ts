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
  Product,
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
