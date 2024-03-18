import type { Command, FetchURLOptions } from '@nxweb/core';

import { getGenre, getProducts } from '@api/clients/products.js';
import type { RootModel } from '@models/types.js';

import { ProductsActionType } from './types.js';

import type { Product, ProductsAction, ProductsModel } from './types.js';

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
  }
} satisfies Command<RootModel, ProductsAction>;

export { productsCommand };
