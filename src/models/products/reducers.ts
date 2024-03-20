/* eslint-disable capitalized-comments */
/* eslint-disable no-case-declarations */
/* eslint-disable multiline-comment-style */
import { ProductsActionType } from './types.js';

import type {
  nowPlaying,
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
  switch (action.type) {
    case ProductsActionType.Load:
      return !state.products ? { ...action.value } : { ...state };

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
