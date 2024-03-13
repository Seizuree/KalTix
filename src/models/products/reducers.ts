import { ProductsActionType } from './types.js';

import type {
  Product,
  ProductBooked,
  ProductsAction,
  ProductsModel
} from './types.js';

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
  state: ProductBooked = { booked: [] },
  action: Readonly<ProductsAction>
): ProductBooked => {
  let newProducts: Product[] = [];
  switch (action.type) {
    case ProductsActionType.Create:
      newProducts = action.value?.booked ?? [];

      return {
        ...state,
        booked: state.booked
          ? [...state.booked, ...newProducts]
          : newProducts
      };
    case ProductsActionType.Load:
      return { ...state, ...action.value };
    case ProductsActionType.Clear:
      return {};

    default:
      return state;
  }
};

export { productsReducer, productBookedReducer };
