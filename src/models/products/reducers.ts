/* eslint-disable capitalized-comments */
/* eslint-disable no-case-declarations */
/* eslint-disable multiline-comment-style */
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

const productsReducer = (
  state: ProductsModel = {},
  action: Readonly<ProductsAction>
): ProductsModel => {
  let newProducts: Product[] = [];
  switch (action.type) {
    case ProductsActionType.Load:
      return !state.products ? { ...action.value } : { ...state };
    case ProductsActionType.Delete:
      const productIdToDelete = action.value;

      return {
        ...state,
        products: state.products
          ? state.products.filter(
            (product) => product.id !== productIdToDelete.id
          )
          : []
      };
    case ProductsActionType.Create:
      newProducts = action.value?.products ?? [];

      return {
        ...state,
        products: state.products
          ? [...state.products, ...newProducts]
          : newProducts
      };
    case ProductsActionType.Update:
      const updatedProducts = action.value?.products ?? [];
      const updatedProductId = updatedProducts[0]?.id;

      return {
        ...state,
        products: (state.products ?? []).map((product: Product) => (product.id === updatedProductId
          ? { ...product, ...updatedProducts[0] }
          : product))
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

    default:
      return state;
  }
};

const now_playingReducer = (
  state: nowPlaying = {},
  action: Readonly<ProductsAction>
): nowPlaying => {
  switch (action.type) {
    case ProductsActionType.NowPlayingLoad:
      if (!state.nowplaying) {
        return { ...action.value };
      }

      return { ...state };

    default:
      return state;
  }
};

const upcomingReducer = (
  state: upComing = {},
  action: Readonly<ProductsAction>
): upComing => {
  switch (action.type) {
    case ProductsActionType.UpcomingLoad:
      if (!state.upcoming) {
        return { ...action.value };
      }

      return { ...state };

    default:
      return state;
  }
};

const topRatedreducer = (
  state: topRated = {},
  action: Readonly<ProductsAction>
): topRated => {
  switch (action.type) {
    case ProductsActionType.TopratedLoad:
      if (!state.topRated) {
        return { ...action.value };
      }

      return { ...state };

    default:
      return state;
  }
};

export {
  productsReducer,
  now_playingReducer,
  upcomingReducer,
  topRatedreducer,
  productDetailReducer
};
