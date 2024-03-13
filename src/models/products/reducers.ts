import { ProductsActionType } from './types.js';

import type { ProductBooked, ProductsAction, ProductsModel } from './types.js';

const productsReducer = (
  state: ProductsModel = {},
  action: Readonly<ProductsAction>
): ProductsModel => {
  switch (action.type) {
    case ProductsActionType.Load:
      return { ...state, ...action.value };
    case ProductsActionType.Clear:
      return {};

    default:
      return state;
  }
};

const productBookedReducer = (
  state: ProductBooked = {},
  action: Readonly<ProductsAction>
): ProductBooked => {
  switch (action.type) {
    case ProductsActionType.Create:
      return { ...state, ...action.value };
    case ProductsActionType.Clear:
      return {};

    default:
      return state;
  }
};

export { productsReducer, productBookedReducer };
