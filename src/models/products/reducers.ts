/* eslint-disable capitalized-comments */
/* eslint-disable no-case-declarations */
/* eslint-disable multiline-comment-style */
import { ProductsActionType } from './types.js';

import type {
  Product,
  ProductDetailModel,
  ProductsAction,
  ProductsModel
} from './types.js';

const productsReducer = (
  state: ProductsModel = {},
  action: Readonly<ProductsAction>
): ProductsModel => {
  let newProducts: Product[] = [];
  switch (action.type) {
    case ProductsActionType.Load:
      return !state.products ? { ...action.value } : { ...state };
    case ProductsActionType.Clear:
      return {};
    case ProductsActionType.Create:
      newProducts = action.value?.products ?? [];

      return {
        ...state,
        products: state.products
          ? [...state.products, ...newProducts]
          : newProducts
      };
    case ProductsActionType.Update:
      const { products } = state;
      const { products: updatedProducts } = action.value || {};

      if (products && updatedProducts && products[0]?.id === updatedProducts[0]?.id) {
        const { genre_ids, overview, poster_path, release_date, title } = updatedProducts[0];

        Object.assign(products[0], { genre_ids, overview, poster_path, release_date, title });
      }

      return { ...state };

    default:
      return state;
  }
};

const productDetailReducer = (
  state: ProductDetailModel = {},
  action: Readonly<ProductsAction>
): ProductDetailModel => {
  switch (action.type) {
    case ProductsActionType.Detail:
      return { ...state, ...action.value };
    case ProductsActionType.Clear:
      return {};

    default:
      return state;
  }
};

export { productsReducer, productDetailReducer };
