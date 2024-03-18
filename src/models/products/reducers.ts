/* eslint-disable capitalized-comments */
/* eslint-disable no-case-declarations */
/* eslint-disable multiline-comment-style */
import { ProductsActionType } from './types.js';

import type { Product, ProductsAction, ProductsModel } from './types.js';

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
      // newProducts = action.value?.products ?? [];

      // return {
      //   ...state,
      //   products: state.products
      //     ? [...state.products, ...newProducts]
      //     : newProducts
      // };

      newProducts = action.value?.products ?? [];

      const newState = {
        ...state,
        products: state.products
          ? [...state.products, ...newProducts]
          : newProducts
      };

      // Update localStorage
      const stateCopy: Product[] = [...newState.products, ...newProducts];

      localStorage.setItem('students', JSON.stringify(stateCopy));
      const storedData = localStorage.getItem('students');

      // eslint-disable-next-line no-console
      console.log(storedData);

      return newState;

    default:
      return state;
  }
};

export { productsReducer };
