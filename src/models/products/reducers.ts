import { ProductsActionType } from './types.js';

import type { nowPlaying, ProductsAction, ProductsModel, topRated, upComing } from './types.js';

const productsReducer = (
  state: ProductsModel = {},
  action: Readonly<ProductsAction>
): ProductsModel => {
  switch (action.type) {
    case ProductsActionType.Load:

      if (!state.products) {
        return { ...action.value };
      }

      return { ...state };
    case ProductsActionType.Clear:
      return {};

    default:
      return state;
  }
};

const now_playingReducer = (
  state: nowPlaying = {},
  action: Readonly<ProductsAction>
): nowPlaying => {
  switch (action.type) {
    case ProductsActionType.now_playingLoad:
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
    case ProductsActionType.upcomingLoad:
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
    case ProductsActionType.topRatedLoad:
      if (!state.topRated) {
        return { ...action.value };
      }

      return { ...state };

    default:
      return state;
  }
};

export { productsReducer, now_playingReducer, upcomingReducer, topRatedreducer };
