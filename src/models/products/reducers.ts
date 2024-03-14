import { ProductsActionType } from './types.js';

import type { Product, ProductsAction, ProductsModel } from './types.js';

const productsReducer = (
  state: ProductsModel = {},
  action: Readonly<ProductsAction>
): ProductsModel => {
  let newProducts: Product[] = [];
  switch (action.type) {
    case ProductsActionType.Load:
      return { ...state, ...action.value };
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

export { productsReducer };
