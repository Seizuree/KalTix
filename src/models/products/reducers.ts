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

      if (!state.products) {
        return { ...action.value };
      }

      return { ...state };
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
